import Container from "../components/Container";
import PageTitle from "../components/PageTitle";
import { styled } from "styled-components";
import { useState } from "react";
import TodoItem from "../components/TodoItem";

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

const TodoList = styled.ul`
  width: 30vw;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 30px;
  padding: 0;
`;

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const onClickAdd = () => {
    if (!text) return;
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
    setText("");
  };

  const onClickDelete = (id) => {
    setTodos(todos.filter((todoItem) => todoItem.id !== id));
  };

  const updateTodo = (updateObject) => {
    const updateTodos = todos.map((todo) =>
      todo.id === updateObject.id ? { ...todo, text: updateObject.text } : todo
    );
    setTodos(updateTodos);
  };

  const onKeyUpAdd = (e) => {
    if (e.key === "Enter") {
      onClickAdd();
    }
  };

  return (
    <Container>
      <PageTitle title="ToDo List" />
      <AddToDoContainer>
        <AddInput
          type="text"
          value={text}
          placeholder="할일을 추가"
          onChange={(e) => setText(e.target.value)}
          onKeyUp={onKeyUpAdd}
        />
        <AddButton onClick={onClickAdd}>할일 추가</AddButton>
      </AddToDoContainer>
      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onUpdate={updateTodo}
            onClickDelete={onClickDelete}
          />
        ))}
      </TodoList>
    </Container>
  );
}

export default ToDo;
