import PropTypes from "prop-types";
import "./Card.scss";

export const Card = ({ children, className }) => {
  return <div className={`card ${className || ""}`}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
