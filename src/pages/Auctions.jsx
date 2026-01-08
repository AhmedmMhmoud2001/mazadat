import { useState } from "react";
import AuctionCard from "../components/AuctionCard";
import SectionTitle from "../components/SectionTitle";

const filters = [
  { key: "live", label: "مباشر" },
  { key: "upcoming", label: "قادمة" },
  { key: "ended", label: "منتهية" },
];

const auctions = [
  {
    id: 1,
    title: "اسم المنتج",
    category: "سيارات",
    location: "أبو ظبي",
    price: "17,000,000 جنيه مصري",
    date: "01:25:20",
    status: { key: "live", label: "مباشر" },
    cta: "شارك",
  },
  {
    id: 2,
    title: "اسم المنتج",
    category: "سيارات",
    location: "أبو ظبي",
    price: "17,000,000 جنيه مصري",
    date: "15 فبراير 2024",
    status: { key: "upcoming", label: "قادم" },
    cta: "التفاصيل",
  },
  {
    id: 3,
    title: "اسم المنتج",
    category: "سيارات",
    location: "أبو ظبي",
    price: "17,000,000 جنيه مصري",
    date: "15 فبراير 2024",
    status: { key: "upcoming", label: "قادم" },
    cta: "التفاصيل",
  },
  {
    id: 4,
    title: "اسم المنتج",
    category: "سيارات",
    location: "أبو ظبي",
    price: "17,000,000 جنيه مصري",
    date: "00:45:10",
    status: { key: "live", label: "مباشر" },
    cta: "شارك",
  },
  {
    id: 5,
    title: "اسم المنتج",
    category: "سيارات",
    location: "أبو ظبي",
    price: "17,000,000 جنيه مصري",
    date: "15 فبراير 2024",
    status: { key: "ended", label: "منتهي" },
    cta: "التفاصيل",
  },
  {
    id: 6,
    title: "اسم المنتج",
    category: "سيارات",
    location: "أبو ظبي",
    price: "17,000,000 جنيه مصري",
    date: "15 فبراير 2024",
    status: { key: "upcoming", label: "قادم" },
    cta: "التفاصيل",
  },
];

const Auctions = () => {
  const [activeFilter, setActiveFilter] = useState("live");
  const filteredAuctions = auctions.filter(
    (auction) => auction.status.key === activeFilter
  );

  return (
    <section className="mx-auto max-w-6xl px-4 space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SectionTitle title="المزادات" subtitle="تصفّح المزادات حسب الحالة." />
        <button className="btn-outline">ترتيب حسب</button>
      </div>

      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter.key}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              activeFilter === filter.key
                ? "bg-ink text-white"
                : "bg-white/60 text-ink"
            }`}
            onClick={() => setActiveFilter(filter.key)}
            type="button"
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {filteredAuctions.map((auction) => (
          <AuctionCard key={auction.id} {...auction} />
        ))}
      </div>
    </section>
  );
};

export default Auctions;
