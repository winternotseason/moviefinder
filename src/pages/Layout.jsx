import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
const Layout = () => {
  return (
    <>
      <SideBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
