import PropTypes from "prop-types";
import { Video } from "../../atoms/Video/Video";
import "../VideoDetails/VideoDetails.scss";

export const VideoDetails = (props) => {
  return (
    <div className="container-video-details">
      <div className="container-video">
        <Video url={props.url} title={props.title} src={props.url} />
      </div>
      <div className="container-description">
        <p>{props.description}</p>
      </div>
    </div>
  );
};

VideoDetails.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
