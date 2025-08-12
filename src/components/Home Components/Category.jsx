import Image1 from "../../assets/category/automotive-tools.png";
import Image2 from "../../assets/category/garden-tools.png";
import Image3 from "../../assets/category/hand-tools.png";
import Image4 from "../../assets/category/electrical-tools.png";
import Image5 from "../../assets/category/safety-equipments.png";
import Image6 from "../../assets/category/yellow-drill.png";
import { Link } from "react-router";

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
  return (
    <div
      className="py-10 pl-5 text-white rounded-xl relative h-[320px] flex items-end hover:scale-105 duration-300 overflow-hidden"
      style={{
        background: `linear-gradient(to bottom right, ${bgcolor}FF, ${bgcolor}B3)`,
      }}
    >
      <div>
        <p>Enjoy</p>
        <p className="text-2xl font-semibold my-[2px]">With</p>
        <p className="text-5xl font-bold opacity-30 mb-2">{title}</p>
        <Link
          state={{ value: "Automotive Tools", type: "category" }}
          to="/shop"
        >
          <button
            className={`bg-[#fdc62e] text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-1`}
          >
            Browse
          </button>
        </Link>
      </div>
      <img
        src={image}
        alt={title}
        className="absolute bottom-0 right-0 h-full"
      />
    </div>
  );
};

export default Category;
