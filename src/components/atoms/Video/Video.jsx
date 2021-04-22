import "../Video/Video.scss";
import PropTypes from "prop-types";

export const Video = (props) => {
  return <iframe title={props.title} src={props.url}></iframe>;
};

Video.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
