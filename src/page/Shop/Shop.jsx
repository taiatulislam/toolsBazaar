import React, { useState } from "react";
import ProductCard from "../../components/ProductCard";

import Featured1 from "../../assets/featured/featured-1.jpg";
import Featured2 from "../../assets/featured/featured-2.jpg";
import Featured3 from "../../assets/featured/featured-3.jpg";
import Featured4 from "../../assets/featured/featured-4.jpg";

import "./Shop.css";
import SectionBanner from "../../components/SectionBanner";

const Shop = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllBrands, setShowAllBrands] = useState(false);

  return (
    <>
      <SectionBanner title={"Collection"} subTitle={"Shop / Products"} />
      <div className="flex mx-auto relative">
        {/* Sidebar Start */}
        <aside className="min-w-96 h-[calc(100dvh-100px)] overflow-y-auto scrollbar-hide bg-white px-10 pb-10">
          {/* Category Filter */}
          <TypeFilter
            title="Filter by category"
            data={categories}
            showAll={showAllCategories}
            setShowAll={setShowAllCategories}
          />

          {/* Brand Filter */}
          <TypeFilter
            title="Filter by brands"
            data={brands}
            showAll={showAllBrands}
            setShowAll={setShowAllBrands}
          />

          {/* Price Filter */}
          <div className="py-3">
            <h2 className="text-lg font-semibold text-gray-800 pb-2 border-b border-gray-200">
              Set Price Range
            </h2>

            <div className="space-y-1 my-2">
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="minPrice"
                  placeholder="Min"
                  className="w-full rounded-md border border-gray-300 py-2 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
                />
                <input
                  type="number"
                  id="maxPrice"
                  placeholder="Max"
                  className="w-full rounded-md border border-gray-300 py-2 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
                />
              </div>
            </div>

            <button className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-md py-2 px-4">
              Apply
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="w-full h-[calc(100dvh-6rem)] overflow-y-auto scrollbar-hide px-10 pt-5 grid grid-cols-4 gap-[3%]">
          {products?.map((product, index) => (
            <div key={index} className="pb-5">
              <ProductCard item={product} />
            </div>
          ))}
        </main>
      </div>
    </>
  );
};

const products = [
  {
    title: "Cordless Drill Set",
    image: Featured3,
    price: "39.99",
    offer: { discount: "20" },
  },
  {
    title: "Hydraulic Car Jack",
    image: Featured4,
    price: "29.99",
    offer: { discount: "N/A" },
  },
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
    title: "Magnetic Tool Holder",
    image: Featured1,
    price: "12.99",
    offer: { discount: "N/A" },
  },
  {
    title: "Precision Screwdriver Kit",
    image: Featured2,
    price: "17.49",
    offer: { discount: "8" },
  },
  {
    title: "Heavy Duty Work Gloves",
    image: Featured4,
    price: "11.99",
    offer: { discount: "12" },
  },
  {
    title: "Self-Leveling Laser",
    image: Featured3,
    price: "9.99",
    offer: { discount: "N/A" },
  },
  {
    title: "Foldable Workbench",
    image: Featured2,
    price: "49.99",
    offer: { discount: "18" },
  },
  {
    title: "LED Headlamp",
    image: Featured1,
    price: "7.99",
    offer: { discount: "30" },
  },
  {
    title: "Electric Screwdriver",
    image: Featured3,
    price: "22.99",
    offer: { discount: "N/A" },
  },
  {
    title: "Telescoping Ladder",
    image: Featured4,
    price: "69.99",
    offer: { discount: "22" },
  },
  {
    title: "Compact Heat Gun",
    image: Featured1,
    price: "19.99",
    offer: { discount: "7" },
  },
  {
    title: "Safety Goggles",
    image: Featured2,
    price: "5.49",
    offer: { discount: "9" },
  },
  {
    title: "Mini Socket Set",
    image: Featured3,
    price: "24.99",
    offer: { discount: "14" },
  },
];

const categories = [
  "Power Tools",
  "Hand Tools",
  "Safety Gear",
  "Measuring Tools",
  "Automotive Tools",
  "Electrical Tools",
  "Gardening Tools",
  "Plumbing Tools",
  "Cutting Tools",
  "Construction Tools",
  "Fastening Tools",
  "Painting Tools",
  "Welding Tools",
  "Ladders & Scaffolding",
  "Tool Storage",
];

const brands = [
  "Bosch",
  "Makita",
  "DeWalt",
  "Stanley",
  "Milwaukee",
  "Black+Decker",
  "Craftsman",
  "Hitachi",
  "Hilti",
  "Klein Tools",
  "Ryobi",
  "Metabo",
  "Dremel",
  "RIDGID",
  "Tacklife",
];

const TypeFilter = ({ title, data, showAll, setShowAll }) => {
  return (
    <div className="py-3 px-4">
      <div className="flex items-center">
        <h2 className="text-lg font-semibold text-gray-800 w-full pb-2 border-b border-gray-200">
          {title}
        </h2>
      </div>

      <div className="flex flex-col gap-3 my-3">
        {data?.slice(0, showAll ? data.length : 5).map((item, index) => (
          <label key={index} className="inline-flex items-center">
            <input
              id={item}
              type="checkbox"
              className="form-checkbox min-h-5 min-w-5"
              // onChange={() => handleCategoryFilter(item)}
            />
            <span className="text-sm ml-2 text-gray-700">{item}</span>
          </label>
        ))}
      </div>

      {data?.length > 5 && (
        <button
          className="text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "- View Less" : "+ View More"}
        </button>
      )}
    </div>
  );
};

export default Shop;
