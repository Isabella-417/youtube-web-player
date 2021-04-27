import PropTypes from "prop-types";
import "../Navbar/Navbar.scss";

export const Navbar = (props) => {
  console.log(props.children);

  return (
    <nav>
      <ul>
        <li>{props.title}</li>
        {Array.isArray(props.children) &&
          props.children.map((item) => <li>{item}</li>)}

        {!Array.isArray(props.children) && <li className="center">{props.children}</li>}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node),
};

Navbar.defaultProps = {
  title: "Youtube challenge",
  children: [],
};
