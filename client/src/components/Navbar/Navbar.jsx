import "./Navbar.scss";
import { image } from "./../../constants";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={image.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["login", "register"].map((link) => (
          <li key={`nav-${link}`}>
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
