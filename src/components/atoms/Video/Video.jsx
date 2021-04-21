import "../Video/Video.scss";
import PropTypes from 'prop-types'


export const Video = (props) => {
  return (
    <>
      <video width={props.width} height={props.height} controls>
        <source src="movie.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

Video.defaultProps = {
  width: 100,
  height: 100,
};

Video.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
