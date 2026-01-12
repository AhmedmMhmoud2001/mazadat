import { useState } from "react";
import { Link } from "react-router-dom";
import { FiClock, FiUser, FiPlus } from "react-icons/fi";
import { TbGraph } from "react-icons/tb";
import auctionFrame from "../assets/Frame 1171276970.png";

const LiveAuction = () => {
  const [bidAmount, setBidAmount] = useState("");

  const quickBids = [
    { amount: "10,000", label: "10,000 جنيه مصري" },
    { amount: "20,000", label: "20,000 جنيه مصري" },
    { amount: "30,000", label: "30,000 جنيه مصري" },
  ];

  const bidders = [
    { name: "الأسم", amount: "2,880,000", time: "5 ثانية", isHighest: true },
    { name: "الأسم", amount: "2,880,000", time: "5 ثانية", isHighest: false },
    { name: "الأسم", amount: "2,880,000", time: "5 ثانية", isHighest: false },
    { name: "الأسم", amount: "2,880,000", time: "5 ثانية", isHighest: false },
  ];

  return (
    <div className="bg-[#F5F2EB] min-h-screen pt-24 lg:pt-32 pb-12">
      <div className="mx-auto max-w-7xl px-4 space-y-6">

        {/* Top Bar - Timer and Current Price */}
        <div className="bg-white rounded-2xl shadow-[0px_10px_50px_0px_rgba(0,0,0,0.05)] p-4 lg:p-6 flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-4 border border-white">
          <div className="bg-[#D94B4B10] border-2 border-[#D94B4B] rounded-2xl p-4 flex flex-col items-center gap-1 min-w-full md:min-w-[180px] shadow-sm">
            <div className="flex items-center gap-2 text-[#D94B4B]">
              <FiClock className="w-5 h-5" />
              <span className="text-[14px] lg:text-[16px] font-bold">الوقت المتبقي</span>
            </div>
            <div className="text-[28px] lg:text-[40px] font-bold text-[#D94B4B] tracking-wider">15:00</div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="text-[14px] lg:text-[16px] text-[#1C1C28]/60 font-medium">السعر الحالي</p>
            <div className="flex items-end gap-2">
              <span className="text-[32px] lg:text-[48px] font-black text-[#1C1C28]">1,333,000</span>
              <span className="text-[16px] lg:text-[20px] text-[#1C1C28]/80 mb-2 lg:mb-3">جنيه مصري</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_621px] gap-6">

          {/* LEFT COLUMN - Bidding Section (Bottom on Mobile, Left on Desktop) */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Bidding Controls */}
            <div className="bg-white rounded-2xl shadow-[0px_10px_50px_0px_rgba(0,0,0,0.05)] p-4 lg:p-6 space-y-6 border border-white/50">
              <div className="grid grid-cols-3 gap-2 lg:gap-4 text-center">
                <div className="bg-[#F5F2EB]/50 p-2 lg:p-4 rounded-xl border border-gray-100">
                  <div className="text-[#1C1C28]/60 mb-1 lg:mb-2 text-[12px] lg:text-[16px]">سعر البداية</div>
                  <div className="font-bold text-[#1C1C28] text-[14px] lg:text-[24px]">500,000</div>
                </div>
                <div className="bg-[#2F9D5D] p-2 lg:p-4 rounded-xl shadow-lg shadow-green-900/10">
                  <div className="text-white/80 mb-1 lg:mb-2 text-[12px] lg:text-[16px]">السعر الحالي</div>
                  <div className="font-bold text-white text-[14px] lg:text-[24px]">1,655,000</div>
                </div>
                <div className="bg-[#F5F2EB]/50 p-2 lg:p-4 rounded-xl border border-gray-100">
                  <div className="text-[#1C1C28]/60 mb-1 lg:mb-2 text-[12px] lg:text-[16px]">الحد الأدنى</div>
                  <div className="font-bold text-[#1C1C28] text-[14px] lg:text-[24px]">10,000</div>
                </div>
              </div>

              {/* Quick Bids */}
              <div className="space-y-4">
                <p className="text-[18px] lg:text-[20px] font-bold text-[#1C1C28] text-right">مزايدة سريعة</p>
                <div className="flex flex-col gap-3 max-w-lg ml-auto">
                  {quickBids.map((bid, i) => (
                    <button
                      key={i}
                      className="bg-[#1C1C28] text-white rounded-xl py-4 px-6 flex items-center justify-between hover:bg-[#2a2a3c] active:scale-[0.98] transition-all"
                    >
                      <FiPlus className="w-6 h-6" />
                      <span className="text-[16px] lg:text-[18px] font-bold">{bid.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Bid Input */}
              <div className="flex gap-3 max-w-lg ml-auto pt-2">
                <button className="bg-[#9E7731] text-white rounded-xl p-4 flex items-center justify-center hover:bg-[#8A6629] transition-colors w-[60px] lg:w-[70px] flex-shrink-0 shadow-lg shadow-amber-900/10">
                  <FiPlus className="w-8 h-8 font-bold" />
                </button>
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    placeholder="أدخل مبلغ المزايدة"
                    className="w-full border-2 border-gray-100 focus:border-[#1C1C28] rounded-xl px-4 py-4 text-right text-[16px] lg:text-[18px] font-bold text-[#1C1C28] bg-gray-50/50 outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-[0px_10px_50px_0px_rgba(0,0,0,0.05)] p-5 space-y-4 border border-white/50">
              <div className="flex flex-row-reverse items-center justify-center gap-2 pb-2 border-b border-gray-50">
                <TbGraph className="w-5 h-5 text-[#9E7731]" />
                <p className="text-[18px] lg:text-[20px] font-bold text-[#1C1C28]">إحصائيات المزاد</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[16px] lg:text-[18px] font-bold">47</span>
                  <span className="text-[#1C1C28]/50">إجمالي المزايدات</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[16px] lg:text-[18px] font-bold">12</span>
                  <span className="text-[#1C1C28]/50">المشاركون النشطون</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 font-bold">
                    <span>جنيه</span>
                    <span>1,500,000</span>
                  </div>
                  <span className="text-[#1C1C28]/50">السعر الابتدائي</span>
                </div>
              </div>
            </div>

            {/* Seller Info */}
            <Link to="/dashboard" className="bg-white rounded-2xl shadow-[0px_10px_50px_0px_rgba(0,0,0,0.05)] p-4 flex items-center justify-end gap-4 hover:shadow-lg transition-all border border-white/50">
              <div className="flex-1 text-right">
                <p className="text-[18px] font-bold text-[#1C1C28]">اسم البائع</p>
                <p className="text-[14px] text-[#1C1C28]/60 line-clamp-1">لوريم ايبسوم دولار سيت أميت دونك، أوت أليكو</p>
              </div>
              <div className="w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] bg-gray-100 rounded-xl flex-shrink-0 flex items-center justify-center">
                <FiUser className="w-6 h-6 text-gray-400" />
              </div>
            </Link>
          </div>

          {/* RIGHT COLUMN - Image and Product Info (Top on Mobile, Right on Desktop) */}
          <div className="space-y-6 order-2 lg:order-1 text-right">
            {/* Main Image */}
            <div className="relative h-[300px] lg:h-[610px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img src={auctionFrame} alt="المزاد" className="w-full h-full object-cover" />
              <div className="absolute top-6 left-6 bg-[#D94B4B] text-white px-4 py-2 rounded-full flex items-center gap-2 font-bold shadow-lg">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span>مباشر</span>
              </div>
            </div>

            {/* Product Info Card */}
            <div className="bg-white rounded-2xl shadow-[0px_10px_50px_0px_rgba(0,0,0,0.05)] p-4 flex items-center justify-end gap-4 border border-white/50">
              <div className="flex-1 text-right space-y-1">
                <p className="text-[20px] lg:text-[24px] font-bold text-[#1C1C28]">قصر في وسط المدينة</p>
                <p className="text-[14px] lg:text-[16px] text-[#1C1C28]/60 leading-relaxed">وصف مختصر للمنتج يوضح أهم المميزات والمواصفات العقارية للمزاد المباشر</p>
              </div>
              <div className="w-[60px] lg:w-[80px] h-[60px] lg:h-[80px] bg-[#9E7731]/10 rounded-2xl flex-shrink-0 flex items-center justify-center">
                <img src={auctionFrame} className="w-full h-full object-cover rounded-2xl" alt="small thumb" />
              </div>
            </div>
          </div>
        </div>

        {/* Bidders List */}
        <div className="bg-white rounded-2xl shadow-[0px_10px_50px_0px_rgba(0,0,0,0.05)] p-4 lg:p-6 space-y-4 border border-white/50">
          <h3 className="text-[20px] font-bold text-[#1C1C28] text-right mb-4">نشاط المزايدة</h3>
          <div className="space-y-3">
            {bidders.map((bidder, index) => (
              <div
                key={index}
                className={`flex flex-col gap-3 p-4 rounded-2xl transition-all ${bidder.isHighest
                  ? "bg-[#02B57F08] border-r-4 border-[#02B57F]"
                  : "bg-gray-50/50 border-r-4 border-transparent"
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div>

                    {bidder.isHighest ? (
                      <div className="bg-[#02B57F] text-white px-3 py-1 rounded-full text-[10px] lg:text-[12px] font-bold shadow-sm shadow-[#02B57F30]">
                        الأعلى حالياً
                      </div>
                    ) : <div />}
                    <div className="flex items-center gap-2 mt-2">
                      <p className="text-[14px] lg:text-[16px] font-bold text-[#1C1C28]">{bidder.name}</p>
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                        <FiUser className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">

                      <div className="flex items-center gap-1 text-[10px] lg:text-[12px] text-[#1C1C28]/40">
                        <FiClock className="w-3 h-3" />
                        <span>منذ {bidder.time}</span>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="flex items-center justify-start gap-1 text-[#9E7731] border-t border-gray-100 pt-2 mt-1">
                  <span className="text-[20px] lg:text-[24px] font-black">{bidder.amount}</span>
                  <span className="text-[14px] lg:text-[16px] font-medium opacity-70">جنيه مصري</span>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveAuction;

