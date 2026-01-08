import { useState } from "react";
import {
  FiThumbsUp,
  FiAward,
  FiTrendingUp,
  FiClipboard,
} from "react-icons/fi";
import Tabs from "../components/Tabs";
import StatusPill from "../components/StatusPill";

const dashboardTabs = [
  { key: "overview", label: "نظرة عامة" },
  { key: "myAuctions", label: "مزادتي" },
  { key: "ratings", label: "التقييمات" },
];

const kpis = [
  { icon: FiClipboard, label: "صفقة مكتملة", value: "30" },
  { icon: FiAward, label: "معدل النجاح", value: "80%" },
  { icon: FiThumbsUp, label: "إجمالي المزادات", value: "50" },
  { icon: FiTrendingUp, label: "إجمالي المبيعات", value: "1,250,000" },
];

const myAuctions = [
  {
    title: "اسم المزاد",
    price: "155,000 جنيه مصري",
    participants: "80 مشاركة",
    date: "14-2-2021",
    status: { key: "win", label: "مباع" },
  },
  {
    title: "اسم المزاد",
    price: "155,000 جنيه مصري",
    participants: "80 مشاركة",
    date: "14-2-2021",
    status: { key: "upcoming", label: "نشط" },
  },
  {
    title: "اسم المزاد",
    price: "155,000 جنيه مصري",
    participants: "80 مشاركة",
    date: "14-2-2021",
    status: { key: "pending", label: "عرض" },
  },
];

const reviews = [
  {
    name: "محمد",
    date: "14-2-2021",
    rating: 5,
    comment:
      "لوريم إيبسوم دولار سيت أميت كونسيكتتور أديسبسكينغ إيليت.",
  },
  {
    name: "محمد",
    date: "14-2-2021",
    rating: 5,
    comment:
      "لوريم إيبسوم دولار سيت أميت كونسيكتتور أديسبسكينغ إيليت.",
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section className="mx-auto max-w-6xl px-4 space-y-8">
      <div className="section-card p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-full bg-ink/10" />
          <div>
            <div className="font-semibold">اسم البائع</div>
            <div className="text-sm text-muted">عضوية منذ 2022</div>
          </div>
        </div>
        <div className="text-sm text-muted">4.8 (71 تقييم)</div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div
              key={kpi.label}
              className="bg-ink text-white rounded-2xl p-6 text-center space-y-3"
            >
              <Icon className="mx-auto text-3xl text-white/80" />
              <div className="text-xl font-bold">{kpi.value}</div>
              <div className="text-sm text-white/70">{kpi.label}</div>
            </div>
          );
        })}
      </div>

      <div className="section-card p-6 space-y-6">
        <Tabs tabs={dashboardTabs} active={activeTab} onChange={setActiveTab} />

        {activeTab === "overview" && (
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white/70 rounded-2xl p-5 text-center">
              <div className="text-muted text-sm">مزادات هذا الشهر</div>
              <div className="text-xl font-bold">11</div>
            </div>
            <div className="bg-white/70 rounded-2xl p-5 text-center">
              <div className="text-muted text-sm">مزادات هذا الشهر</div>
              <div className="text-xl font-bold">5,000,000</div>
            </div>
            <div className="bg-white/70 rounded-2xl p-5 text-center">
              <div className="text-muted text-sm">متوسط سعر البيع</div>
              <div className="text-xl font-bold">5,000,000</div>
            </div>
          </div>
        )}

        {activeTab === "myAuctions" && (
          <div className="space-y-4">
            {myAuctions.map((auction, index) => (
              <div
                key={`${auction.title}-${index}`}
                className="bg-white/70 rounded-2xl p-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <div className="font-semibold">{auction.title}</div>
                  <div className="text-sm text-muted">{auction.price}</div>
                </div>
                <div className="text-sm text-muted">{auction.participants}</div>
                <div className="text-sm text-muted">{auction.date}</div>
                <StatusPill status={auction.status.key} label={auction.status.label} />
              </div>
            ))}
          </div>
        )}

        {activeTab === "ratings" && (
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="bg-white/70 rounded-2xl p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-xs text-muted">{review.date}</div>
                </div>
                <div className="text-gold text-sm">{"★".repeat(review.rating)}</div>
                <p className="text-sm">{review.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
