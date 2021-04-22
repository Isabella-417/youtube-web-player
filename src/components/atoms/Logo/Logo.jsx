import PropTypes from "prop-types";
import "../Logo/Logo.scss";

export const Logo = (props) => {
  <img className={props.alignment} src={props.src} alt={props.alt} />;
};

Logo.defaultProps = {
  alignment: "horizontal",
  size: "small",
};

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  alignment: PropTypes.string,
  size: PropTypes.string,
};
