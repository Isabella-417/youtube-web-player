import PropTypes from "prop-types";
import "../Navbar/Navbar.scss";
import youtubeLogo from "../../../assets/images/youtube.svg";

export const Navbar = (props) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
         <img src={youtubeLogo} height={50} width={100} alt="youtube logo" />
        </li>
        {Array.isArray(props.children) &&
          props.children.map((item) => <li>{item}</li>)}

        {!Array.isArray(props.children) && (
          <li className="center">{props.children}</li>
        )}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Youtube challenge",
  children: [],
};
