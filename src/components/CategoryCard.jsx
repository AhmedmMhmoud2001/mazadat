import { Link } from "react-router-dom";
import heroBg from "../assets/closeup-shot-vehicle-dry-field-cloudy-sky 1.png";

const CategoryCard = ({ title, subtitle, img }) => {
  return (
    <Link 
      to="/auctions"
      className="relative section-card p-5 flex flex-col gap-3 h-[200px] cursor-pointer hover:shadow-lg transition-shadow"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div>
        <img className="absolute bottom-0 left-0 z-10 w-20" src={img} alt="" />
        <h3 className="text-2xl">{title}</h3>
        <p className="text-lg">{subtitle}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
