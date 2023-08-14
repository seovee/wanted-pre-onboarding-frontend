import { styled } from "styled-components";

const InputComponent = styled.input`
  height: 40px;
  border: 1px solid darkgrey;
  padding: 0 10px;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function Input(props) {
  return (
    <>
      <InputComponent
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        {...props}
      />
    </>
  );
}

export default Input;
