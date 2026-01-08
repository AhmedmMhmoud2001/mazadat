const Tabs = ({ tabs, active, onChange }) => {
  return (
    <div className="flex flex-wrap gap-6 border-b border-line">
      {tabs.map((tab) => {
        const isActive = tab.key === active;
        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => onChange(tab.key)}
            className={`tab-item ${isActive ? "tab-item-active" : ""}`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
