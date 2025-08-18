import { Link } from "react-router";
import Brand1 from "../assets/brand/br-1.png";
import Brand2 from "../assets/brand/br-2.png";
import Brand3 from "../assets/brand/br-3.png";
import Brand4 from "../assets/brand/br-4.png";
import Brand5 from "../assets/brand/br-5.png";
import Heading from "./Heading";

export default function Brands() {
  return (
    <div className="overflow-hidden py-10">
      <div className="flex flex-col items-center justify-center mb-10">
        <Heading title="Shop by Brands" />
      </div>

      <div className="relative w-full">
        <div className="flex gap-10 animate-marquee whitespace-nowrap">
          {brands.map((brand, index) => (
            <div key={index} className="min-w-[200px]">
              <Link state={{ value: brand?.brandName, type: "brand" }} to="/">
                <div className="border border-amber-400 p-5 rounded-lg shadow-md bg-white h-full flex flex-col justify-between">
                  <img
                    className="w-14 mx-auto"
                    src={brand?.brandImage}
                    alt={brand?.brandName}
                  />
                  <p className="text-red-600 text-center font-semibold text-lg pt-2">
                    {brand?.brandName}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const brands = [
  { brandName: "Golden", brandImage: Brand1 },
  { brandName: "Jack Roller", brandImage: Brand2 },
  { brandName: "Sweety", brandImage: Brand3 },
  { brandName: "Mighty Furnitures", brandImage: Brand4 },
  { brandName: "Fastlane", brandImage: Brand5 },
  { brandName: "Golden", brandImage: Brand1 },
  { brandName: "Jack Roller", brandImage: Brand2 },
  { brandName: "Sweety", brandImage: Brand3 },
  { brandName: "Mighty Furnitures", brandImage: Brand4 },
  { brandName: "Fastlane", brandImage: Brand5 },
];
