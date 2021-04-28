import PropTypes from "prop-types";
import { Image } from "../../atoms/Image/Image";

export const List = (props) => {
  return (
    <>
      {props.data.map((item) => (
        <Image
          key={item.key}
          text={item[props.renderKey]}
          src={item.image.url}
          alt={item.label}
          handleSelect={() => {props.handleSelect(item.key)}}
        />
      ))}
    </>
  );
};

List.propTypes = {
  renderKey: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  handleSelect: PropTypes.func,
};

List.defaultProps = {
  renderKey: "label",
  data: [],
  src: "",
  alt: "default image",
  handleSelect: () => {},
};
