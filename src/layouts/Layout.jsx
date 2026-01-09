import { Outlet , useLocation} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import authBg from "../assets/login2.png";
const Layout = () => {
  const { pathname } = useLocation();

  // حط هنا مسارات الصفحات الـ 3
  const bgPages = ["/auth/login", "/auth/register"];
  const hasBg = bgPages.includes(pathname);
  return (
    <div className={`min-h-dvh flex flex-col ${hasBg ? "bg-cover bg-center" : ""}`}
      style={hasBg ? { backgroundImage: `url(${authBg})` } : undefined}>
      <Navbar />
      <main className="flex-1 pt-10 pb-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
