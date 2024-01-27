import { useState, useEffect, useContext } from "react";

import { api } from "./../../services/api";
import "./Navbar.scss";
import { image } from "./../../constants";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const Navbar = () => {
  const [username, setUsername] = useState("");
  const { userInfo, setUserInfo } = useContext(UserContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.get("/profiles", { withCredentials: true });
        if (result) setUserInfo(result);
        setUsername(userInfo.username);
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
        {username && (
          <>
            {[username, "logout"].map((link) => (
              <li key={`nav-${link}`}>
                <Link to={`/${link}`}>{link}</Link>
              </li>
            ))}
          </>
        )}
        {!username && (
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
