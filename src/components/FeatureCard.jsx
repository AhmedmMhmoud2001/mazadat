const FeatureCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="section-card p-6 flex flex-col gap-4">
      <div className="h-12 w-12 rounded-full bg-white/80 flex items-center justify-center text-gold">
        <Icon className="text-2xl" />
      </div>
      <div>
        <h3 className="text-lg mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
