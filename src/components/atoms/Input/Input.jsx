import PropTypes from "prop-types";

export const Input = (props) => {
  <input
    className={props.color}
    type={props.type}
    placeholder={props.placeholder}
  />;
};

Input.defaultProps = {
  type: "text",
  placeholder: "Default",
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
};
