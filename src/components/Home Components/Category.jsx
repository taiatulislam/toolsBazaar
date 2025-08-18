import Image1 from "../../assets/category/automotive-tools.png";
import Image2 from "../../assets/category/garden-tools.png";
import Image3 from "../../assets/category/hand-tools.png";
import Image4 from "../../assets/category/electrical-tools.png";
import Image5 from "../../assets/category/safety-equipments.png";
import Image6 from "../../assets/category/yellow-drill.png";
import { Link, useNavigate } from "react-router";
import Button from "../Button";

const Category = () => {
  return (
    <div className="px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* 1st col */}
        <CategoryCard
          title={"Automotive Tools"}
          image={Image1}
          bgcolor={"#000000"}
        />
        {/* 2nd col */}
        <CategoryCard
          title={"Gardening Tools"}
          image={Image2}
          bgcolor={"#fdc62e"}
        />
        {/* 3rd col */}
        <div className="col-span-1 md:col-span-2">
          <CategoryCard
            title={"Hand Tools"}
            image={Image3}
            bgcolor={"#f42c37"}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {/* 4th col */}
        <div className="col-span-1 md:col-span-2">
          <CategoryCard
            title={"Electrical Equipment"}
            image={Image4}
            bgcolor={"#bbbbbb"}
          />
        </div>
        {/* 5th col */}
        <CategoryCard
          title={"Safety Equipment"}
          image={Image5}
          bgcolor={"#2dcc6f"}
        />
        {/* 6th col */}
        <CategoryCard
          title={"Construction Equipment"}
          image={Image6}
          bgcolor={"#1376f4"}
        />
      </div>
    </div>
  );
};

const CategoryCard = ({ title, image, bgcolor }) => {
  const navigate = useNavigate();
  return (
    <div
      className="py-10 pl-5 text-white rounded-xl relative h-[320px] flex items-end hover:scale-105 duration-300 overflow-hidden"
      style={{
        background: `linear-gradient(to bottom right, ${bgcolor}FF, ${bgcolor}B3)`,
      }}
    >
      <div className="relative z-10">
        <p>Enjoy</p>
        <p className="text-2xl font-semibold my-[2px]">With</p>
        <p className="text-5xl font-bold opacity-40 mb-2">{title}</p>
        <Button name="Browse" handleButton={() => navigate("/shop")} />
      </div>

      <img
        src={image}
        alt={title}
        className="absolute bottom-0 right-0 h-full z-0"
      />
    </div>
  );
};

export default Category;
