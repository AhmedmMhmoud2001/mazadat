import { FiX, FiAlertTriangle, FiCheckCircle, FiGrid } from "react-icons/fi";
import { Link } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";

const participation = [
  {
    auction: "اسم المزاد",
    price: "155,000 جنيه مصري",
    participants: "50,000",
    status: { key: "lost", label: "تم تجاوزك", color: "#D94B4B" },
    time: "2 ساعة",
  },
  {
    auction: "اسم المزاد",
    price: "155,000 جنيه مصري",
    participants: "50,000",
    status: { key: "win", label: "فزت", color: "#2F9D5D" },
    time: "2 ساعة",
  },
  {
    auction: "اسم المزاد",
    price: "155,000 جنيه مصري",
    participants: "50,000",
    status: { key: "pending", label: "انتظار", color: "#9E7731" },
    time: "2 ساعة",
  },
  {
    auction: "اسم المزاد",
    price: "155,000 جنيه مصري",
    participants: "50,000",
    status: { key: "lost", label: "تم تجاوزك", color: "#D94B4B" },
    time: "2 ساعة",
  },
  {
    auction: "اسم المزاد",
    price: "155,000 جنيه مصري",
    participants: "50,000",
    status: { key: "lost2", label: "خسرت", color: "rgba(28,28,40,0.4)" },
    time: "2 ساعة",
  },
];

const notifications = [
  {
    title: "فزت بالمزاد !",
    description: "لوريم ايبسوم دولار سيت أميت كويس بيريتيتيس. إن فوليام ريبيوديامت سيت. ميو ميو لومينيير إت إيليت، إكزيرسيتيشن لامبور أليكا أميت، أوت إت يوت ك",
    status: "success",
    time: "من 6 دقائق",
    borderColor: "#9E7731",
  },
  {
    title: "خسرت بالمزاد !",
    description: "لوريم ايبسوم دولار سيت أميت كويس بيريتيتيس. إن فوليام ريبيوديامت سيت. ميو ميو لومينيير إت إيليت، إكزيرسيتيشن لامبور أليكا أميت، أوت إت يوت ك",
    status: "warning",
    time: "من 6 دقائق",
    borderColor: "#9E7731",
  },
  {
    title: "خسرت بالمزاد !",
    description: "لوريم ايبسوم دولار سيت أميت كويس بيريتيتيس. إن فوليام ريبيوديامت سيت. ميو ميو لومينيير إت إيليت، إكزيرسيتيشن لامبور أليكا أميت، أوت إت يوت ك",
    status: "warning",
    time: "من 6 دقائق",
  },
  {
    title: "خسرت بالمزاد !",
    description: "لوريم ايبسوم دولار سيت أميت كويس بيريتيتيس. إن فوليام ريبيوديامت سيت. ميو ميو لومينيير إت إيليت، إكزيرسيتيشن لامبور أليكا أميت، أوت إت يوت ك",
    status: "warning",
    time: "من 6 دقائق",
  },
  {
    title: "خسرت بالمزاد !",
    description: "لوريم ايبسوم دولار سيت أميت كويس بيريتيتيس. إن فوليام ريبيوديامت سيت. ميو ميو لومينيير إت إيليت، إكزيرسيتيشن لامبور أليكا أميت، أوت إت يوت ك",
    status: "warning",
    time: "من 6 دقائق",
  },
  {
    title: "خسرت بالمزاد !",
    description: "لوريم ايبسوم دولار سيت أميت كويس بيريتيتيس. إن فوليام ريبيوديامت سيت. ميو ميو لومينيير إت إيليت، إكزيرسيتيشن لامبور أليكا أميت، أوت إت يوت ك",
    status: "warning",
    time: "من 6 دقائق",
  },
];

const Transactions = () => {
  return (
    <div className="bg-[#F5F2EB] min-h-screen pt-32 pb-12 text-right">
      <section className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">

          {/* Sidebar - Right side in RTL */}
          <aside className="order-1 lg:sticky lg:top-32">
            <DashboardSidebar activeKey="transactions" />
          </aside>

          {/* Main Content - Left side in RTL */}
          <div className="space-y-8 order-2">

            {/* Header */}
            <div>
              <h2 className="text-[24px] font-bold text-[#1C1C28]">مشاركاتي في المزادات</h2>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-right border-collapse">
                  <thead>
                    <tr className="bg-white">
                      <th className="px-6 py-5 text-[18px] font-bold text-[#1C1C28]">اسم المزاد</th>
                      <th className="px-6 py-5 text-[18px] font-bold text-[#1C1C28] text-center">السعر الحالي</th>
                      <th className="px-6 py-5 text-[18px] font-bold text-[#1C1C28] text-center">مشاركتي</th>
                      <th className="px-6 py-5 text-[18px] font-bold text-[#1C1C28] text-center">الحالة</th>
                      <th className="px-6 py-5 text-[18px] font-bold text-[#1C1C28] text-center">الوقت المتبقي</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 italic">
                    {participation.map((row, index) => (
                      <tr
                        key={index}
                        className={`${index % 2 === 0 ? "bg-white" : "bg-[#F5F2EB]/50"}`}
                      >
                        <td className="px-6 py-5 text-[16px] font-bold text-[#1C1C28]">{row.auction}</td>
                        <td className="px-6 py-5 text-[16px] font-bold text-[#1C1C28] text-center leading-tight">
                          {row.price}
                        </td>
                        <td className="px-6 py-5 text-[16px] font-bold text-[#1C1C28] text-center">{row.participants}</td>
                        <td className="px-6 py-5 text-[16px] text-center">
                          <span className="font-bold" style={{ color: row.status.color }}>
                            {row.status.label}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-[16px] font-bold text-[#1C1C28] text-center">{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Notifications Section */}
            <div className="space-y-6">
              <h3 className="text-[24px] font-bold text-[#1C1C28]">الإشعارات</h3>
              <div className="space-y-4">
                {notifications.map((note, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-lg p-5 transition-all shadow-soft border ${note.borderColor ? `border-[${note.borderColor}]` : "border-gray-100"
                      }`}
                    style={note.borderColor ? { borderColor: note.borderColor } : {}}
                  >
                    <div className="relative">
                      <button className="absolute top-0 left-0 text-gray-400 hover:text-[#1C1C28] transition-colors">
                        <FiX size={18} />
                      </button>

                      <div className="space-y-3">
                        <div className="flex items-center justify-start gap-3">
                          <h4 className="text-[18px] font-bold text-[#1C1C28]">{note.title}</h4>
                          {note.status === "success" ? (
                            <FiCheckCircle className="text-green-600" size={22} />
                          ) : (
                            <FiAlertTriangle className="text-amber-600" size={22} />
                          )}
                        </div>
                        <p className="text-[14px] text-[#1C1C28]/80 text-right leading-relaxed pl-8">
                          {note.description}
                        </p>
                        <div className="text-[12px] text-gray-400 text-right">
                          {note.time}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transactions;
