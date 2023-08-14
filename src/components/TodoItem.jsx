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
  justify-content: space-around;
  width: 100%;
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
  display: flex;
  width: 100%;
  padding: 0 5px;
  border-radius: 2px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function TodoItem(props) {
  const [updateTodo, setUpdateTodo] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onClickEditCancel = () => {
    setIsEdit(false);
  };

  const onChangeEdit = (e) => {
    const updatedTodo = { id: props.todo.id, text: updateTodo };
    props.onUpdate(updatedTodo);
    setIsEdit(false);
  };

  const onCheckedEdit = (e) => {
    setIsChecked(e.target.checked);
    const updateCheckItem = { id: props.todo.id, completed: isChecked };
    props.onChecked(updateCheckItem);
  };

  return (
    <TodoItemList key={props.todo.id}>
      <TodoLabel>
        <TodoInput type="checkbox" onChange={onCheckedEdit} />
        {isEdit ? (
          <EditInput
            type="text"
            placeholder="수정할 할일을 추가하세요"
            onChange={(newText) => setUpdateTodo(newText.target.value)}
            data-testid="modify-input"
          />
        ) : (
          <TodoContents>{props.todo.text}</TodoContents>
        )}
      </TodoLabel>
      <ButtonWrapper>
        {isEdit ? (
          <TodoButtone onClick={onChangeEdit} data-testid="submit-button">
            제출
          </TodoButtone>
        ) : (
          <TodoButtone onClick={onClickEdit} data-testid="modify-button">
            수정
          </TodoButtone>
        )}
        {isEdit ? (
          <TodoButtone onClick={onClickEditCancel} data-testid="cancel-button">
            취소
          </TodoButtone>
        ) : (
          <TodoButtone
            onClick={() => props.onClickDelete(props.todo.id)}
            data-testid="delete-button"
          >
            삭제
          </TodoButtone>
        )}
      </ButtonWrapper>
    </TodoItemList>
  );
}

export default TodoItem;
