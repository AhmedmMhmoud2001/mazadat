import { useState } from "react";
import { Link } from "react-router-dom";
import { FiShare2, FiHeart, FiClock, FiFileText, FiShield, FiUserCheck, FiZap, FiAward, FiUsers, FiSmile, FiHeadphones } from "react-icons/fi";
import { BiBuildingHouse } from "react-icons/bi";
import AuctionCard from "../components/AuctionCard";
import auctionFrame from "../assets/Frame 1171276970.png";

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
    price: "17,000,000 د.إ",
    date: "15 فبراير 2024",
    status: { key: "upcoming", label: "قادم" },
    cta: "التفاصيل",
  },
  {
    title: "اسم المنتج",
    category: "سيارات",
    location: "أبو ظبي",
    price: "17,000,000 د.إ",
    date: "15 فبراير 2024",
    status: { key: "upcoming", label: "قادم" },
    cta: "التفاصيل",
  },
  {
    title: "اسم المنتج",
    category: "سيارات",
    location: "أبو ظبي",
    price: "17,000,000 د.إ",
    date: "15 فبراير 2024",
    status: { key: "upcoming", label: "قادم" },
    cta: "التفاصيل",
  },
];

const AuctionDetails = () => {
  const [activeTab, setActiveTab] = useState("specs");
  const [bidAmount, setBidAmount] = useState("");

  return (
    <div className="bg-[#FDFCF9] min-h-screen text-[#1D1D1D] pb-20">
      <div className="mx-auto max-w-7xl px-4 py-8 space-y-8">

        {/* Breadcrumb & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-sm text-[#828282] mb-2">
              الرئيسية / المزادات / <span className="text-[#1D1D1D] font-medium">تفاصيل المزاد</span>
            </div>
            <h1 className="text-3xl font-bold">قصر في وسط المدينة</h1>
          </div>
          <div className="flex gap-3">
            <button className="h-10 w-10 flex items-center justify-center rounded-full border border-[#EBEBEB] hover:bg-gray-50 text-[#1D1D1D] transition-colors">
              <FiShare2 />
            </button>
            <button className="h-10 w-10 flex items-center justify-center rounded-full border border-[#EBEBEB] hover:bg-gray-50 text-[#1D1D1D] transition-colors">
              <FiHeart />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8">

          {/* RIGHT COLUMN (Main Content) - In RTL: First visuals */}
          <div className="space-y-6">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-sm group">
                <img src={auctionFrame} alt="Main" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-[16/9] rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-[#B3985F] transition-all">
                    <img src={auctionFrame} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs & Content */}
            <div className="bg-white rounded-3xl p-6 border border-[#EBEBEB] shadow-sm">
              <div className="flex gap-8 border-b border-[#EBEBEB] mb-6">
                {detailTabs.map(tab => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`pb-4 text-base font-medium transition-all relative ${activeTab === tab.key
                      ? "text-[#1D1D1D]"
                      : "text-[#828282] hover:text-[#1D1D1D]"
                      }`}
                  >
                    {tab.label}
                    {activeTab === tab.key && (
                      <span className="absolute bottom-0 right-0 w-full h-[3px] bg-[#1D1D1D] rounded-t-full" />
                    )}
                  </button>
                ))}
              </div>

              <div className="min-h-[200px]">
                {activeTab === 'specs' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <SpecItem label="المساحة" value="480 متر مربع" />
                    <SpecItem label="سنة البناء" value="2016" />
                    <SpecItem label="الحالة" value="جاهزة للسكن" />
                    <SpecItem label="الموقع" value="عنوان المنتج" />
                  </div>
                )}
                {activeTab === 'description' && (
                  <div className="text-[#666] leading-relaxed">
                    <p>وصف تفصيلي للمزاد والعقار المعروض... يتميز هذا العقار بموقعه المتميز وتشطيباته الفاخرة.</p>
                  </div>
                )}
                {activeTab === 'docs' && (
                  <div className="space-y-3">
                    <DocItem title="تقرير فني PDF" />
                    <DocItem title="تقرير تقييم السعر PDF" />
                    <DocItem title="سند ملكية PDF" />
                  </div>
                )}
              </div>
            </div>

            {/* Seller Info */}
            <div className="bg-[#F8F8F8] rounded-3xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gray-300 overflow-hidden border border-white">
                  <img src="https://ui-avatars.com/api/?name=Seller&background=random" alt="Seller" />
                </div>
                <div>
                  <div className="text-xs text-[#828282]">البائع</div>
                  <div className="font-bold text-[#1D1D1D]">اسم البائع</div>
                </div>
              </div>
              <div className="text-[#27AE60] bg-[#E8F5E9] p-2 rounded-full">
                <FiShield className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* LEFT COLUMN (Sidebar) */}
          <div className="space-y-6">
            {/* Bid Box */}
            <div className="bg-white rounded-3xl p-6 border border-[#EBEBEB] shadow-sm space-y-6 sticky top-4">

              {/* Prices Grid */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-[#F9F9F9] p-3 rounded-xl border border-[#EEE]">
                  <div className="text-[#828282] mb-1">الحد الأدنى للزيادة</div>
                  <div className="font-bold text-[#1D1D1D]">10,000</div>
                </div>
                <div className="bg-[#F9F9F9] p-3 rounded-xl border border-[#EEE]">
                  <div className="text-[#828282] mb-1">السعر الحالي</div>
                  <div className="font-bold text-[#1D1D1D] text-sm">1,655,000</div>
                </div>
                <div className="bg-[#F9F9F9] p-3 rounded-xl border border-[#EEE]">
                  <div className="text-[#828282] mb-1">سعر البداية</div>
                  <div className="font-bold text-[#1D1D1D]">500,000</div>
                </div>
              </div>

              {/* Timer Box */}
              <div className="bg-[#D9534F] text-white rounded-2xl p-5 text-center shadow-lg shadow-red-200">
                <div className="text-sm opacity-90 mb-1">الوقت المتبقي</div>
                <div className="text-4xl font-bold font-mono tracking-wider">00:29:45</div>
              </div>

              {/* Bid Input */}
              <div className="space-y-3">
                <div className="text-xs text-[#828282]">أدخل قيمة مشاركتك</div>
                <input
                  type="text"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  placeholder="000000"
                  className="w-full bg-[#F9F9F9] border border-[#EBEBEB] rounded-xl px-4 py-3 text-center text-xl font-bold outline-none focus:border-[#B3985F] focus:ring-1 focus:ring-[#B3985F] transition-all"
                />
                <Link to="/checkout" className="block w-full bg-[#B3985F] hover:bg-[#967d46] text-white font-bold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.98] text-center">
                  التسجيل في المزاد
                </Link>
              </div>

              {/* Recent Bids */}
              <div className="space-y-3 pt-2">
                <div className="font-bold text-sm border-b border-[#EEE] pb-2 flex justify-between items-center text-[#1D1D1D]">
                  <span>آخر مزايدات</span>
                  <span className="text-xs text-[#B3985F] cursor-pointer">عرض الكل</span>
                </div>
                <div className="space-y-1">
                  <BidRow name="الاسم" amount="10,000,000" time="قبل دقيقة واحدة" />
                  <BidRow name="الاسم" amount="12,000,000" time="قبل 4 دقيقة" />
                </div>
              </div>
            </div>

            {/* Trust & Safety */}
            <InfoCard title="الموثوقية والأمان">
              <ul className="space-y-3 text-sm text-[#666]">
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-[#FAF7F0] flex items-center justify-center text-[#B3985F]"><FiShield size={14} /></div> توثيق البائعين والعقود</li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-[#FAF7F0] flex items-center justify-center text-[#B3985F]"><FiShield size={14} /></div> حماية المدفوعات والبيانات</li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-[#FAF7F0] flex items-center justify-center text-[#B3985F]"><FiZap size={14} /></div> تحديثات فورية لكل مزاد</li>
              </ul>
            </InfoCard>

            {/* Policies */}
            <InfoCard title="سياسات المزاد">
              <ul className="space-y-3 text-sm text-[#666]">
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-[#FAF7F0] flex items-center justify-center text-[#B3985F]"><FiFileText size={14} /></div> رسوم التسجيل غير قابلة للاسترداد</li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-[#FAF7F0] flex items-center justify-center text-[#B3985F]"><FiFileText size={14} /></div> يتم استرداد التأمين في حال عدم الفوز</li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-[#FAF7F0] flex items-center justify-center text-[#B3985F]"><FiFileText size={14} /></div> تسليم المستندات خلال 48 ساعة</li>
              </ul>
            </InfoCard>

          </div>
        </div>

        {/* Related Auctions Section */}
        <div className="pt-16 pb-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#1D1D1D]">مزادات أخرى</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedAuctions.map((auction, idx) => (
              <AuctionCard key={idx} {...auction} />
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section (Bottom Stripe) */}
      <div className="bg-white pt-16 mt-10 border-t border-[#EBEBEB]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section 1: Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 text-center">
            <StatItem number="20,000" label="عضو نشط" />
            <StatItem number="95%" label="نسبة الرضا" />
            <StatItem number="200" label="مزاد شهريا" />
            <StatItem number="24/7" label="دعم العملاء" />
          </div>
        </div>

        {/* Section 2: Features - Dark Background */}
        <div className="bg-[#1A1A2E] py-20 w-full">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
              <FeatureItem icon={<FiZap className="w-10 h-10" />} title="تحديثات فورية و مباشرة" />
              <FeatureItem icon={<FiShield className="w-10 h-10" />} title="آمن و موثوق" />
              <FeatureItem icon={<FiAward className="w-10 h-10" />} title="منتجات أصلية" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

// Helper Components

const SpecItem = ({ label, value }) => (
  <div className="flex items-center justify-between p-4 bg-[#F9F9F9] rounded-xl border border-[#EEE] hover:border-[#B3985F]/30 transition-colors">
    <span className="text-[#828282]">{label}</span>
    <span className="font-bold text-[#1D1D1D]">{value}</span>
  </div>
);

const DocItem = ({ title }) => (
  <div className="flex items-center justify-between p-4 bg-[#F9F9F9] rounded-xl border border-[#EEE] hover:border-[#B3985F]/30 transition-colors cursor-pointer group">
    <div className="flex items-center gap-3">
      <div className="bg-[#FFEAEA] text-[#D9534F] p-2 rounded-lg text-xs font-bold shadow-sm">PDF</div>
      <span className="text-[#1D1D1D] font-medium group-hover:text-[#B3985F] transition-colors">{title}</span>
    </div>
    <button className="text-sm text-[#B3985F] hover:underline">عرض</button>
  </div>
);

const BidRow = ({ name, amount, time }) => (
  <div className="flex items-center justify-between text-xs py-3 border-b border-[#F5F5F5] last:border-none hover:bg-gray-50 px-2 rounded-lg transition-colors">
    <div className="flex flex-col gap-1 items-start">
      <span className="font-bold text-[#1D1D1D] text-sm">{amount} د.إ</span>
      <span className="text-[#D9534F] font-medium">{time}</span>
    </div>
    <span className="text-[#828282]">{name}</span>
  </div>
);

const InfoCard = ({ title, children }) => (
  <div className="bg-white rounded-3xl p-6 border border-[#EBEBEB] shadow-sm space-y-4">
    <h3 className="font-bold text-lg text-[#1D1D1D]">{title}</h3>
    {children}
  </div>
);

const StatItem = ({ number, label }) => (
  <div className="space-y-2 group cursor-default">
    <div className="text-5xl font-bold text-[#B3985F] font-sans group-hover:scale-110 transition-transform duration-300">{number}</div>
    <div className="text-lg text-[#1D1D1D] font-bold">{label}</div>
  </div>
);

const FeatureItem = ({ icon, title }) => (
  <div className="flex flex-col items-center gap-6 group cursor-default">
    <div className="w-24 h-24 rounded-3xl border-2 border-white/20 flex items-center justify-center text-white mb-2 transform group-hover:rotate-6 bg-white/5 backdrop-blur-sm transition-all duration-300">
      {icon}
    </div>
    <div className="text-white font-bold text-xl">{title}</div>
  </div>
);

export default AuctionDetails;
