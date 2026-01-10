import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <div className="bg-[#F5F2EB] min-h-screen pt-32 pb-12">
      <section className="mx-auto max-w-6xl px-4 grid gap-6 lg:grid-cols-[1fr_280px]">
        <div className="space-y-6">
          {/* Tabs */}
          <div className="flex gap-0 border-b-2 border-gray-200">
            {settingsTabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 text-lg font-medium transition-all relative ${
                  activeTab === tab.key
                    ? "text-[#1C1C28] border-b-2 border-[#9E7731] -mb-[2px]"
                    : "text-gray-400 hover:text-[#1C1C28]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="bg-white rounded-lg p-6 space-y-6">
              <h3 className="text-xl font-bold text-[#1C1C28] text-right">المعلومات الشخصية</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm text-gray-600 text-right block">رقم الهاتف</label>
                  <input className="w-full border border-gray-300 rounded-lg px-4 py-3 text-right" placeholder="" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-600 text-right block">البريد الإلكتروني</label>
                  <input className="w-full border border-gray-300 rounded-lg px-4 py-3 text-right" placeholder="" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-600 text-right block">اللغة</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-right">
                  <option>العربية</option>
                  <option>English</option>
                </select>
              </div>
              <button className="bg-[#9E7731] hover:bg-[#8A6629] text-white px-6 py-3 rounded-lg font-bold">
                حفظ التغييرات
              </button>
            </div>
          )}

          {/* Privacy Tab */}
          {activeTab === "privacy" && (
            <div className="bg-white rounded-lg p-6 space-y-6">
              {[
                {
                  title: "إظهار الملف الشخصي",
                  description: "السماح للآخرين برؤية ملفك الشخصي",
                },
                {
                  title: "إظهار سجل العطاءات",
                  description: "السماح للآخرين برؤية عطاءاتك السابقة",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between gap-4 py-3 border-b border-gray-100"
                >
                  <div className="text-right flex-1">
                    <div className="font-bold text-[#1C1C28]">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.description}</div>
                  </div>
                  <ToggleSwitch defaultChecked />
                </div>
              ))}
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === "notifications" && (
            <div className="bg-white rounded-lg p-6 space-y-6">
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
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between gap-4 py-3 border-b border-gray-100"
                >
                  <div className="text-right flex-1">
                    <div className="font-bold text-[#1C1C28]">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.description}</div>
                  </div>
                  <ToggleSwitch defaultChecked />
                </div>
              ))}
            </div>
          )}

          {/* Security Tab */}
          {activeTab === "security" && (
            <div className="bg-white rounded-lg p-6 space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#1C1C28] text-right">تغيير كلمة المرور</h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-600 text-right block">كلمة المرور الحالية</label>
                    <input type="password" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-right" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-600 text-right block">كلمة المرور الجديدة</label>
                    <input type="password" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-right" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-600 text-right block">تأكيد كلمة المرور الجديدة</label>
                    <input type="password" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-right" />
                  </div>
                </div>
                <button className="bg-[#9E7731] hover:bg-[#8A6629] text-white px-6 py-3 rounded-lg font-bold">
                  تحديث كلمة المرور
                </button>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#1C1C28] text-right">الجلسات النشطة</h3>
                <p className="text-sm text-gray-600 text-right">إدارة الأجهزة المتصلة بحسابك</p>
                <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                  <button className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2" onClick={handleLogout}>
                    <FiX className="w-4 h-4" />
                  </button>
                  <div className="text-right">
                    <div className="font-bold text-[#1C1C28]">الجهاز الحالي</div>
                    <div className="text-sm text-gray-600">windows</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <DashboardSidebar activeKey="settings" />
      </section>
    </div>
  );
};

export default Settings;
