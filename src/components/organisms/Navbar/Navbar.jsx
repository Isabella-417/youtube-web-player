import PropTypes from "prop-types";
import "../Navbar/Navbar.scss";

export const Navbar = (props) => {
  return (
    <nav>
      <ul>
        <li>{props.title}</li>
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
