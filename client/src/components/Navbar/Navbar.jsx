import { useState, useEffect, useContext } from "react";

import { api } from "./../../services/api";
import "./Navbar.scss";
import { image } from "./../../constants";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const Navbar = () => {
  // const [username, setUsername] = useState("");
  const { userInfo, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.get("/profiles", { withCredentials: true });
        if (result) setUserInfo(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const username = userInfo?.username;
  const logout = async () => {
    try {
      const result = await api.post(
        "/logout",
        {},
        {
          withCredentials: true,
        }
      );
    } catch (err) {
      console.log(err.message);
    }
    setUserInfo(null);
  };

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
            <li className="user__icon">
              <a>{username}</a>
            </li>
            <li>
              <a onClick={logout}>logout</a>
            </li>
            <li>
              <Link to="/createPost">{username}</Link>
            </li>
            <li>
              <a onClick={logout}>logout</a>
            </li>
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
