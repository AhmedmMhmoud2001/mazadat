import { useState } from "react";
import DashboardSidebar from "../components/DashboardSidebar";
import { FiAlertTriangle, FiCheckCircle, FiClock, FiX } from "react-icons/fi";

const participation = [
  {
    auction: "اسم المزاد",
    price: "155,000 د.إ مصري",
    participants: "50,000",
    status: { key: "lost", label: "تم تجاوزك" },
    time: "2 ساعة",
  },
  {
    auction: "اسم المزاد",
    price: "155,000 د.إ مصري",
    participants: "50,000",
    status: { key: "win", label: "فزت" },
    time: "2 ساعة",
  },
  {
    auction: "اسم المزاد",
    price: "155,000 د.إ مصري",
    participants: "50,000",
    status: { key: "pending", label: "انتظار" },
    time: "2 ساعة",
  },
  {
    auction: "اسم المزاد",
    price: "155,000 د.إ مصري",
    participants: "50,000",
    status: { key: "lost", label: "تم تجاوزك" },
    time: "2 ساعة",
  },
  {
    auction: "اسم المزاد",
    price: "155,000 د.إ مصري",
    participants: "50,000",
    status: { key: "active", label: "خيرت" },
    time: "2 ساعة",
  },
];

const notifications = [
  {
    title: "فزت بالمزاد!",
    description: "لوريم إيبسوم دولار سيت أميت أن تا نيبسوم إيبسوم دولاسيشن كونسيكوات أديبيسشينج إيليت.",
    status: "success",
    time: "6 دقائق",
  },
  {
    title: "خسرت بالمزاد!",
    description: "لوريم إيبسوم دولار سيت أميت أن تا نيبسوم إيبسوم دولاسيشن كونسيكوات أديبيسشينج إيليت.",
    status: "warning",
    time: "6 دقائق",
  },
  {
    title: "خسرت بالمزاد!",
    description: "لوريم إيبسوم دولار سيت أميت أن تا نيبسوم إيبسوم دولاسيشن كونسيكوات أديبيسشينج إيليت.",
    status: "warning",
    time: "6 دقائق",
  },
  {
    title: "خسرت بالمزاد!",
    description: "لوريم إيبسوم دولار سيت أميت أن تا نيبسوم إيبسوم دولاسيشن كونسيكوات أديبيسشينج إيليت.",
    status: "warning",
    time: "6 دقائق",
  },
  {
    title: "خسرت بالمزاد!",
    description: "لوريم إيبسوم دولار سيت أميت أن تا نيبسوم إيبسوم دولاسيشن كونسيكوات أديبيسشينج إيليت.",
    status: "warning",
    time: "6 دقائق",
  },
  {
    title: "خسرت بالمزاد!",
    description: "لوريم إيبسوم دولار سيت أميت أن تا نيبسوم إيبسوم دولاسيشن كونسيكوات أديبيسشينج إيليت.",
    status: "warning",
    time: "6 دقائق",
  },
];

const Transactions = () => {
  const [filterStatus, setFilterStatus] = useState("all");

  return (
    <div className="bg-[#F5F2EB] min-h-screen pt-32 pb-12">
      <section className="mx-auto max-w-6xl px-4 grid gap-6 lg:grid-cols-[1fr_280px]">
        <div className="space-y-6">
          
          {/* Header with Filter */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#1C1C28]">مشاركاتي في المزادات</h2>
            <div className="flex gap-2">
              <button className="bg-[#9E7731] text-white px-6 py-2 rounded-lg font-medium">
                ابواب التنقل
              </button>
            </div>
          </div>

          {/* Participation Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="grid grid-cols-5 gap-4 p-4 bg-gray-50 border-b border-gray-200 text-sm font-bold text-[#1C1C28]">
              <div className="text-right">اسم المزاد</div>
              <div className="text-center">السعر الحالي</div>
              <div className="text-center">مشاركتي</div>
              <div className="text-center">الحالة</div>
              <div className="text-center">الوقت المتبقي</div>
            </div>
            
            {participation.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-5 gap-4 p-4 border-b border-gray-100 items-center hover:bg-gray-50 transition-colors"
              >
                <div className="text-right text-[#1C1C28] font-medium">{row.auction}</div>
                <div className="text-center text-[#1C1C28]">{row.price}</div>
                <div className="text-center text-[#1C1C28]">{row.participants}</div>
                <div className="text-center">
                  <StatusBadge status={row.status.key} label={row.status.label} />
                </div>
                <div className="text-center text-[#1C1C28]">{row.time}</div>
              </div>
            ))}
          </div>

          {/* Notifications Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#1C1C28]">الإشعارات</h3>
            {notifications.map((note, index) => (
              <div
                key={index}
                className={`rounded-lg p-4 border flex items-start gap-3 ${
                  note.status === "success"
                    ? "bg-green-50 border-green-200"
                    : "bg-yellow-50 border-yellow-200"
                }`}
              >
                <div className="flex-shrink-0">
                  {note.status === "success" ? (
                    <FiCheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <FiAlertTriangle className="w-5 h-5 text-yellow-600" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-[#1C1C28] mb-1">{note.title}</div>
                  <div className="text-sm text-gray-600">{note.description}</div>
                  <div className="text-xs text-gray-500 mt-2">{note.time}</div>
                </div>
                <button className="flex-shrink-0 text-gray-400 hover:text-gray-600">
                  <FiX className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <DashboardSidebar activeKey="transactions" />
      </section>
    </div>
  );
};

// Helper Component
const StatusBadge = ({ status, label }) => {
  const colors = {
    lost: "text-red-600",
    win: "text-green-600",
    pending: "text-yellow-600",
    active: "text-blue-600",
  };

  return (
    <span className={`font-medium ${colors[status] || "text-gray-600"}`}>
      {label}
    </span>
  );
};

export default Transactions;
