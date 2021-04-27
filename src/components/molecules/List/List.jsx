import { Card } from "../../molecules/Card/Card";
import { Image } from "../../atoms/Image/Image";

import PropTypes from "prop-types";

export const List = (props) => (
  <>
    {props.data.map((item) => (
      <Card key={item.key}>
        <Image
          text={item[props.renderKey]}
          src={item.image.url}
          alt={item.label}
        />
      </Card>
    ))}
  </>
);

List.propTypes = {
  renderKey: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
};

List.defaultProps = {
  renderKey: "label",
  data: [],
  src: "",
  alt: "default image",
};
