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
    <div className="bg-[#F5F2EB] min-h-screen pt-32 pb-12">
      <div className="mx-auto max-w-7xl px-4 space-y-4">
        
        {/* Top Bar - Timer and Current Price */}
        <div className="bg-[#FAF9F5] rounded-lg shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] p-5 flex flex-row-reverse items-center justify-between">
          <div className="bg-[rgba(217,75,75,0.05)] border-2 border-[#D94B4B] rounded-lg p-3 flex flex-col items-center gap-3 min-w-[120px]">
            <div className="flex items-center gap-2 text-[rgba(28,28,40,0.5)]">
              <span className="text-[16px] font-bold">الوقت المتبقي</span>
              <FiClock className="w-6 h-6" />
            </div>
            <div className="text-[32px] font-bold text-[#D94B4B]">15:00</div>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <p className="text-[16px] text-[rgba(28,28,40,0.4)]">السعر الحالي</p>
            <div className="flex items-end gap-1">
            <span className="text-[36px] font-bold text-black">1,333,000</span>
              <span className="text-[18px] text-black">جنيه مصري</span>
             
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[621px_1fr] gap-4">
          
          {/* Left Column - Bidding Section */}
          <div className="space-y-4 order-1 lg:order-2">
            {/* Prices Grid */}
            <div className="bg-[#F5F2EB] rounded-lg shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] p-5 space-y-5">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div className="bg-[#F5F2EB] p-3 rounded-lg">
                  <div className="text-[#1C1C28] mb-2 text-[16px]">سعر البداية</div>
                  <div className="font-bold text-[#1C1C28] text-[24px]">500,000</div>
                </div>
                <div className="bg-[#2F9D5D] p-3 rounded-lg">
                  <div className="text-[#F5F2EB] mb-2 text-[16px]">السعر الحالي</div>
                  <div className="font-bold text-[#F5F2EB] text-[24px]">1,655,000</div>
                </div>
                <div className="bg-[#F5F2EB] p-3 rounded-lg">
                  <div className="text-[#1C1C28] mb-2 text-[16px]">الحد الأدنى للزيادة</div>
                  <div className="font-bold text-[#1C1C28] text-[24px]">10,000</div>
                </div>
              </div>

              {/* Quick Bids */}
              <div className="space-y-3">
                <p className="text-[20px] font-medium text-[#1C1C28] text-right">اقتراحات سريعة</p>
                <div className="flex flex-col gap-4 w-[521px]">
                  {quickBids.map((bid, i) => (
                    <button
                      key={i}
                      className="bg-[#1C1C28] text-white rounded-lg py-3 px-4 flex items-center justify-between hover:bg-[#2a2a3c] transition-colors h-[50px]"
                    >
                     
                      <span className="text-[18px] font-medium">{bid.label}</span>
                      <FiPlus className="w-8 h-8" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Bid Input */}
              <div className="flex gap-3 w-[521px]">
              <input
                  type="text"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  placeholder="000000"
                  className="flex-1 border border-[#1C1C28] rounded-lg px-4 py-3 text-right text-[18px] font-bold text-[rgba(28,28,40,0.38)] bg-white"
                />
                <button className="bg-[#1C1C28] text-white rounded-lg p-3 flex items-center justify-center hover:bg-[#2a2a3c] transition-colors w-[60px] h-[60px]">
                  <FiPlus className="w-8 h-8" />
                </button>
                
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-[#F5F2EB] rounded-lg shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] p-5 space-y-3">
              <div className="flex items-center justify-center gap-2 p-3">
                <p className="text-[20px] font-medium text-black">إحصائياات سريعة</p>
                <TbGraph className="w-4 h-4" />
              </div>
              <div className="space-y-5 text-[16px] font-medium">
                <div className="flex items-center justify-between">
                  <span className="text-black">47</span>
                  <span className="text-[rgba(28,28,40,0.4)]">عدد المشاركات</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black">12</span>
                  <span className="text-[rgba(28,28,40,0.4)]">المشاركون</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-black">
                    <span>جنيه مصري</span>
                    <span>1,500,000</span>
                  </div>
                  <span className="text-[rgba(28,28,40,0.4)]">السعر الابتدائي</span>
                </div>
              </div>
            </div>

            {/* Seller Info */}
            <Link to="/dashboard" className="bg-[#F5F2EB] rounded-lg shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] p-3 flex items-center justify-start gap-3 h-[103px] hover:shadow-xl transition-shadow cursor-pointer">
              <div className="flex-1 text-right space-y-2">
                <p className="text-[20px] font-medium text-black">اسم البائع</p>
                <p className="text-[18px] text-black leading-normal">لوريم ايبسوم دولار سيت أميت دونك، أوت أليكو</p>
              </div>
              <div className="w-[60px] h-[60px] bg-[#D9D9D9] rounded-lg flex-shrink-0"></div>
            </Link>
          </div>

          {/* Right Column - Image and Product Info */}
          <div className="space-y-4 order-2 lg:order-1">
            {/* Main Image */}
            <div className="relative h-[610px] rounded-lg overflow-hidden">
              <img src={auctionFrame} alt="المزاد" className="w-full h-full object-cover" />
              <div className="absolute top-6 left-7 bg-[#D94B4B] text-white px-4 py-2 rounded-full flex items-center gap-2 font-medium">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span>مباشر</span>
              </div>
            </div>

            {/* Product Info */}
            <div className="bg-[#F5F2EB] rounded-lg shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] p-3 flex items-center justify-end gap-3 h-[103px]">
              <div className="flex-1 text-right space-y-2">
                <p className="text-[20px] font-medium text-black">اسم المنتج</p>
                <p className="text-[18px] text-black leading-normal">لوريم ايبسوم دولار سيت أميت دونك، أوت أليكو</p>
              </div>
              <div className="w-[60px] h-[60px] bg-[#D9D9D9] rounded-lg flex-shrink-0"></div>
            </div>
          </div>
        </div>

        {/* Bidders List */}
        <div className="bg-[#F5F2EB] rounded-lg shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] p-5 space-y-4">
          {bidders.map((bidder, index) => (
            <div
              key={index}
              className={`flex flex-col gap-4 p-3 rounded-lg ${
                bidder.isHighest 
                  ? "bg-[rgba(2,181,127,0.05)] border-r-4 border-[#02B57F]" 
                  : "bg-[rgba(28,28,40,0.02)] border-r-4 border-[#F0E8D5]"
              }`}
            >
              <div className="flex items-center justify-between">
               
                <div className="flex flex-row-reverse items-center gap-3">
                  {bidder.isHighest && (
                    <div className="bg-[rgba(2,181,127,0.05)] px-3 py-1 rounded-lg">
                      <span className="text-[12px] font-medium text-[#02B57F]">الأعلى حاليا</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <span className="text-[16px] font-medium text-black">{bidder.name}</span>
                    <FiUser className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[rgba(28,28,40,0.4)] text-[12px] font-medium">
                  <FiClock className="w-6 h-6" />
                  <span>{bidder.time}</span>
                </div>
              </div>
              <div className="flex items-center justify-start gap-1 text-[#9E7731]">
                <span className="text-[16px]">جنيه مصري</span>
                <span className="text-[20px] font-bold">{bidder.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveAuction;

