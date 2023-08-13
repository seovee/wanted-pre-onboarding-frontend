import { styled } from "styled-components";

const TodoItemList = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const ToDoContents = styled.span`
  display: inline-block;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 3px;
  flex-shrink: 0;
`;

const TodoButtone = styled.button`
  border: 0.2px solid lightgray;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function TodoItem({ todo, onClickDelete }) {
  return (
    <>
      <TodoItemList key={todo.id}>
        <input type="checkbox" />
        <ToDoContents>{todo.text}</ToDoContents>
        <ButtonWrapper>
          <TodoButtone>수정</TodoButtone>
          <TodoButtone onClick={() => onClickDelete(todo.id)}>삭제</TodoButtone>
        </ButtonWrapper>
      </TodoItemList>
    </>
  );
}

export default TodoItem;