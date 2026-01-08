import StatusPill from "./StatusPill";

const AuctionCard = ({
  title,
  category,
  location,
  price,
  date,
  status,
  cta,
}) => {
  return (
    <div className="bg-white/70 border border-line rounded-2xl shadow-lift overflow-hidden">
      <div
        className="relative h-40"
        style={{
          background:
            "linear-gradient(135deg, #e8dfcf 0%, #f7f0e6 55%, #eee6d9 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),_transparent_65%)]" />
        {status ? (
          <div className="absolute top-3 right-3">
            <StatusPill status={status.key} label={status.label} />
          </div>
        ) : null}
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between text-xs text-muted">
          <span>{category}</span>
          <span>{location}</span>
        </div>
        <h3 className="text-base font-semibold text-ink">{title}</h3>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gold font-semibold">{price}</span>
          <span className="text-muted">{date}</span>
        </div>
        <button className="btn-outline w-full">{cta}</button>
      </div>
    </div>
  );
};

export default AuctionCard;
