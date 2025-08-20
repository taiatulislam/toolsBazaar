import React, { useState } from "react";
import ProductCard from "../../components/ProductCard";

import Featured1 from "../../assets/featured/featured-1.jpg";
import Featured2 from "../../assets/featured/featured-2.jpg";
import Featured3 from "../../assets/featured/featured-3.jpg";
import Featured4 from "../../assets/featured/featured-4.jpg";

import "./Shop.css";
import SectionBanner from "../../components/SectionBanner";
import Pagination from "../../components/Pagination";

const Shop = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <SectionBanner title={"Collection"} subTitle={"/ shop"} />
      <div className="flex mx-auto relative">
        {/* Sidebar Start */}
        <aside className="hidden md:block min-w-10 lg:min-w-96 h-[calc(100dvh-10px)] overflow-y-auto scrollbar-hide bg-white px-5 lg:px-10 pb-10">
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
        <main className="w-full px-2 md:px-10 pt-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[3%] h-[calc(100dvh-2rem)] overflow-y-auto scrollbar-hide">
            {products
              ?.slice(currentPage * 12 - 12, currentPage * 12)
              ?.map((product, index) => (
                <div key={index} className="pb-5">
                  <ProductCard item={product} />
                </div>
              ))}
          </div>
          <Pagination
            totalItems={60}
            itemsPerPage={12}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </main>
      </div>
    </>
  );
};

const products = [
  {
    title: "Cordless Drill Set",
    image: Featured1,
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
    image: Featured3,
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
    image: Featured4,
    price: "12.99",
    offer: { discount: "N/A" },
  },
  {
    title: "Precision Screwdriver Kit",
    image: Featured3,
    price: "17.49",
    offer: { discount: "8" },
  },
  {
    title: "Heavy Duty Work Gloves",
    image: Featured2,
    price: "11.99",
    offer: { discount: "12" },
  },
  {
    title: "Self-Leveling Laser",
    image: Featured1,
    price: "9.99",
    offer: { discount: "N/A" },
  },
  {
    title: "Foldable Workbench",
    image: Featured4,
    price: "49.99",
    offer: { discount: "18" },
  },
  {
    title: "LED Headlamp",
    image: Featured2,
    price: "7.99",
    offer: { discount: "30" },
  },
  {
    title: "Electric Screwdriver",
    image: Featured1,
    price: "22.99",
    offer: { discount: "N/A" },
  },
  {
    title: "Telescoping Ladder",
    image: Featured3,
    price: "69.99",
    offer: { discount: "22" },
  },
  {
    title: "Compact Heat Gun",
    image: Featured2,
    price: "19.99",
    offer: { discount: "7" },
  },
  {
    title: "Safety Goggles",
    image: Featured1,
    price: "5.49",
    offer: { discount: "9" },
  },
  {
    title: "Mini Socket Set",
    image: Featured3,
    price: "24.99",
    offer: { discount: "14" },
  },
  {
    title: "Wire Stripper Tool",
    image: Featured2,
    price: "8.99",
    offer: { discount: "N/A" },
  },
  {
    title: "Adjustable Wrench",
    image: Featured1,
    price: "15.99",
    offer: { discount: "11" },
  },
  {
    title: "Electric Sander",
    image: Featured3,
    price: "34.99",
    offer: { discount: "N/A" },
  },
  {
    title: "Measuring Tape",
    image: Featured2,
    price: "4.99",
    offer: { discount: "6" },
  },
  {
    title: "Portable Air Compressor",
    image: Featured1,
    price: "59.99",
    offer: { discount: "20" },
  },
  {
    title: "Hacksaw Set",
    image: Featured3,
    price: "13.99",
    offer: { discount: "10" },
  },
  {
    title: "Utility Knife",
    image: Featured2,
    price: "6.49",
    offer: { discount: "5" },
  },
  {
    title: "Rechargeable Flashlight",
    image: Featured1,
    price: "18.99",
    offer: { discount: "12" },
  },
  {
    title: "Ratchet Wrench Set",
    image: Featured3,
    price: "42.99",
    offer: { discount: "16" },
  },
  {
    title: "Cordless Angle Grinder",
    image: Featured2,
    price: "79.99",
    offer: { discount: "25" },
  },
  {
    title: "Caulking Gun",
    image: Featured1,
    price: "9.99",
    offer: { discount: "N/A" },
  },
  {
    title: "Steel Hammer",
    image: Featured3,
    price: "12.49",
    offer: { discount: "7" },
  },
  {
    title: "Tool Organizer Box",
    image: Featured2,
    price: "21.99",
    offer: { discount: "15" },
  },
  {
    title: "Drill Bit Set",
    image: Featured1,
    price: "27.99",
    offer: { discount: "13" },
  },
  {
    title: "Cordless Impact Wrench",
    image: Featured3,
    price: "89.99",
    offer: { discount: "30" },
  },
  {
    title: "Pry Bar Set",
    image: Featured2,
    price: "16.49",
    offer: { discount: "N/A" },
  },
  {
    title: "Welding Helmet",
    image: Featured1,
    price: "54.99",
    offer: { discount: "18" },
  },
  {
    title: "Claw Hammer",
    image: Featured3,
    price: "8.99",
    offer: { discount: "6" },
  },
  {
    title: "Paint Sprayer",
    image: Featured2,
    price: "74.99",
    offer: { discount: "22" },
  },
  {
    title: "Bench Grinder",
    image: Featured1,
    price: "64.99",
    offer: { discount: "20" },
  },
  {
    title: "Cordless Jigsaw",
    image: Featured3,
    price: "49.99",
    offer: { discount: "17" },
  },
  {
    title: "Work Apron",
    image: Featured2,
    price: "14.49",
    offer: { discount: "8" },
  },
  {
    title: "Pipe Wrench",
    image: Featured1,
    price: "19.99",
    offer: { discount: "10" },
  },
  {
    title: "Digital Caliper",
    image: Featured3,
    price: "23.99",
    offer: { discount: "12" },
  },
  {
    title: "Work Light",
    image: Featured2,
    price: "27.99",
    offer: { discount: "15" },
  },
  {
    title: "Circular Saw",
    image: Featured1,
    price: "69.99",
    offer: { discount: "25" },
  },
  {
    title: "Staple Gun",
    image: Featured3,
    price: "11.49",
    offer: { discount: "N/A" },
  },
  {
    title: "Hand Saw",
    image: Featured2,
    price: "7.99",
    offer: { discount: "6" },
  },
  {
    title: "Work Boots",
    image: Featured1,
    price: "44.99",
    offer: { discount: "15" },
  },
  {
    title: "Air Blower",
    image: Featured3,
    price: "39.99",
    offer: { discount: "19" },
  },
  {
    title: "Allen Key Set",
    image: Featured2,
    price: "13.49",
    offer: { discount: "9" },
  },
  {
    title: "Wood Chisel Set",
    image: Featured1,
    price: "18.49",
    offer: { discount: "11" },
  },
  {
    title: "Heat Resistant Gloves",
    image: Featured3,
    price: "15.99",
    offer: { discount: "N/A" },
  },
  {
    title: "Tool Belt",
    image: Featured2,
    price: "24.99",
    offer: { discount: "13" },
  },
  {
    title: "Cordless Nail Gun",
    image: Featured1,
    price: "84.99",
    offer: { discount: "28" },
  },
  {
    title: "Measuring Wheel",
    image: Featured3,
    price: "33.99",
    offer: { discount: "12" },
  },
  {
    title: "Lawn Mower",
    image: Featured2,
    price: "129.99",
    offer: { discount: "30" },
  },
  {
    title: "Electric Paint Mixer",
    image: Featured1,
    price: "26.99",
    offer: { discount: "N/A" },
  },
  {
    title: "Angle Finder",
    image: Featured3,
    price: "17.99",
    offer: { discount: "10" },
  },
  {
    title: "Cordless Chainsaw",
    image: Featured2,
    price: "99.99",
    offer: { discount: "27" },
  },
  {
    title: "Shop Vacuum Cleaner",
    image: Featured1,
    price: "59.99",
    offer: { discount: "22" },
  },
  {
    title: "Plier Set",
    image: Featured3,
    price: "14.99",
    offer: { discount: "9" },
  },
  {
    title: "Workbench Clamp",
    image: Featured2,
    price: "19.49",
    offer: { discount: "11" },
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
