import { styled } from "styled-components";
import PropTypes from "prop-types";

const ButtonComponent = styled.button`
  border-radius: 10px;
  height: 40px;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function Button(props) {
  return (
    <>
      {!props.disabled ? (
        <ButtonComponent onClick={props.onClick} {...props}>
          {props.title}
        </ButtonComponent>
      ) : (
        <ButtonComponent
          onClick={props.onClick}
          disabled={props.disabled}
          style={{ cursor: "not-allowed" }}
          {...props}
        >
          {props.title}
        </ButtonComponent>
      )}
    </>
  );
}

Button.propTypes = {
  title: PropTypes.string,
};

export default Button;
