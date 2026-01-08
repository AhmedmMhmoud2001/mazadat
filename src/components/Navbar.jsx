import { Link, useLocation } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import logo from "../assets/ChatGPT Image Sep 20, 2025, 12_03_45 PM 1.png";

const navItems = [
  { label: "الرئيسية", to: "/" },
  { label: "المزادات", to: "/auctions" },
  { label: "خدماتنا", to: "/#services", anchor: true },
  { label: "من نحن", to: "/#about", anchor: true },
  { label: "مساعدة", to: "/#support", anchor: true },
];

const Navbar = () => {
  const location = useLocation();
  const isAuthPage = location.pathname.startsWith("/auth");
  const isHomePage = location.pathname === "/";
  const showLoginCta = isHomePage && !isAuthPage;
  const showSettings = !isAuthPage && !isHomePage;

  const isActive = (item) => {
    if (item.anchor) {
      return location.pathname === "/" && location.hash === item.to.replace("/", "");
    }
    if (item.to === "/") {
      return location.pathname === "/" && !location.hash;
    }
    return location.pathname.startsWith(item.to);
  };

  return (
    <nav className="sticky top-4 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="pill-nav px-6   py-3 shadow-lift">
          
          <ul className="flex  items-center justify-between  text-sm font-semibold">
            <li>
              <Link to="/" className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-full bg-sand flex items-center justify-center p-1">
              <img
                src={logo}
                alt="مزادات أبوظبي"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </Link>
            </li>
            {navItems.map((item) => {
              const active = isActive(item);
              const className = active
                ? "text-gold border-b-2 border-gold pb-1"
                : "text-white/80 hover:text-white transition";

              return (
                <li key={item.label}>
                  {item.anchor ? (
                    <a href={item.to} className={className}>
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.to} className={className}>
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })} 
            <li>
              <div className="min-w-[120px] flex justify-end">
            {showSettings ? (
              <Link
                to="/settings"
                className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center text-white/80 hover:text-white transition"
                aria-label="الإعدادات"
              >
                <FiSettings className="text-lg" />
              </Link>
            ) : showLoginCta ? (
              <Link
                to="/auth/login"
                className="rounded-xl border border-white/60 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                تسجيل الدخول
              </Link>
            ) : (
              <div className="h-10 w-10" aria-hidden="true" />
            )}
          </div>
            </li>
          </ul>

          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
