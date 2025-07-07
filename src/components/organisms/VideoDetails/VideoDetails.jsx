import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Video } from "../../atoms/Video/Video";
import { Context } from "../../../context/context";
import { escapeHtml } from "../../../lib";
import "../VideoDetails/VideoDetails.scss";

export const VideoDetails = () => {
  const { video } = useContext(Context);
  const [expanded, setExpanded] = useState(false);

  const current = video?.playlist?.[0];

  if (!current) {
    return (
      <div className="container-video-details">
        <p className="text-muted">No video selected.</p>
      </div>
    );
  }

  const { label, url, title, description, channel_name } = current;

  return (
    <div className="container-video-details">
      <div className="container-video">
        <Video url={url} title={label} />
      </div>

      <motion.div
        className="container-title"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2>{escapeHtml(title)}</h2>
        <h3>{channel_name}</h3>
      </motion.div>

      <motion.div
        className={`container-description ${expanded ? "expanded" : ""}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p>{description}</p>
        {description?.length > 300 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="toggle-button"
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        )}
      </motion.div>
    </div>
  );
};

VideoDetails.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
