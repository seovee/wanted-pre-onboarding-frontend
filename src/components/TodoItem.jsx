import { useState } from "react";
import { styled } from "styled-components";

const TodoItemList = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const TodoLabel = styled.label`
  display: flex;
  gap: 10px;
`;

const TodoInput = styled.input``;

const TodoContents = styled.span`
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

const EditInput = styled.input`
  border: 1px solid darkgrey;
  width: 180px;
  padding: 0 5px;
  border-radius: 2px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function TodoItem({ key, todo, onClickDelete }) {
  const [updateTodo, setUpdateTodo] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onClickEditCancel = () => {
    setIsEdit(false);
  };

  const onChangeEdit = (e) => {
    const edit = e.target.value;
    setIsEdit(edit);
  };

  return (
    <TodoItemList key={todo.id}>
      <TodoLabel>
        <TodoInput type="checkbox" />
        {isEdit ? (
          <EditInput
            type="text"
            placeholder="수정할 할일을 추가하세요"
            onChange={onChangeEdit}
          />
        ) : (
          <TodoContents>{todo.text}</TodoContents>
        )}
      </TodoLabel>
      <ButtonWrapper>
        {isEdit ? (
          <TodoButtone>완료</TodoButtone>
        ) : (
          <TodoButtone onClick={onClickEdit}>수정</TodoButtone>
        )}
        {isEdit ? (
          <TodoButtone onClick={onClickEditCancel}>취소</TodoButtone>
        ) : (
          <TodoButtone onClick={() => onClickDelete(todo.id)}>삭제</TodoButtone>
        )}
      </ButtonWrapper>
    </TodoItemList>
  );
}

export default TodoItem;
