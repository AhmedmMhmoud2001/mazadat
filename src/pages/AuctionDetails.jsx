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
      <div className="mx-auto max-w-7xl px-4 pt-32 pb-12 space-y-8">

        {/* Breadcrumb & Title */}
        <div className="flex justify-end">
          <div className="text-right space-y-2">
            <div className="text-sm text-[#1C1C28] flex gap-2 justify-end">
              <span className="font-bold">تفاصيل المزاد</span>
              <span>المزايدات /</span>
              <span>الرئيسية /</span>
            </div>
            <h1 className="text-[22px] font-bold">قصر في وسط المدينة</h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_561px] gap-4">

          {/* RIGHT COLUMN (Main Content) - في RTL يظهر على اليسار */}
          <div className="space-y-4 order-2 lg:order-2">
            {/* Bid Box */}
            <div className="bg-[#F5F2EB] rounded-lg p-5 shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] space-y-3">

              {/* Prices Grid */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-[#F5F2EB] p-3 rounded-lg">
                  <div className="text-[#1C1C28] mb-2 text-[16px]">سعر البداية</div>
                  <div className="font-bold text-[#1C1C28] text-[24px]">500,000</div>
                </div>
                <div className="bg-[#F5F2EB] p-3 rounded-lg">
                  <div className="text-[#1C1C28] mb-2 text-[16px]">السعر الحالي</div>
                  <div className="font-bold text-[#1C1C28] text-[24px]">1,655,000</div>
                </div>
                <div className="bg-[#F5F2EB] p-3 rounded-lg">
                  <div className="text-[#1C1C28] mb-2 text-[16px]">الحد الأدنى للزيادة</div>
                  <div className="font-bold text-[#1C1C28] text-[24px]">10,000</div>
                </div>
              </div>

              {/* Timer Box */}
              <div className="bg-[#D94B4B] text-[#F5F2EB] rounded-lg p-5 text-center space-y-2">
                <div className="text-[20px] font-bold">الوقت المتبقي</div>
                <div className="text-[28px] font-bold">00:29:45</div>
              </div>

              {/* Register Button */}
              <Link to="/checkout" className="block w-full bg-[#9E7731] hover:bg-[#8A6629] text-[#F5F2EB] font-bold py-4 rounded-lg transition-all text-center text-[24px]">
                النتسجيل في المزاد
              </Link>

              {/* Recent Bids */}
              <div className="space-y-2 pt-2">
                <div className="font-bold text-[20px] text-[#1C1C28] text-right border-b border-gray-200 pb-2">
                  اخر مزايدات
                </div>
                <div className="space-y-3">
                  <BidRow name="الأسم" amount="10,000,000" currency="جنيه مصري" time="قبل دقيقة واحدة" />
                  <BidRow name="الأسم" amount="12,000,000" currency="جنيه مصري" time="قبل 4 دقيقة واحدة" />
                </div>
              </div>
            </div>

            {/* Trust & Safety */}
            <InfoCard title="الموثوقية و الأمان">
              <div className="space-y-1 text-[#1C1C28] text-[18px] text-right leading-normal">
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

          {/* LEFT COLUMN (Sidebar) - في RTL يظهر على اليمين */}
          <div className="space-y-4 order-1 lg:order-1">
            {/* Image Gallery */}
            <div className="bg-[#F5F2EB] rounded-lg p-3 space-y-3 shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)]">
              <div className="h-[340px] relative rounded-lg overflow-hidden">
                <img src={auctionFrame} alt="Main" className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-[94px] rounded overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                    <img src={auctionFrame} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs & Content */}
            <div className="bg-[#F5F2EB] rounded-lg p-5 shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] space-y-4">
              <div className="flex gap-3 justify-end">
                {detailTabs.map(tab => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`px-4 py-2 rounded-lg text-[20px] font-bold transition-all ${
                      activeTab === tab.key
                        ? "bg-[#1C1C28] text-[#F0E8D5] border border-[#1C1C28]"
                        : "text-[rgba(28,28,40,0.55)] hover:text-[#1C1C28]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="min-h-[200px] text-right">
                {activeTab === 'description' && (
                  <div className="text-[#1C1C28] text-[16px] leading-normal space-y-4">
                    <p>لوريم ايبسوم دولار سيت أميت بيريتيتيس. فينيام، فوليام لابوري كويرات يوت كونسيكوات. دولار فوليام أيوتي لابوريس إنيم نويس سيت إنتروليكيشن لامبور مينيم كونسيكوات. أليكا ماغنيت .</p>
                    <ul className="list-disc pr-6 space-y-1.5">
                      <li>ريس إنيم نويس سيت إنت</li>
                      <li>ريس إنيم نويس سيت إنت</li>
                      <li>ريس إنيم نويس سيت إنت</li>
                    </ul>
                  </div>
                )}
                {activeTab === 'specs' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-right">
                    <SpecItem label="المساحة" value="480 متر مربع" />
                    <SpecItem label="سنة البناء" value="2016" />
                    <SpecItem label="الحالة" value="جاهزة للسكن" />
                    <SpecItem label="الموقع" value="عنوان المنتج" />
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
            <div className="bg-[#F5F2EB] rounded-lg shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-bold text-[22px] text-[#1C1C28] text-right">البائع</h3>
              </div>
              <div className="flex items-center justify-end gap-3 p-4">
                <BsCheckCircleFill className="w-10 h-10 text-green-500" />
                <p className="text-[#1C1C28] text-[20px] font-medium">اسم البائع</p>
                <div className="h-10 w-10 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                  <img src="https://ui-avatars.com/api/?name=Seller&background=random" alt="Seller" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Auctions Section */}
        <div className="pt-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
  <div className="flex items-center justify-end gap-3 text-right">
    <span className="text-[#D94B4B] text-[12px] font-bold">{time}</span>
    <div className="text-[18px]">
      <span className="text-[rgba(28,28,40,0.55)]">{amount} {currency} </span>
      <span className="font-bold text-[#1C1C28]">{name}</span>
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
