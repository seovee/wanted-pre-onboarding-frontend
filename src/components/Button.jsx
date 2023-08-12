import PropTypes from "prop-types";

function Button({ title }) {
  return <h1>Button components</h1>;
}

Button.propTypes = {
  title: PropTypes.string,
};

export default Button;
