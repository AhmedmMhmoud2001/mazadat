import { useState } from "react";
import { FiUsers, FiAward, FiTrendingUp, FiPackage } from "react-icons/fi";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import DashboardSidebar from "../components/DashboardSidebar";

const dashboardTabs = [
  { key: "overview", label: "نظرة عامة" },
  { key: "myAuctions", label: "مزاداتي" },
  { key: "ratings", label: "التقييمات" },
];

const myAuctions = [
  {
    title: "اسم المزاد",
    price: "155,000 جنيه مصري",
    participants: "80 مشاركة",
    date: "بتاريخ 20221-2-14",
    status: { key: "win", label: "مباع", color: "text-green-600" },
  },
  {
    title: "اسم المزاد",
    price: "155,000 جنيه مصري",
    participants: "80 مشاركة",
    date: "بتاريخ 20221-2-14",
    status: { key: "active", label: "نشط", color: "text-orange-600" },
  },
  {
    title: "اسم المزاد",
    price: "155,000 جنيه مصري",
    participants: "80 مشاركة",
    date: "بتاريخ 20221-2-14",
    status: { key: "pending", label: "مباع", color: "text-green-600" },
  },
  {
    title: "اسم المزاد",
    price: "155,000 جنيه مصري",
    participants: "80 مشاركة",
    date: "بتاريخ 20221-2-14",
    status: { key: "pending", label: "مباع", color: "text-green-600" },
  },
];

const reviews = [
  {
    name: "محمد",
    date: "14-2-2021",
    rating: 5,
    comment: "لوريم إيبسوم دولار سيت أميت، كونسيكتتور أديسبسكينغ إيليت. فينيام، سيت. لوريسنولار لا",
  },
  {
    name: "محمد",
    date: "14-2-2021",
    rating: 5,
    comment: "لوريم إيبسوم دولار سيت أميت، كونسيكتتور أديسبسكينغ إيليت. فينيام، سيت. لوريسنولار لا",
  },
  {
    name: "محمد",
    date: "14-2-2021",
    rating: 5,
    comment: "لوريم إيبسوم دولار سيت أميت، كونسيكتتور أديسبسكينغ إيليت. فينيام، سيت. لوريسنولار لا",
  },
  {
    name: "محمد",
    date: "14-2-2021",
    rating: 5,
    comment: "لوريم إيبسوم دولار سيت أميت، كونسيكتتور أديسبسكينغ إيليت. فينيام، سيت. لوريسنولار لا",
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="bg-[#F5F2EB] min-h-screen pt-32 pb-12">
      <section className="mx-auto max-w-6xl px-4 space-y-8">
        
        {/* Profile Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 rounded-full bg-gray-300" />
            <div className="text-right">
              <div className="flex items-center gap-2">
                <BsCheckCircleFill className="w-5 h-5 text-green-500" />
                <div className="font-bold text-xl text-[#1C1C28]">اسم البائع</div>
              </div>
              <div className="text-sm text-gray-600">عضوية منذ 2022</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-[#1C1C28]">4.8 (71 تقييم)</span>
            <FaStar className="w-5 h-5 text-yellow-500" />
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#1C1C28] text-white rounded-lg p-6 flex flex-col items-center gap-4">
            <FiTrendingUp className="w-12 h-12" />
            <div className="text-3xl font-bold">1,250,000</div>
            <div className="text-sm opacity-80">إجمالي المبيعات</div>
          </div>

          <div className="bg-[#1C1C28] text-white rounded-lg p-6 flex flex-col items-center gap-4">
            <FiPackage className="w-12 h-12" />
            <div className="text-3xl font-bold">50</div>
            <div className="text-sm opacity-80">إجمالي المزادات</div>
          </div>

          <div className="bg-[#1C1C28] text-white rounded-lg p-6 flex flex-col items-center gap-4">
            <FiAward className="w-12 h-12" />
            <div className="text-3xl font-bold">80%</div>
            <div className="text-sm opacity-80">معدل النجاح</div>
          </div>

          <div className="bg-[#1C1C28] text-white rounded-lg p-6 flex flex-col items-center gap-4">
            <FiUsers className="w-12 h-12" />
            <div className="text-3xl font-bold">30</div>
            <div className="text-sm opacity-80">صفقة مكتملة</div>
          </div>
        </div>

        {/* Tabs and Content */}
        <div className="bg-white rounded-lg p-6 space-y-6">
          <div className="flex gap-0 border-b-2 border-gray-200">
            {dashboardTabs.map(tab => (
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

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="grid gap-6 md:grid-cols-3 text-center">
              <div className="bg-gray-50 rounded-lg p-6 space-y-2">
                <div className="text-gray-600">مزادات هذا الشهر</div>
                <div className="text-3xl font-bold text-[#1C1C28]">11</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 space-y-2">
                <div className="text-gray-600">مزادات هذا الشهر</div>
                <div className="text-3xl font-bold text-[#1C1C28]">5,000,000</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 space-y-2">
                <div className="text-gray-600">متوسط سعر البيع</div>
                <div className="text-3xl font-bold text-[#1C1C28]">5,000,000</div>
              </div>
            </div>
          )}

          {/* My Auctions Tab */}
          {activeTab === "myAuctions" && (
            <div className="space-y-4">
              {myAuctions.map((auction, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg items-center"
                >
                  <div className="text-right">
                    <div className="font-bold text-[#1C1C28]">{auction.title}</div>
                    <div className="text-sm text-[#9E7731]">{auction.price}</div>
                  </div>
                  <div className="text-center text-[#1C1C28]">{auction.participants}</div>
                  <div className="text-center text-[#1C1C28]">{auction.date}</div>
                  <div className={`text-center font-medium ${auction.status.color}`}>
                    {auction.status.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Ratings Tab */}
          {activeTab === "ratings" && (
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-5 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4 text-yellow-500" />
                      ))}
                    </div>
                    <div className="font-bold text-[#1C1C28]">{review.name}</div>
                  </div>
                  <div className="text-sm text-gray-500 text-right">{review.date}</div>
                  <p className="text-[#1C1C28] text-right leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 mt-8">
        <div className="grid lg:grid-cols-[1fr_280px] gap-6">
          <div></div>
          <DashboardSidebar activeKey="dashboard" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
