import PropTypes from "prop-types";
import { useContext } from "react";
import { Video } from "../../atoms/Video/Video";
import { Context } from "../../../context/context";
import "../VideoDetails/VideoDetails.scss";

export const VideoDetails = (props) => {
  const { video } = useContext(Context);
  return (
    <div className="container-video-details">
      <div className="container-video">
        <Video
          url={video.playlist[0].url}
          title={video.playlist[0].label}
          src={video.playlist[0].url}
        />
      </div>
      <div className="container-description">
        <p>{video.playlist[0].description}</p>
      </div>
    </div>
  );
};

VideoDetails.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
