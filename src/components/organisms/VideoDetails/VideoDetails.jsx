import PropTypes from "prop-types";
import { useContext } from "react";
import { Video } from "../../atoms/Video/Video";
import { Context } from "../../../context/context";
import {escapeHtml} from "../../../lib.js";
import "../VideoDetails/VideoDetails.scss";

export const VideoDetails = () => {
  const { video } = useContext(Context);
  const { label, url, title, description, channel_name } = video.playlist[0];

  return (
    <div className="container-video-details">
      <div className="container-video">
        <Video url={url} title={label}  />
      </div>
      <div className="container-title">
        <h2>{escapeHtml(title)}</h2>
        <h3>{channel_name}</h3>
      </div>
      <div className="container-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

VideoDetails.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
