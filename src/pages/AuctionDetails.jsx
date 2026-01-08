import { useState } from "react";
import Tabs from "../components/Tabs";
import StatusPill from "../components/StatusPill";
import AuctionCard from "../components/AuctionCard";

const detailTabs = [
  { key: "description", label: "الوصف" },
  { key: "specs", label: "المواصفات" },
  { key: "docs", label: "الوثائق" },
];

const relatedAuctions = [
  {
    title: "اسم المنتج",
    category: "سيارات",
    location: "أبو ظبي",
    price: "17,000,000 جنيه مصري",
    date: "15 فبراير 2024",
    status: { key: "upcoming", label: "قادم" },
    cta: "التفاصيل",
  },
  {
    title: "اسم المنتج",
    category: "سيارات",
    location: "أبو ظبي",
    price: "17,000,000 جنيه مصري",
    date: "15 فبراير 2024",
    status: { key: "upcoming", label: "قادم" },
    cta: "التفاصيل",
  },
  {
    title: "اسم المنتج",
    category: "سيارات",
    location: "أبو ظبي",
    price: "17,000,000 جنيه مصري",
    date: "15 فبراير 2024",
    status: { key: "upcoming", label: "قادم" },
    cta: "التفاصيل",
  },
];

const AuctionDetails = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section className="mx-auto max-w-6xl px-4 space-y-10">
      <div className="text-sm text-muted">
        الرئيسية / المزادات / تفاصيل المزاد
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="section-card p-6 space-y-4">
          <div className="flex items-center justify-between text-sm text-muted">
            <span>السعر الحالي</span>
            <span className="text-ink font-semibold">1,333,000 جنيه مصري</span>
          </div>

          <div className="rounded-2xl bg-danger/15 text-danger text-center py-4">
            <div className="text-sm">الوقت المتبقي</div>
            <div className="text-xl font-bold">00:29:45</div>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center text-xs">
            <div className="bg-white/70 rounded-xl py-3">
              <div className="text-muted">الحد الأدنى للزيادة</div>
              <div className="font-semibold text-ink">10,000</div>
            </div>
            <div className="bg-white/70 rounded-xl py-3">
              <div className="text-muted">السعر الحالي</div>
              <div className="font-semibold text-ink">1,655,000</div>
            </div>
            <div className="bg-white/70 rounded-xl py-3">
              <div className="text-muted">سعر البداية</div>
              <div className="font-semibold text-ink">500,000</div>
            </div>
          </div>

          <div className="space-y-3">
            <input className="input-field text-center" placeholder="000000" />
            <button className="btn-gold w-full">التسجيل في المزاد</button>
          </div>

          <div className="space-y-2 text-sm">
            <div className="text-ink font-semibold">آخر مزايدات</div>
            <div className="flex items-center justify-between text-muted">
              <span>الاسم</span>
              <span>10,000,000 جنيه مصري</span>
            </div>
            <div className="flex items-center justify-between text-muted">
              <span>الاسم</span>
              <span>12,000,000 جنيه مصري</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="section-card p-4">
            <div className="relative h-72 rounded-2xl bg-[linear-gradient(135deg,_#e7dfd0,_#f7f0e7)] flex items-center justify-center">
              <StatusPill status="live" label="مباشر" />
            </div>
            <div className="grid grid-cols-4 gap-3 mt-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={`thumb-${index}`}
                  className="h-16 rounded-xl bg-[linear-gradient(135deg,_#e7dfd0,_#f7f0e7)]"
                />
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="section-card p-5 space-y-3">
              <h3 className="text-lg">الموثوقية والأمان</h3>
              <ul className="text-sm text-muted space-y-2">
                <li>توثيق البائعين والعقود</li>
                <li>حماية المدفوعات والبيانات</li>
                <li>تحديثات فورية لكل مزاد</li>
              </ul>
            </div>
            <div className="section-card p-5 space-y-3">
              <h3 className="text-lg">سياسات المزاد</h3>
              <ul className="text-sm text-muted space-y-2">
                <li>رسوم التسجيل غير قابلة للاسترداد</li>
                <li>يتم استرداد التأمين في حال عدم الفوز</li>
                <li>تسليم المستندات خلال 48 ساعة</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="section-card p-6 space-y-6">
        <Tabs tabs={detailTabs} active={activeTab} onChange={setActiveTab} />
        {activeTab === "description" && (
          <div className="text-sm text-muted space-y-2">
            <p>
              لوريم إيبسوم دولار سيت أميت كونسيكتتور أديسبسكينغ إيليت. هذا النص
              مثال لنص يمكن أن يستبدل في نفس المساحة.
            </p>
            <p>• سعر البيع النهائي يتم تحديده وفقاً للمزايدات.</p>
            <p>• يتم تسليم الوثائق خلال يومي عمل.</p>
          </div>
        )}
        {activeTab === "specs" && (
          <div className="grid gap-4 md:grid-cols-2 text-sm">
            <div className="flex items-center justify-between bg-white/70 rounded-xl px-4 py-3">
              <span className="text-muted">المساحة</span>
              <span className="font-semibold">480 متر مربع</span>
            </div>
            <div className="flex items-center justify-between bg-white/70 rounded-xl px-4 py-3">
              <span className="text-muted">سنة البناء</span>
              <span className="font-semibold">2016</span>
            </div>
            <div className="flex items-center justify-between bg-white/70 rounded-xl px-4 py-3">
              <span className="text-muted">الحالة</span>
              <span className="font-semibold">جاهزة للسكن</span>
            </div>
            <div className="flex items-center justify-between bg-white/70 rounded-xl px-4 py-3">
              <span className="text-muted">الموقع</span>
              <span className="font-semibold">عنوان المنتج</span>
            </div>
          </div>
        )}
        {activeTab === "docs" && (
          <div className="grid gap-3">
            {["تقرير فني PDF", "تقرير تقييم السعر PDF", "سند ملكية PDF"].map(
              (doc) => (
                <div
                  key={doc}
                  className="flex items-center justify-between bg-white/70 rounded-xl px-4 py-3 text-sm"
                >
                  <span>{doc}</span>
                  <button className="btn-outline px-4 py-1">عرض</button>
                </div>
              )
            )}
          </div>
        )}
      </div>

      <div className="section-card p-6 flex items-center justify-between">
        <div>
          <div className="text-sm text-muted">البائع</div>
          <div className="font-semibold">اسم البائع</div>
        </div>
        <div className="h-10 w-10 rounded-full bg-ink/10" />
      </div>

      <div className="space-y-6">
        <h3 className="text-xl">مزادات أخرى</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {relatedAuctions.map((auction, index) => (
            <AuctionCard key={`related-${index}`} {...auction} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuctionDetails;
