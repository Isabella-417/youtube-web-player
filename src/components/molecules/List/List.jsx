import PropTypes from "prop-types";
import { motion } from "framer-motion";
import "./List.scss";

export const List = ({ data, renderKey, handleSelect, focus }) => {
  return (
    <motion.div
      className="list-container"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
    >
      {data.map((item) => (
        <motion.div
          key={item.key}
          className="card"
          onClick={() => {
            handleSelect(item.key);
            focus?.();
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <img src={item.image.url} alt={item.label} />
          <div className="info">
            <div className="title">{item[renderKey]}</div>
            <div className="channel">{item.channel || "Unknown channel"}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

List.propTypes = {
  renderKey: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  handleSelect: PropTypes.func,
  focus: PropTypes.func,
};

List.defaultProps = {
  renderKey: "label",
  data: [],
  handleSelect: () => {},
  focus: null,
};
