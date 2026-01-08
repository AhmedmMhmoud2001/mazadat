const ToggleSwitch = ({ defaultChecked }) => {
  return (
    <label className="inline-flex cursor-pointer items-center">
      <input type="checkbox" className="sr-only peer" defaultChecked={defaultChecked} />
      <span className="relative h-6 w-11 rounded-full bg-line transition peer-checked:bg-gold">
        <span className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white transition peer-checked:-translate-x-5" />
      </span>
    </label>
  );
};

export default ToggleSwitch;
