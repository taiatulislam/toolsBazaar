import { Link } from "react-router";
import ProductCard from "../ProductCard";

import Featured1 from "../../assets/featured/featured-1.jpg";
import Featured2 from "../../assets/featured/featured-2.jpg";
import Featured3 from "../../assets/featured/featured-3.jpg";
import Featured4 from "../../assets/featured/featured-4.jpg";
import Heading from "../Heading";

const BestSeller = () => {
  return (
    <div className="mt-20 px-5">
      <div className="relative">
        <div className="flex flex-col items-center justify-center">
          <Heading title="Pick Our Best One" />
        </div>
        <Link to="/shop" className="absolute right-0 top-0 hidden md:block">
          <button className="bg-yellow-400 py-2 px-4 rounded-lg font-medium">
            Show All
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 my-10">
        {/* Product-Cards */}
        {data.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
      <Link to="/shop" className="hidden">
        <button className="bg-yellow-400 py-2 px-4 rounded-lg font-medium mx-auto mt-5 flex justify-center">
          Show All
        </button>
      </Link>
    </div>
  );
};

const data = [
  {
    title: "Digital Multimeter",
    image: Featured1,
    price: "29.99",
    offer: { discount: "10" },
  },
  {
    title: "Reflective Vest",
    image: Featured2,
    price: "14.99",
    offer: { discount: "15" },
  },
  {
    title: "Self-Leveling Laser",
    image: Featured3,
    price: "9.99",
    offer: { discount: "5" },
  },
  {
    title: "Hydraulic Car Jack",
    image: Featured4,
    price: "29.99",
    offer: { discount: "25" },
  },
];

export default BestSeller;
