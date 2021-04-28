import PropTypes from "prop-types";
import "../Input/Input.scss";

export const Input = (props) => {
  return (
    <input
      className={props.color}
      type={props.type}
      placeholder={props.placeholder}
      onKeyPress={props.onKeyPress}
    />
  );
};

Input.defaultProps = {
  type: "text",
  placeholder: "Default",
  onKeyPress: () => {},
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  onKeyPress: PropTypes.func,
};
