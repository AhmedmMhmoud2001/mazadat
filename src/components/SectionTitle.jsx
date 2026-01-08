const alignMap = {
  right: "text-right",
  center: "text-center",
  left: "text-left",
};

const SectionTitle = ({ title, subtitle, align = "right" }) => {
  return (
    <div className={alignMap[align]}>
      <h2 className="text-2xl sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2">{subtitle}</p> : null}
    </div>
  );
};

export default SectionTitle;
