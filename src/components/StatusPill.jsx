const statusStyles = {
  live: "bg-danger text-white",
  upcoming: "bg-gold text-white",
  ended: "bg-ink/70 text-white",
  win: "bg-success text-white",
  lost: "bg-danger text-white",
  pending: "bg-gold/15 text-gold",
};

const StatusPill = ({ status, label }) => {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[status] || "bg-ink/10 text-ink"}`}
    >
      {label}
    </span>
  );
};

export default StatusPill;
