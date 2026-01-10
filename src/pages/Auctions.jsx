import { useState } from "react";
import AuctionCard from "../components/AuctionCard";
import SectionTitle from "../components/SectionTitle";
import { BsSortDown } from "react-icons/bs";

const filters = [

  { key: "live", label: "مباشر" },
  { key: "upcoming", label: "قادمة" },
  { key: "ended", label: "منتهية" },
];

const generateAuctions = () => {
  const items = [];
  // Live Auctions (12 items)
  for (let i = 1; i <= 12; i++) {
    items.push({
      id: `live-${i}`,
      title: "اسم المنتج",
      category: "سيارات",
      location: "أبو ظبي",
      price: "17,000,000 جنيه مصري",
      date: "01:25:20",
      status: { key: "live", label: "مباشر" },
      cta: "شارك",
    });
  }
  // Upcoming Auctions (12 items)
  for (let i = 1; i <= 12; i++) {
    items.push({
      id: `upcoming-${i}`,
      title: "اسم المنتج",
      category: "سيارات",
      location: "أبو ظبي",
      price: "17,000,000 جنيه مصري",
      date: "15 فبراير 2024",
      status: { key: "upcoming", label: "قادم" },
      cta: "التفاصيل",
    });
  }
  // Ended Auctions (12 items)
  for (let i = 1; i <= 12; i++) {
    items.push({
      id: `ended-${i}`,
      title: "اسم المنتج",
      category: "سيارات",
      location: "أبو ظبي",
      price: "Sold",
      date: "Ended",
      status: { key: "ended", label: "منتهي" },
      cta: "التفاصيل",
    });
  }
  return items;
};

const allAuctions = generateAuctions();
const ITEMS_PER_PAGE = 9;

const Auctions = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter Logic
  const filteredAuctions =
    activeFilter === "all"
      ? allAuctions
      : allAuctions.filter((a) => a.status.key === activeFilter);

  // Pagination Logic
  const totalPages = Math.ceil(filteredAuctions.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentAuctions = filteredAuctions.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#fcfbf9] min-h-screen pt-32 pb-20">
      <section className="mx-auto max-w-6xl px-4 space-y-8">

        {/* Header: Sort & Filters */}
        <div className="flex flex-col-reverse gap-4 md:flex-row md:items-center md:justify-between  p-2 rounded-xl">
          {/* Filters (Right) */}
          <div className="flex items-center gap-1 self-end md:self-auto overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => {
                  setActiveFilter(filter.key);
                  setCurrentPage(1);
                }}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition whitespace-nowrap ${activeFilter === filter.key
                  ? "bg-ink text-white"
                  : "text-ink hover:bg-black/5"
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          {/* Sort Button (Left) */}
          <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-sm font-bold text-ink hover:bg-gray-50 transition border border-[#E5E0D5]">
            <BsSortDown size={18} />
            ترتيب حسب
          </button>


        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentAuctions.map((auction) => (
            <AuctionCard key={auction.id} {...auction} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12 text-lg font-bold">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg transition ${currentPage === page
                  ? "bg-[#C5A572] text-white"
                  : "text-ink hover:bg-black/5"
                  }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Auctions;
