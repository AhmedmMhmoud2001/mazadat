import { useState } from "react";
import Tabs from "../components/Tabs";
import DashboardSidebar from "../components/DashboardSidebar";
import ToggleSwitch from "../components/ToggleSwitch";

const settingsTabs = [
  { key: "profile", label: "الملف الشخصي" },
  { key: "notifications", label: "الإشعارات" },
  { key: "privacy", label: "الخصوصية" },
  { key: "security", label: "الأمان" },
];

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <section className="mx-auto max-w-6xl px-4 grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="section-card p-6 space-y-6">
        <Tabs tabs={settingsTabs} active={activeTab} onChange={setActiveTab} />

        {activeTab === "profile" && (
          <div className="space-y-4">
            <div className="text-lg font-semibold">المعلومات الشخصية</div>
            <div className="grid gap-4 md:grid-cols-2">
              <input className="input-field" placeholder="رقم الهاتف" />
              <input className="input-field" placeholder="البريد الإلكتروني" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <select className="select-field">
                <option>العربية</option>
                <option>English</option>
              </select>
              <input className="input-field" placeholder="اللغة" />
            </div>
            <button className="btn-gold w-fit">حفظ التغييرات</button>
          </div>
        )}

        {activeTab === "notifications" && (
          <div className="space-y-4">
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
                className="bg-white/70 rounded-2xl p-4 flex items-center justify-between gap-4"
              >
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-sm text-muted">{item.description}</div>
                </div>
                <ToggleSwitch defaultChecked />
              </div>
            ))}
          </div>
        )}

        {activeTab === "privacy" && (
          <div className="space-y-4">
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
                className="bg-white/70 rounded-2xl p-4 flex items-center justify-between gap-4"
              >
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-sm text-muted">{item.description}</div>
                </div>
                <ToggleSwitch />
              </div>
            ))}
          </div>
        )}

        {activeTab === "security" && (
          <div className="space-y-6">
            <div className="text-lg font-semibold">تغيير كلمة المرور</div>
            <div className="grid gap-4">
              <input className="input-field" placeholder="كلمة المرور الحالية" />
              <input className="input-field" placeholder="كلمة المرور الجديدة" />
              <input className="input-field" placeholder="تأكيد كلمة المرور الجديدة" />
            </div>
            <button className="btn-gold w-fit">تحديث كلمة المرور</button>

            <div className="text-lg font-semibold">الجلسات النشطة</div>
            <div className="bg-white/70 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <div className="font-semibold">الجهاز الحالي</div>
                <div className="text-sm text-muted">windows</div>
              </div>
              <button className="btn-outline px-4 py-2">تسجيل الخروج</button>
            </div>
          </div>
        )}
      </div>

      <DashboardSidebar activeKey="settings" />
    </section>
  );
};

export default Settings;
