import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";
import DashboardSidebar from "../components/DashboardSidebar";
import ToggleSwitch from "../components/ToggleSwitch";
import { logout } from "../data/authStore";

const settingsTabs = [
  { key: "profile", label: "الملف الشخصي" },
  { key: "privacy", label: "الخصوصية" },
  { key: "notifications", label: "الإشعارات" },
  { key: "security", label: "الأمان" },
];

const Settings = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <div className="bg-[#F5F2EB] min-h-screen pt-32 pb-12 text-right">
      <section className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">

          {/* Sidebar - Right side in RTL */}
          <aside className="order-1 lg:sticky lg:top-32">
            <DashboardSidebar activeKey="settings" />
          </aside>

          {/* Main Content - Left side in RTL */}
          <div className="space-y-6 order-2">

            {/* Tabs */}
            <div className="flex gap-4 border-b border-gray-200 overflow-x-auto pb-px justify-start">
              {settingsTabs.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-4 text-lg font-bold transition-all relative whitespace-nowrap ${activeTab === tab.key
                    ? "text-[#9E7731] border-b-2 border-[#9E7731] -mb-[1px]"
                    : "text-gray-400 hover:text-[#1C1C28]"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="bg-white rounded-xl shadow-soft p-8 space-y-8">
                <h3 className="text-2xl font-bold text-[#1C1C28]">المعلومات الشخصية</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 block pr-1">رقم الهاتف</label>
                    <input className="w-full border border-gray-200 rounded-lg px-5 py-4 text-right focus:ring-2 focus:ring-[#9E7731]/20 transition-all outline-none" placeholder="050 XXXXXXX" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 block pr-1">البريد الإلكتروني</label>
                    <input className="w-full border border-gray-200 rounded-lg px-5 py-4 text-right focus:ring-2 focus:ring-[#9E7731]/20 transition-all outline-none" placeholder="example@mail.com" />
                  </div>
                </div>
                <div className="space-y-2 max-w-md">
                  <label className="text-sm font-bold text-gray-600 block pr-1">اللغة</label>
                  <select className="w-full border border-gray-200 rounded-lg px-5 py-4 text-right appearance-none focus:ring-2 focus:ring-[#9E7731]/20 transition-all outline-none">
                    <option>العربية</option>
                    <option>English</option>
                  </select>
                </div>
                <button className="bg-[#9E7731] hover:bg-[#8A6629] text-white px-10 py-4 rounded-lg font-bold transition-all duration-300 shadow-md">
                  حفظ التغييرات
                </button>
              </div>
            )}

            {/* Privacy Tab */}
            {activeTab === "privacy" && (
              <div className="bg-white rounded-xl shadow-soft p-8 space-y-4">
                {[
                  {
                    title: "إظهار الملف الشخصي",
                    description: "السماح للآخرين برؤية ملفك الشخصي",
                  },
                  {
                    title: "إظهار سجل العطاءات",
                    description: "السماح للآخرين برؤية عطاءاتك السابقة",
                  },
                ].map((item, idx) => (
                  <div
                    key={item.title}
                    className={`flex items-center justify-between gap-6 py-6 ${idx !== 0 ? "border-t border-gray-100" : ""}`}
                  >
                    <div className="text-right flex-1">
                      <div className="font-bold text-xl text-[#1C1C28]">{item.title}</div>
                      <div className="text-base text-gray-500 mt-1">{item.description}</div>
                    </div>
                    <ToggleSwitch defaultChecked />
                  </div>
                ))}
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === "notifications" && (
              <div className="bg-white rounded-xl shadow-soft p-8 space-y-4">
                {[
                  {
                    title: "إشعارات البريد الإلكتروني",
                    description: "تلقي الإشعارات عبر البريد الإلكتروني",
                  },
                  {
                    title: "إشعارات الرسائل النصية",
                    description: "تلقي الإشعارات عبر الرسائل النصية",
                  },
                  {
                    title: "تحديثات العطاءات",
                    description: "تلقي الإشعارات عند تحديث العطاءات",
                  },
                  {
                    title: "تذكيرات المزادات",
                    description: "تذكيرات قبل انتهاء المزادات",
                  },
                ].map((item, idx) => (
                  <div
                    key={item.title}
                    className={`flex items-center justify-between gap-6 py-6 ${idx !== 0 ? "border-t border-gray-100" : ""}`}
                  >
                    <div className="text-right flex-1">
                      <div className="font-bold text-xl text-[#1C1C28]">{item.title}</div>
                      <div className="text-base text-gray-500 mt-1">{item.description}</div>
                    </div>
                    <ToggleSwitch defaultChecked />
                  </div>
                ))}
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <div className="bg-white rounded-xl shadow-soft p-8 space-y-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#1C1C28]">تغيير كلمة المرور</h3>
                  <div className="grid gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-600 block pr-1">كلمة المرور الحالية</label>
                      <input
                        type="password"
                        className="w-full border border-gray-200 rounded-lg px-5 py-4 text-right outline-none focus:ring-2 focus:ring-[#9E7731]/20 transition-all font-sans"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-600 block pr-1">كلمة المرور الجديدة</label>
                        <input
                          type="password"
                          className="w-full border border-gray-200 rounded-lg px-5 py-4 text-right outline-none focus:ring-2 focus:ring-[#9E7731]/20 transition-all font-sans"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-600 block pr-1">تأكيد كلمة المرور الجديدة</label>
                        <input
                          type="password"
                          className="w-full border border-gray-200 rounded-lg px-5 py-4 text-right outline-none focus:ring-2 focus:ring-[#9E7731]/20 transition-all font-sans"
                        />
                      </div>
                    </div>
                  </div>
                  <button className="bg-[#9E7731] hover:bg-[#8A6629] text-white px-10 py-4 rounded-lg font-bold transition-all duration-300 shadow-md">
                    تحديث كلمة المرور
                  </button>
                </div>

                <div className="space-y-6 border-t border-gray-100 pt-10">
                  <div className="text-right">
                    <h3 className="text-2xl font-bold text-[#1C1C28]">الجلسات النشطة</h3>
                    <p className="text-base text-gray-500 mt-1">إدارة الأجهزة المتصلة بحسابك</p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex  items-center justify-between">

                    <div className="text-right">
                      <div className="font-bold text-lg text-[#1C1C28]">الجهاز الحالي</div>
                      <div className="text-sm text-gray-500">Windows • Web Browser</div>
                    </div>
                    <button
                      className="text-gray-400 hover:text-red-600 transition-colors"
                      onClick={handleLogout}
                      title="تسجيل الخروج"
                    >
                      <FiX size={24} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;
