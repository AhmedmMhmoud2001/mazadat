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

const Footer = () => {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="flex flex-col gap-4">
            <div className="h-16 w-16 rounded-xl  flex items-center justify-center ">
              <img src={logo} alt="مزادات أبوظبي" className=" object-contain" />
            </div>
            <p className="text-sm text-white/70">
              لوريم إيبسوم دولار سيت أميت كونسيكتتور أديسبسكينغ إيليت.
            </p>
            <div className="flex items-center gap-3 text-white/70">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
              <FaYoutube />
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-4">اتصل بنا</h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <FiMail />
                contact@company.com
              </div>
              <div className="flex items-center gap-2">
                <FiPhone />
                رقم التواصل
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin />
                العنوان
              </div>
            </div>
          </div>

          {footerColumns
            .slice()
            .reverse()
            .map((column) => (
              <div key={column.title}>
                <h4 className="text-lg mb-4">{column.title}</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  {column.links.map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-xs text-white/50 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            All Rights Reserved © Designed by{" "}
            <a href="//www.qeematech.net/" rel="dofollow" className="text-white">
              Qeematech
            </a>
          </div>
          <div>جميع الحقوق محفوظة | الشروط والأحكام | سياسة الخصوصية</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
