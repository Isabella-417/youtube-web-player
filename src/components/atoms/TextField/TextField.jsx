import PropTypes from "prop-types";

export const TextField = (props) => {
  return <p className={props.color}>{props.content}</p>;
};

TextField.defaultProps = {
  content: "Default",
};

TextField.propTypes = {
  content: PropTypes.string.isRequired,
};
