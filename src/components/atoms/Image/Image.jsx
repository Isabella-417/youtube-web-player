import PropTypes from "prop-types";
import "../Image/Image.scss";

export const Image = (props) => {
  return (
    <figure className={props.alignment}>
      <img src={props.src} alt={props.alt} className={props.size} />
      <figcaption className={props.size}>{props.text}</figcaption>
    </figure>
  );
};

Image.defaultProps = {
  alignment: "horizontal",
  size: "small",
};

Image.propTypes = {
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  alignment: PropTypes.string,
  size: PropTypes.string,
};
