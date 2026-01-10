import { FiCalendar, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import auctionFrame from "../assets/Frame 1171276970.png";

const AuctionCard = ({
  title,
  category,
  location,
  date,
  status,
}) => {
  return (
    <div className=" rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow border border-[#E5E0D5]">
      {/* Image Container with Status Badge */}
      <div className="relative h-48 rounded-xl overflow-hidden mb-4">
        <img
          src={auctionFrame}
          alt={title}
          className="h-full w-full object-cover sepia-[0.25] opacity-90"
        />
        {/* Status Badge */}
        <div className="absolute top-3 right-3 bg-[#F3F1EB] text-ink font-bold text-xs px-3 py-1 rounded-md shadow-sm">
          {status?.label || "قادم"}
        </div>
      </div>

      {/* Content */}
      <div className="px-2 pb-2 space-y-4">
        {/* Title and Category Row */}
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="font-bold text-xl text-ink">{title}</h3>
            <div className="flex items-center gap-1 text-sm text-[#7D7D7D]">
              <FiMapPin size={14} />
              <span>{location}</span>
            </div>
          </div>
          <span className="text-[#333] font-semibold">{category}</span>
        </div>

        {/* Date Row */}
        <div className="flex justify-between items-center text-sm text-[#333] font-medium pt-2">
          <div className="flex items-center gap-2">
            <FiCalendar size={16} />
            <span>يبدأ في: {date}</span>
          </div>
          <span>7:00 مساءً</span>
        </div>

        {/* Buttons Row */}
        <div className="flex items-center gap-3 pt-4">
          <Link to="/auctions/1" className="flex-[2] py-2 rounded-lg bg-ink text-white font-bold hover:bg-ink/90 transition-colors text-center">
            التفاصيل
          </Link>
          <button className="flex-1 py-2 rounded-lg border border-[#7D7D7D] text-[#333] font-bold hover:bg-black/5 transition-colors">
            تذكير
          </button>

        </div>
      </div>
    </div>
  );
};

export default AuctionCard;
