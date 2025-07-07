import PropTypes from "prop-types";
import "../Navbar/Navbar.scss";
import youtubeLogo from "../../../assets/images/youtube.svg";

export const Navbar = (props) => {
  const { children } = props;

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__logo">
          <img src={youtubeLogo} height={50} width={100} alt="YouTube logo" />
        </li>

        {Array.isArray(children) ? (
          children.map((item, index) => (
            <li key={index} className="navbar__item">
              {item}
            </li>
          ))
        ) : (
          <li className="navbar__item navbar__center">{children}</li>
        )}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Navbar.defaultProps = {
  title: "Youtube challenge",
  children: [],
};
