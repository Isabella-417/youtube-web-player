import "../Video/Video.scss";
import PropTypes from "prop-types";

export const Video = (props) => {
  return (
    <div className="video-container">
      <iframe  title={props.title} src={props.url}></iframe>
    </div>
  );
};

Video.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
