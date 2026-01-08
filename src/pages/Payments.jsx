import { useState } from "react";
import Tabs from "../components/Tabs";
import DashboardSidebar from "../components/DashboardSidebar";
import UploadBox from "../components/UploadBox";

const paymentTabs = [
  { key: "bank", label: "تحويل بنكي" },
  { key: "card", label: "بطاقة بنكية" },
];

const Payments = () => {
  const [activeTab, setActiveTab] = useState("bank");

  return (
    <section className="mx-auto max-w-6xl px-4 grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="section-card p-6 space-y-6">
          <Tabs tabs={paymentTabs} active={activeTab} onChange={setActiveTab} />

          {activeTab === "bank" && (
            <div className="space-y-5">
              <div className="bg-white/70 rounded-2xl p-4 space-y-2 text-sm">
                <div>البنك: FAB</div>
                <div>رقم الحساب (IBAN): AE12 3456 7890 1234 5678 901</div>
                <div>المستفيد: Mazadat Abu Dhabi LLC</div>
                <div>المبلغ: 10,000 جنيه مصري</div>
              </div>
              <div className="text-sm font-semibold">قم برفع صورة الإيصال</div>
              <UploadBox label="إيصال التحويل" />
              <button className="btn-gold w-fit">دفع</button>
            </div>
          )}

          {activeTab === "card" && (
            <div className="space-y-4">
              <input className="input-field" placeholder="رقم البطاقة" />
              <input className="input-field" placeholder="الاسم" />
              <div className="grid gap-4 md:grid-cols-2">
                <input className="input-field" placeholder="تاريخ الانتهاء MM/YY" />
                <input className="input-field" placeholder="CVC" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <select className="select-field">
                  <option>United States</option>
                  <option>United Arab Emirates</option>
                </select>
                <input className="input-field" placeholder="Postal code" />
              </div>
              <button className="btn-gold w-fit">دفع</button>
            </div>
          )}
        </div>

        <div className="section-card p-6 space-y-4 text-sm">
          <div className="flex items-center justify-between font-semibold">
            <span>التأمين (قابل للاسترداد)</span>
            <span>10,000 جنيه مصري</span>
          </div>
          <div className="flex items-center justify-between font-semibold">
            <span>كراسة الشروط (غير قابلة للاسترداد)</span>
            <span>10,000 جنيه مصري</span>
          </div>
          <div className="border-t border-line pt-4 flex items-center justify-between font-semibold">
            <span>إجمالي الدفع الآن</span>
            <span>20,000 جنيه مصري</span>
          </div>
          <div className="bg-gold/10 rounded-2xl p-4 text-xs text-muted">
            يسترد التأمين تلقائياً بعد نهاية المزاد في نفس اليوم في حالة عدم الفوز.
          </div>
        </div>
      </div>

      <DashboardSidebar activeKey="wallet" />
    </section>
  );
};

export default Payments;
