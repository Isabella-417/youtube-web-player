import PropTypes from "prop-types";

export const Card = (props) => (
  <div className={props.style}> {props.children}</div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};

Card.defaultProps = {
  type: "light",
};
