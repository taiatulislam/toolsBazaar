import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import "./Shop.css";
import SectionBanner from "../../components/SectionBanner";
import Pagination from "../../components/Pagination";
import { FaFilter } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Shop = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [openFilter, setOpenFilter] = useState(false);

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

    const discountedPrice =
      p.offer?.discount && p.offer.discount !== "N/A"
        ? p.price - (p.price * parseInt(p.offer.discount)) / 100
        : p.price;

    const priceMatch =
      (!minPrice || discountedPrice >= Number(minPrice)) &&
      (!maxPrice || discountedPrice <= Number(maxPrice));

    return categoryMatch && brandMatch && priceMatch;
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

  const toggleDropdown = () => {
    setOpenFilter((prev) => !prev);
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
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full rounded-md border border-gray-300 py-2 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
                />
                <input
                  type="number"
                  id="maxPrice"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full rounded-md border border-gray-300 py-2 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
                />
              </div>
            </div>
          </div>
        </aside>

        <div
          onClick={toggleDropdown}
          className="block md:hidden absolute right-2 top-10 border border-gray-200 z-10 shadow-2xl p-2 rounded-lg cursor-pointer bg-white"
        >
          {openFilter ? (
            <IoIosCloseCircleOutline size={18} />
          ) : (
            <FaFilter size={18} />
          )}
        </div>

        {/* Dropdown Content */}
        {openFilter && (
          <div className="absolute right-2 top-20 w-48 bg-white border border-gray-200 shadow-lg rounded-lg p-1 z-20 animate-fadeIn">
            <aside className="h-[300px] overflow-y-auto scrollbar-hide bg-white">
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
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      className="w-full rounded-md border border-gray-300 py-2 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
                    />
                    <input
                      type="number"
                      id="maxPrice"
                      placeholder="Max"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className="w-full rounded-md border border-gray-300 py-2 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
                    />
                  </div>
                </div>
              </div>
            </aside>
          </div>
        )}

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
