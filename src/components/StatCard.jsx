const StatCard = ({ value, label }) => {
  return (
    <div className="text-center">
      <div className="text-5xl font-bold text-gold">{value}</div>
      <div className="text-sm  font-bold mt-2">{label}</div>
    </div>
  );
};

export default StatCard;
