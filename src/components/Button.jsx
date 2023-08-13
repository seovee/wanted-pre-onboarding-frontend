import PropTypes from "prop-types";
import { styled } from "styled-components";

const ButtonComponent = styled.button`
  border-radius: 10px;
  height: 40px;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function Button({ title, disabled, onClick }) {
  return (
    <>
      {!disabled ? (
        <ButtonComponent onClick={onClick}>{title}</ButtonComponent>
      ) : (
        <ButtonComponent
          onClick={onClick}
          disabled={disabled}
          style={{ cursor: "not-allowed" }}
        >
          {title}
        </ButtonComponent>
      )}
    </>
  );
}

Button.propTypes = {
  title: PropTypes.string,
};

export default Button;
