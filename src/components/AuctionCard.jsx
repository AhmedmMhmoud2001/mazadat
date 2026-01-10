import { FiCalendar, FiClock, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import StatusPill from "./StatusPill";
import auctionFrame from "../assets/Frame 1171276970.png";

const AuctionCard = ({
  title,
  category,
  location,
  price,
  date,
  status,
  cta,
}) => {
  const isLive = status?.key === "live";
  const isUpcoming = status?.key === "upcoming";

  return (
    <div className="bg-white border border-[#EBEBEB] rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-56 group cursor-pointer">
        <img
          src={auctionFrame}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        {status ? (
          <div className="absolute top-4 right-4">
            <StatusPill status={status.key} label={status.label} />
          </div>
        ) : null}
      </div>

      <div className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg text-[#1D1D1D]">{title}</span>
          <span className="text-sm text-[#828282]">{category}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-[#828282]">
          <FiMapPin className="text-[#969696]" />
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-[#828282]">يبدأ في:</span>
          <div className="flex items-center gap-2 text-[#1D1D1D] font-medium">
            <FiCalendar className="text-[#1D1D1D]" />
            <span>{date}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-[#828282]">{price.includes('يبدأ') ? 'يبدأ من' : 'السعر الحالي'}</span>
          {/* Note: The label might need adjustment based on exact text in image */}
        </div>
        <div className="text-xl font-bold text-[#1D1D1D]">{price}</div>

        <div className="flex items-center gap-3 pt-2">
          {isUpcoming ? (
            <>
              <button type="button" className="flex-1 py-2.5 rounded-xl border border-[#D0D0D0] text-[#1D1D1D] font-medium hover:bg-gray-50 transition-colors">
                تذكير
              </button>
              <Link to="/auctions/1" className="flex-1 py-2.5 rounded-xl bg-[#242424] text-white font-medium hover:bg-[#333] transition-colors text-center">
                {cta}
              </Link>
            </>
          ) : (
            <Link to="/auctions/1" className="flex-1 py-2.5 rounded-xl bg-[#242424] text-white font-medium hover:bg-[#333] transition-colors text-center">
              {cta}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;
