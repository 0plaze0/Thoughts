import { Navbar } from "../components";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Home;
