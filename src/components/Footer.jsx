import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/ChatGPT Image Sep 20, 2025, 12_03_45 PM 1.png";

const footerColumns = [
  {
    title: "المنتج",
    links: ["الميزات", "التسعير", "دراسات الحالة", "المراجعات", "التحديثات"],
  },
  {
    title: "الشركة",
    links: ["حول", "اتصل بنا", "وظائف", "الثقافة", "مدونة"],
  },
  {
    title: "الدعم",
    links: ["البدء", "مركز المساعدة", "حالة الخادم", "الإبلاغ عن خطأ", "دعم الدردشة"],
  },
];

const linkMap = {
  "الميزات": "/services",
  "حول": "/about",
  "اتصل بنا": "/help",
  "مركز المساعدة": "/help",
};

const resolveFooterLink = (label) => linkMap[label] || "/";

const Footer = () => {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="flex flex-col gap-4">
            <div className="h-16 w-16 rounded-xl flex items-center justify-center">
              <img src={logo} alt="مزادات أبوظبي" className="h-full w-full object-contain" />
            </div>
            <p className="text-sm text-white">
              لوريم إيبسوم دولار سيت أميت كونسيكتتور أديسبسكينغ إيليت.
            </p>
            <div className="flex items-center gap-3 text-white">
              <Link to="/" aria-label="Facebook">
                <FaFacebookF />
              </Link>
              <Link to="/" aria-label="Twitter">
                <FaTwitter />
              </Link>
              <Link to="/" aria-label="Instagram">
                <FaInstagram />
              </Link>
              <Link to="/" aria-label="LinkedIn">
                <FaLinkedinIn />
              </Link>
              <Link to="/" aria-label="YouTube">
                <FaYoutube />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg text-white mb-4">اتصل بنا</h4>
            <div className="space-y-3 text-sm text-white">
              <a href="mailto:contact@company.com" className="flex items-center gap-2">
                <FiMail />
                contact@company.com
              </a>
              <a href="tel:+000000000" className="flex items-center gap-2">
                <FiPhone />
                رقم التواصل
              </a>
              <Link to="/" className="flex items-center gap-2">
                <FiMapPin />
                العنوان
              </Link>
            </div>
          </div>

          {footerColumns
            .slice()
            .reverse()
            .map((column) => (
              <div key={column.title}>
                <h4 className="text-lg text-white mb-4">{column.title}</h4>
                <ul className="space-y-2 text-sm text-white">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link to={resolveFooterLink(link)} className="hover:text-gold transition">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-xs text-white/50 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>جميع الحقوق محفوظة | الشروط والأحكام | سياسة الخصوصية</div>
          <div>
            All Rights Reserved © Designed by{" "}
            <a href="//www.qeematech.net/" rel="dofollow" className="text-white">
              Qeematech
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
