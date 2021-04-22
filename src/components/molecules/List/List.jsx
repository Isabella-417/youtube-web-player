import { Item } from "../../atoms/Item/Item";
import PropTypes from "prop-types";

export const List = (props) => (
  <>
    {props.data.map((item) => (
      <Item key={item.key}>{item[props.renderKey]}</Item>
    ))}
  </>
);

List.propTypes = {
  renderKey: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
};

List.defaultProps = {
  renderKey: "label",
  data: [],
};
