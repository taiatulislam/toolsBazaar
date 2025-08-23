import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import "./Shop.css";
import SectionBanner from "../../components/SectionBanner";
import Pagination from "../../components/Pagination";

const Shop = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);

  console.log("selectedCategory", selectedCategory);

  const fetchProducts = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const response = await fetch("/products.json");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Failed to fetch products:", error);
      return [];
    }
  };

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };

    loadProducts();
  }, []);

  const filteredProducts = products.filter((p) => {
    const categoryMatch =
      selectedCategory.length === 0 || selectedCategory.includes(p.category);
    const brandMatch =
      selectedBrand.length === 0 || selectedBrand.includes(p.brand);
    return categoryMatch && brandMatch;
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand((prev) =>
      prev.includes(brand) ? prev.filter((c) => c !== brand) : [...prev, brand]
    );
  };

  if (loading)
    return (
      <div style={{ height: "80vh" }}>
        <div className="loader"></div>
      </div>
    );

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
            selectedItems={selectedCategory}
            handleChange={handleCategoryChange}
          />

          {/* Brand Filter */}
          <TypeFilter
            title="Filter by brands"
            data={brands}
            showAll={showAllBrands}
            setShowAll={setShowAllBrands}
            selectedItems={selectedBrand}
            handleChange={handleBrandChange}
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
            {filteredProducts
              ?.slice(currentPage * 12 - 12, currentPage * 12)
              ?.map((product, index) => (
                <div key={index} className="pb-5">
                  <ProductCard item={product} />
                </div>
              ))}
          </div>
          <Pagination
            totalItems={filteredProducts?.length}
            itemsPerPage={12}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </main>
      </div>
    </>
  );
};

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

const TypeFilter = ({
  title,
  data,
  showAll,
  setShowAll,
  selectedItems,
  handleChange,
}) => {
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
              checked={selectedItems.includes(item)}
              onChange={() => handleChange(item)}
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
