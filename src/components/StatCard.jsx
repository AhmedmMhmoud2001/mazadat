const StatCard = ({ value, label }) => {
  return (
    <div className="section-card p-6 text-center">
      <div className="text-2xl font-bold text-gold">{value}</div>
      <div className="text-sm text-muted mt-2">{label}</div>
    </div>
  );
};

export default StatCard;
