import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import authBg from "../assets/login2.png";
const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar className="" />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
