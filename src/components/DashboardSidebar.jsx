import { FiGrid, FiCreditCard, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

const items = [
  { key: "transactions", label: "لوحة التحكم", icon: FiGrid, to: "/transactions" },
  { key: "wallet", label: "المحفظة", icon: FiCreditCard, to: "/payments" },
  { key: "settings", label: "الإعدادات", icon: FiSettings, to: "/settings" },
];

const DashboardSidebar = ({ activeKey }) => {
  return (
    <aside className="bg-[#F5F2EB] rounded-lg shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] p-5 space-y-9 h-fit sticky top-32">
      {items.map((item) => {
        const Icon = item.icon;
        const active = item.key === activeKey;
        return (
          <Link
            key={item.key}
            to={item.to}
            className={`flex items-center justify-between gap-3 rounded-lg px-3 py-3 text-[20px] font-bold transition ${active ? "bg-[#9E7731] text-white" : "text-[#1C1C28] hover:bg-white"
              }`}
          >
            <span className="flex-1 text-right">{item.label}</span>
            <Icon className="w-6 h-6" />
          </Link>
        );
      })}
    </aside>
  );
};

export default DashboardSidebar;
