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
    <div className="bg-[#F5F2EB] min-h-screen pt-32 pb-12">
      <section className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-[1fr_357px] gap-12">
          
          {/* Main Content - على اليسار في RTL */}
          <div className="space-y-6 order-2 lg:order-1">
            
            {/* Header with Button */}
            <div className="flex items-center justify-between">
             
              <h2 className="text-[24px] font-bold text-[#1C1C28]">مشاركاتي في المزادات</h2>
            </div>

            {/* Participation Table */}
            <div className="bg-[#F5F2EB] rounded-lg shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] p-5 space-y-3">
              {/* Table Header */}
              <div className="grid grid-cols-5 gap-10 p-3 text-center">
                <div className="text-[22px] font-bold text-[#1C1C28]">اسم المزاد</div>
                <div className="text-[22px] font-bold text-[#1C1C28]">السعر الحالي</div>
                <div className="text-[22px] font-bold text-[#1C1C28]">مشاركتي</div>
                <div className="text-[22px] font-bold text-[#1C1C28]">الحالة</div>
                <div className="text-[22px] font-bold text-[#1C1C28]">الوقت المتبقي</div>
              </div>

              <div className="h-[3px] bg-gray-300 rounded"></div>

              {/* Table Rows */}
              {participation.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-5 gap-10 p-3 rounded-lg items-center ${
                    index % 2 === 1 ? "bg-[#F5F2EB]" : "bg-[#FAF9F5]"
                  }`}
                >
                  <div className="text-[20px] text-[#1C1C28] text-center">{row.auction}</div>
                  <div className="text-[20px] text-[#1C1C28] text-right">{row.price}</div>
                  <div className="text-[20px] text-[#1C1C28] text-center">{row.participants}</div>
                  <div className="text-center">
                    <span className="text-[20px] font-normal" style={{ color: row.status.color }}>
                      {row.status.label}
                    </span>
                  </div>
                  <div className="text-[20px] text-[#1C1C28] text-center">{row.time}</div>
                </div>
              ))}
            </div>

            {/* Notifications Section */}
            <div>
              <h3 className="text-[24px] font-bold text-[#1C1C28] text-right mb-6">الإشعارات</h3>
              <div className="space-y-4">
                {notifications.map((note, index) => (
                  <div
                    key={index}
                    className={`rounded-lg p-3 flex flex-col gap-3 ${
                      note.borderColor
                        ? `border border-[${note.borderColor}]`
                        : "bg-[#F5F2EB] shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)]"
                    }`}
                    style={note.borderColor ? { borderColor: note.borderColor } : {}}
                  >
                    <div className="flex items-start gap-3">
                      <button className="flex-shrink-0 text-gray-400 hover:text-gray-600">
                        <FiX className="w-6 h-6" />
                      </button>
                      <div className="flex-1 flex items-center gap-3 justify-end p-3">
                        <div className="font-bold text-[20px] text-[#1C1C28]">{note.title}</div>
                        <div className="flex-shrink-0">
                          {note.status === "success" ? (
                            <FiCheckCircle className="w-6 h-6 text-green-600" />
                          ) : (
                            <FiAlertTriangle className="w-6 h-6 text-yellow-600" />
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="text-[16px] text-[#1C1C28] text-right">{note.description}</p>
                    <p className="text-[14px] text-[rgba(28,28,40,0.4)] text-right">{note.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - على اليمين في RTL */}
          <div className="order-1 lg:order-2">
            <DashboardSidebar activeKey="transactions" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transactions;
