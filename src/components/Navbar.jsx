import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiMenu, FiSettings, FiX } from "react-icons/fi";
import logo from "../assets/ChatGPT Image Sep 20, 2025, 12_03_45 PM 1.png";
import { useAuth } from "../data/authStore";

const navItems = [
  { label: "الرئيسية", to: "/" },
  { label: "المزادات", to: "/auctions" },
  { label: "خدماتنا", to: "/#services", anchor: true },
  { label: "من نحن", to: "/#about", anchor: true },
  { label: "مساعدة", to: "/#support", anchor: true },
];

const Navbar = () => {
  const location = useLocation();
  const user = useAuth();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isAuthPage = location.pathname.startsWith("/auth");
  const isHomePage = location.pathname === "/";
  const isLoggedIn = Boolean(user);
  const isAuctionsPage = location.pathname.startsWith("/auctions");
  const showLoginCta = !isLoggedIn && !isAuthPage && (isHomePage || isAuctionsPage);
  const showSettings = isLoggedIn && !isAuthPage;

  const isActive = (item) => {
    if (item.anchor) {
      return location.pathname === "/" && location.hash === item.to.replace("/", "");
    }
    if (item.to === "/") {
      return location.pathname === "/" && !location.hash;
    }
    return location.pathname.startsWith(item.to);
  };

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <nav className="sticky top-4 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="pill-nav flex items-center justify-between px-8 py-3 shadow-lift">
          

          <ul className="hidden lg:flex items-center justify-between gap-8 text-sm font-semibold w-full">
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
                className="rounded-full border border-white/60 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                تسجيل الدخول
              </Link>
            ) : (
              <div className="h-10 w-10" aria-hidden="true" />
            )}
            </li>
          </ul>

          <div className=" flex items-center justify-between lg:hidden w-full">
            <Link to="/" className="  flex items-center  gap-3">
            <div className="h-11 w-11 rounded-full bg-sand flex items-center justify-center p-1">
              <img
                src={logo}
                alt="مزادات أبوظبي"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
           </Link>
            <button
              type="button"
              className=" h-10 w-10 rounded-full border border-white/15 flex items-center justify-center text-white/80 hover:text-white transition"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              aria-label="فتح القائمة"
              aria-expanded={isMobileOpen}
              aria-controls="mobile-nav"
            >
              <FiMenu className="text-lg" />
            </button>
           
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity lg:hidden ${
          isMobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMobileOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="mobile-nav"
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-ink text-white shadow-lift transition-transform lg:hidden ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isMobileOpen}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileOpen(false)}>
            <div className="h-10 w-10 rounded-full bg-sand flex items-center justify-center p-1">
              <img
                src={logo}
                alt="مزادات أبوظبي"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <span className="text-sm font-semibold">مزادات أبوظبي</span>
          </Link>
          <button
            type="button"
            className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center"
            onClick={() => setIsMobileOpen(false)}
            aria-label="إغلاق القائمة"
          >
            <FiX />
          </button>
        </div>

        <div className="px-6 py-6 space-y-6">
          <ul className="space-y-4 text-sm font-semibold">
            {navItems.map((item) => {
              const active = isActive(item);
              const className = active
                ? "text-gold"
                : "text-white/80 hover:text-white transition";

              return (
                <li key={item.label}>
                  {item.anchor ? (
                    <a href={item.to} className={className} onClick={() => setIsMobileOpen(false)}>
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.to} className={className} onClick={() => setIsMobileOpen(false)}>
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="pt-4 border-t border-white/10">
            {showSettings ? (
              <Link
                to="/settings"
                className="flex items-center gap-2 text-sm font-semibold"
                onClick={() => setIsMobileOpen(false)}
              >
                <FiSettings />
                الإعدادات
              </Link>
            ) : showLoginCta ? (
              <Link
                to="/auth/login"
                className="inline-flex items-center justify-center rounded-full border border-white/60 px-5 py-2 text-sm font-semibold"
                onClick={() => setIsMobileOpen(false)}
              >
                تسجيل الدخول
              </Link>
            ) : null}
          </div>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
