import { Link } from "react-router";
import ProductCard from "../ProductCard";

import Featured1 from "../../assets/featured/featured-1.jpg";
import Featured2 from "../../assets/featured/featured-2.jpg";
import Featured3 from "../../assets/featured/featured-3.jpg";
import Featured4 from "../../assets/featured/featured-4.jpg";

const BestSeller = () => {
  return (
    <div className="mt-20 px-5">
      <div className="relative">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold montserrat text-center mb-3">
            Pick Our Best One
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="12"
            fill="#fdc62e"
            version="1.1"
            viewBox="0 139.474 290.658 11.711"
            xmlSpace="preserve"
          >
            <path fill="#fdc62e" d="M0 139.474H290.658V151.185H0z"></path>
          </svg>
        </div>
        <Link to="/shop" className="absolute right-0 top-0 block">
          <button className="bg-yellow-400 py-2 px-4 rounded-lg font-medium">
            Show All
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-5 my-10">
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
