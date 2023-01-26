import PropTypes from "prop-types";
import { escapeHtml } from "../../../lib.js";
import "../Image/Image.scss";

export const Image = (props) => {
  const  { text, size, handleSelect } = props;
  
  return (
    <figure className={props.alignment} onClick={handleSelect}>
      <img src={props.src} alt={props.alt} className={size} />
      <figcaption className={props.size}>{escapeHtml(text)}</figcaption>
    </figure>
  );
};

Image.defaultProps = {
  alignment: "horizontal",
  size: "medium",
};

Image.propTypes = {
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  alignment: PropTypes.string,
  size: PropTypes.string,
  handleSelect: PropTypes.func,
};
