import { FiGrid, FiCreditCard, FiSettings, FiClipboard } from "react-icons/fi";
import { Link } from "react-router-dom";

const items = [
  { key: "dashboard", label: "لوحة التحكم", icon: FiGrid, to: "/dashboard" },
  { key: "transactions", label: "المشاركات", icon: FiClipboard, to: "/transactions" },
  { key: "wallet", label: "المحفظة", icon: FiCreditCard, to: "/payments" },
  { key: "settings", label: "الإعدادات", icon: FiSettings, to: "/settings" },
];

const DashboardSidebar = ({ activeKey }) => {
  return (
    <aside className="bg-sand-dark rounded-3xl shadow-soft p-6 space-y-4">
      {items.map((item) => {
        const Icon = item.icon;
        const active = item.key === activeKey;
        return (
          <Link
            key={item.key}
            to={item.to}
            className={`flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
              active ? "bg-gold text-white" : "text-ink hover:bg-white/70"
            }`}
          >
            <span>{item.label}</span>
            <Icon />
          </Link>
        );
      })}
    </aside>
  );
};

export default DashboardSidebar;
