import { useState, useEffect } from "react";

import { api } from "./../../services/api";
import "./Navbar.scss";
import { image } from "./../../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [username, setUsername] = useState("hello");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.get("/profiles", { withCredentials: true });
        console.log(result.username);
        if (result) setUsername(result.username);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/">
          <img src={image.logo} alt="logo" />{" "}
        </Link>
      </div>
      <ul className="app__navbar-links">
        {username ? (
          <>
            {[username, "logout"].map((link) => (
              <li key={`nav-${link}`}>
                <Link to={`/${link}`}>{link}</Link>
              </li>
            ))}
          </>
        ) : (
          <>
            {["login", "register"].map((link) => (
              <li key={`nav-${link}`}>
                <Link to={`/${link}`}>{link}</Link>
              </li>
            ))}
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
