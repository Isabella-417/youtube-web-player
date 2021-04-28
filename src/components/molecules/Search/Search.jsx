import PropTypes from "prop-types";
import { Input } from "../../atoms/Input/Input";
import "./Search.scss";

export const Search = (props) => {
  return <Input placeholder="Search" onKeyPress={props.onKeyPress} />;
};

Input.defaultProps = {
  onKeyPress: () => {},
};


Input.propTypes = {
  onKeyPress: PropTypes.func,
};