import "../Video/Video.scss";
import PropTypes from "prop-types";

export const Video = (props) => {
  return (
    <div className="video-container">
      <iframe  src={props.url} title={props.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  );
};

Video.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};
