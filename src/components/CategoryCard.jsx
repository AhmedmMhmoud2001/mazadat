const CategoryCard = ({ title, subtitle }) => {
  return (
    <div className="section-card p-5 flex flex-col gap-3">
      <div className="h-24 rounded-2xl bg-white/70" />
      <div>
        <h3 className="text-lg">{title}</h3>
        <p className="text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
