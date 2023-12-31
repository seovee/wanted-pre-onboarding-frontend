import { useEffect, useState } from "react";
import { styled } from "styled-components";
import TodoItem from "../components/TodoItem";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";

const AddToDoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  gap: 20px;
`;

const AddInput = styled.input`
  height: 40px;
  border: 1px solid darkgrey;
  padding: 0 10px;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const AddButton = styled.div`
  background-color: orange;
  color: white;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: auto;
  border-radius: 10px;
  height: 40px;
  cursor: pointer;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const TodoComentsContainer = styled.div`
  margin-top: 0;
  margin-bottom: 5px;
`;
const TodoComents = styled.span`
  display: flex;
  font-size: 20px;

  p:first-child {
    font-weight: 700;
    color: orange;
  }
`;

const TodoList = styled.ul`
  width: 30vw;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 30px;
  padding: 0;
`;

function ToDo() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [text, setText] = useState("");

  // localStorage_1
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // localStorage_2
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // 할일 추가 이벤트
  const onClickAdd = () => {
    if (!text) return;
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
    setText("");
  };

  // 할일 삭제 이벤트
  const onClickDelete = (id) => {
    setTodos(todos.filter((todoItem) => todoItem.id !== id));
  };

  // 새로운 할일 넣어주는 함수
  const updateTodo = (updateObject) => {
    const updateTodos = todos.map((todo) =>
      todo.id === updateObject.id ? { ...todo, text: updateObject.text } : todo
    );
    setTodos(updateTodos);
  };

  // 체크상태 확인하는 함수
  const updateCheck = (updateObject) => {
    const updateCheck = todos.map((todo) =>
      todo.id === updateObject.id
        ? { ...todo, completed: !updateObject.completed }
        : todo
    );
    setTodos(updateCheck);
  };

  // Enter키 기능 추가
  const onKeyUpAdd = (e) => {
    if (e.key === "Enter") {
      onClickAdd();
    }
  };

  // 할일 완료 개수 Count
  const completeCount = todos.filter((todo) => todo.completed === false).length;

  return (
    <Container>
      <PageTitle title="ToDo List" />
      {completeCount === 0 ? null : (
        <TodoComentsContainer>
          <TodoComents>
            <p>{completeCount}개의 할일</p>
            <p>이 남았습니다.</p>
          </TodoComents>
        </TodoComentsContainer>
      )}
      <AddToDoContainer>
        <AddInput
          type="text"
          value={text}
          placeholder="할일을 추가"
          onChange={(e) => setText(e.target.value)}
          onKeyUp={onKeyUpAdd}
          data-testid="new-todo-input"
        />
        <AddButton onClick={onClickAdd} data-testid="new-todo-add-button">
          할일 추가
        </AddButton>
      </AddToDoContainer>

      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onUpdate={updateTodo}
            onChecked={updateCheck}
            onClickDelete={onClickDelete}
          />
        ))}
      </TodoList>
    </Container>
  );
}

export default ToDo;
