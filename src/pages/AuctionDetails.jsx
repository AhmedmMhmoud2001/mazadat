import { useState } from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import { BsCheckCircleFill } from "react-icons/bs";
import AuctionCard from "../components/AuctionCard";
import auctionFrame from "../assets/Frame 1171276970.png";

const detailTabs = [
  { key: "description", label: "الوصف" },
  { key: "specs", label: "المواصفات" },
  { key: "docs", label: "الوثائق" },
];

const relatedAuctions = [
  {
    id: 2,
    title: "اسم المنتج",
    category: "سيارات",
    location: "أبو ظبي",
    price: "17,000,000 د.إ",
    date: "15 فبراير 2024",
    time: "7:00 مساءً",
    status: { key: "upcoming", label: "قادم" },
    cta: "التفاصيل",
  },
  {
    id: 3,
    title: "اسم المنتج",
    category: "سيارات",
    location: "أبو ظبي",
    price: "17,000,000 د.إ",
    date: "15 فبراير 2024",
    time: "7:00 مساءً",
    status: { key: "upcoming", label: "قادم" },
    cta: "التفاصيل",
  },
  {
    id: 4,
    title: "اسم المنتج",
    category: "سيارات",
    location: "أبو ظبي",
    price: "17,000,000 د.إ",
    date: "15 فبراير 2024",
    time: "7:00 مساءً",
    status: { key: "upcoming", label: "قادم" },
    cta: "التفاصيل",
  },
];

const AuctionDetails = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="bg-[#F5F2EB] min-h-screen text-[#1C1C28]">
      <div className="mx-auto max-w-7xl px-4 pt-20 lg:pt-32 pb-12 space-y-8">

        {/* Breadcrumb & Title */}
        <div className="flex justify-end">
          <div className="text-right space-y-2">
            <div className="text-sm text-[#1C1C28] flex gap-2 justify-end opacity-70">
              <span className="font-bold">تفاصيل المزاد</span>
              <span>/ المزايدات</span>
              <span>/ الرئيسية</span>
            </div>
            <h1 className="text-[24px] lg:text-[32px] font-bold">قصر في وسط المدينة</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_561px] gap-6">

          {/* LEFT COLUMN (Sidebar in Desktop, Top in Mobile if we want Bid Box first) */}
          {/* Usually for Auction Details, we want Image first, then Bid Box. So we use order classes */}

          <div className="space-y-6 order-2 lg:order-2">
            {/* Bid Box */}
            <div className="bg-[#F5F2EB] rounded-2xl p-4 lg:p-6 shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] border border-[#EBEBEB] space-y-4">

              {/* Prices Grid */}
              <div className="grid grid-cols-3 gap-2 lg:gap-4 text-center">
                <div className="bg-white/50 p-2 lg:p-3 rounded-xl border border-white">
                  <div className="text-[#1C1C28]/60 mb-1 lg:mb-2 text-[12px] lg:text-[16px]">سعر البداية</div>
                  <div className="font-bold text-[#1C1C28] text-[16px] lg:text-[24px]">500,000</div>
                </div>
                <div className="bg-white/50 p-2 lg:p-3 rounded-xl border border-white">
                  <div className="text-[#1C1C28]/60 mb-1 lg:mb-2 text-[12px] lg:text-[16px]">السعر الحالي</div>
                  <div className="font-bold text-[#1C1C28] text-[16px] lg:text-[24px]">1,655,000</div>
                </div>
                <div className="bg-white/50 p-2 lg:p-3 rounded-xl border border-white">
                  <div className="text-[#1C1C28]/60 mb-1 lg:mb-2 text-[12px] lg:text-[16px]">الحد الأدنى</div>
                  <div className="font-bold text-[#1C1C28] text-[16px] lg:text-[24px]">10,000</div>
                </div>
              </div>

              {/* Timer Box */}
              <div className="bg-[#D94B4B] text-[#F5F2EB] rounded-xl p-4 lg:p-6 text-center shadow-lg shadow-red-900/20">
                <div className="text-[14px] lg:text-[18px] font-medium opacity-90">الوقت المتبقي</div>
                <div className="text-[24px] lg:text-[36px] font-bold tracking-wider">00:29:45</div>
              </div>

              {/* Register Button */}
              <Link to="/register-auction" className="block w-full bg-[#9E7731] hover:bg-[#8A6629] text-[#F5F2EB] font-bold py-4 rounded-xl transition-all text-center text-[18px] lg:text-[24px] shadow-lg shadow-amber-900/20">
                التسجيل في المزاد
              </Link>

              {/* Recent Bids */}
              <div className="space-y-4 pt-2">
                <div className="font-bold text-[18px] lg:text-[20px] text-[#1C1C28] text-right border-b border-gray-200 pb-2">
                  آخر المزايدات
                </div>
                <div className="space-y-3">
                  <BidRow name="الأسم" amount="10,000,000" currency="جنيه مصري" time="قبل دقيقة واحدة" />
                  <BidRow name="الأسم" amount="12,000,000" currency="جنيه مصري" time="قبل 4 دقائق" />
                </div>
              </div>
            </div>

            {/* Trust & Safety */}
            <InfoCard title="الموثوقية و الأمان">
              <div className="space-y-1 text-[#1C1C28] text-[18px] text-right leading-normal h-[200px]">
                <p>لوريم ايبسوم دولار سيت أميت إنت</p>
                <p>لوريم ايبسوم دولار سيت أميت</p>
                <p>لوريم ايبسوم دولاشينج إكزيرس</p>
              </div>
            </InfoCard>

            {/* Policies */}
            <InfoCard title="سياسات المزاد">
              <div className="space-y-2 text-[#1C1C28] text-[18px] text-right leading-normal">
                <p>لوريم ايبسوم دولار سيت أميت إنتروليكيشن أديبيسشينج إكزيرس.</p>
                <p>لوريم ايبسوم دولار سيت أميت إنتروليكيشن أديبيسشينج إكزيرس.</p>
                <p>لوريم ايبسوم دولار سيت أميت إنتروليكيشن أديبيسشينج إكزيرس.</p>
              </div>
            </InfoCard>
          </div>

          {/* LEFT COLUMN (Gallery & Info) */}
          <div className="space-y-6 order-1 lg:order-1">
            {/* Image Gallery */}
            <div className="bg-[#F5F2EB] rounded-2xl p-3 lg:p-4 space-y-3 shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] border border-[#EBEBEB]">
              <div className="h-[250px] lg:h-[450px] relative rounded-xl overflow-hidden">
                <img src={auctionFrame} alt="Main" className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-[#D94B4B] text-white px-3 py-1 rounded-full flex items-center gap-2 font-medium text-xs lg:text-sm shadow-lg">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  <span>مباشر</span>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2 lg:gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-[60px] lg:h-[94px] rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border border-gray-200">
                    <img src={auctionFrame} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs & Content */}
            <div className="bg-[#F5F2EB] rounded-2xl p-4 lg:p-6 shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] border border-[#EBEBEB] space-y-6">
              <div className="flex flex-wrap gap-2 lg:gap-4 justify-start border-b border-gray-100 pb-4">
                {detailTabs.map(tab => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`px-4 lg:px-6 py-2 rounded-xl text-[16px] lg:text-[20px] font-bold transition-all ${activeTab === tab.key
                      ? "bg-[#1C1C28] text-[#F0E8D5] shadow-md"
                      : "text-[rgba(28,28,40,0.55)] hover:text-[#1C1C28] hover:bg-white"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="min-h-[150px] lg:min-h-[200px] text-right">
                {activeTab === 'description' && (
                  <div className="text-[#1C1C28] text-[15px] lg:text-[18px] leading-relaxed space-y-4 opacity-90">
                    <p>لوريم ايبسوم دولار سيت أميت بيريتيتيس. فينيام، فوليام لابوري كويرات يوت كونسيكوات. دولار فوليام أيوتي لابوريس إنيم نويس سيت إنتروليكيشن لامبور مينيم كونسيكوات. أليكا ماغنيت .</p>
                    <ul className="list-disc pr-6 space-y-2">
                      <li>ريس إنيم نويس سيت إنت</li>
                      <li>ريس إنيم نويس سيت إنت</li>
                      <li>ريس إنيم نويس سيت إنت</li>
                    </ul>
                  </div>
                )}
                {activeTab === 'specs' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 text-right">
                    <SpecItem label="المساحة" value="480 متر مربع" />
                    <SpecItem label="سنة البناء" value="2016" />
                    <SpecItem label="الحالة" value="جاهزة للسكن" />
                    <SpecItem label="الموقع" value="عنوان المنتج" />
                  </div>
                )}
                {activeTab === 'docs' && (
                  <div className="space-y-3 lg:space-y-4">
                    <DocItem title="تقرير فني PDF" />
                    <DocItem title="تقرير تقييم السعر PDF" />
                    <DocItem title="سند ملكية PDF" />
                  </div>
                )}
              </div>
            </div>

            {/* Seller Info */}
            <Link to="/dashboard" className="bg-[#F5F2EB] rounded-2xl shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] border border-[#EBEBEB] overflow-hidden block hover:shadow-xl transition-all cursor-pointer">
              <div className="p-4 border-b border-gray-100 bg-white/30">
                <h3 className="font-bold text-[18px] lg:text-[22px] text-[#1C1C28] text-right">البائع</h3>
              </div>
              <div className="flex flex-row-reverse items-center justify-between gap-3 p-4 lg:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-end">
                    <p className="text-[#1C1C28] text-[18px] lg:text-[20px] font-bold hover:text-[#9E7731] transition-colors">اسم البائع</p>
                    <div className="flex items-center gap-1 text-green-600 text-sm">
                      <span>موثق</span>
                      <BsCheckCircleFill className="w-4 h-4" />
                    </div>
                  </div>
                  <img className="h-12 w-12 lg:h-14 lg:w-14 rounded-2xl border-2 border-white shadow-sm" src="https://ui-avatars.com/api/?name=Seller&background=9E7731&color=fff" alt="Seller" />
                </div>
                <div className="hidden sm:block">
                  <button className="bg-white text-[#1C1C28] px-4 py-2 rounded-xl text-sm font-bold border border-gray-100 hover:bg-gray-50 transition-colors">
                    عرض الملف الشخصي
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Related Auctions Section */}
        <div className="pt-12 space-y-8">
          <h2 className="text-[24px] lg:text-[32px] font-bold text-right">مزادات مشابهة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedAuctions.map((auction, idx) => (
              <AuctionCard key={idx} {...auction} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Components

const SpecItem = ({ label, value }) => (
  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
    <span className="font-bold text-[#1C1C28]">{value}</span>
    <span className="text-[#828282]">{label}</span>
  </div>
);

const DocItem = ({ title }) => (
  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 cursor-pointer hover:border-[#9E7731]/30 transition-colors">
    <button className="text-sm text-[#9E7731] hover:underline">عرض</button>
    <div className="flex items-center gap-3">
      <span className="text-[#1C1C28] font-medium">{title}</span>
      <div className="bg-[#FFEAEA] text-[#D9534F] px-2 py-1 rounded text-xs font-bold">PDF</div>
    </div>
  </div>
);

const BidRow = ({ name, amount, currency, time }) => (
  <div className="flex items-center justify-start gap-3 text-right">
    <span className="font-bold text-[#1C1C28]">{name}</span>

    <div className="text-[18px]">
      <span className="text-[rgba(28,28,40,0.55)]">{amount} {currency} </span>
      <span className="text-[#D94B4B] text-[12px] font-bold">{time}</span>
    </div>
  </div>
);

const InfoCard = ({ title, children }) => (
  <div className="bg-[#F5F2EB] rounded-lg p-3 shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] space-y-3">
    <div className="p-3">
      <h3 className="font-bold text-[22px] text-[#1C1C28] text-right">{title}</h3>
    </div>
    <div className="px-3">
      {children}
    </div>
  </div>
);

export default AuctionDetails;
