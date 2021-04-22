import PropTypes from "prop-types";

export const Item = (props) => <>{props.children} </>;

Item.propTypes = {
  children: PropTypes.node.isRequired,
};
