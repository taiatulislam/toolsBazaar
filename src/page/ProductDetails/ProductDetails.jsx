import { FaRegHeart } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { RiShoppingBag2Line } from "react-icons/ri";
import Slider from "react-slick";
import image1 from "../../assets/featured/featured-1.jpg";
import "./Table.css";

const ProductDetails = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div>
      <div className="container mx-auto my-10 px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row">
          {/* First half */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="text-center max-w-[300px] md:max-w-lg">
              <Slider {...settings}>
                {product?.image?.map((image, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-center"
                    >
                      <img src={image} alt="tools" />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>

          {/* Second half */}
          <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
            <h2 className="text-3xl font-semibold">{product?.title}</h2>

            <hr className="my-3" />

            <h2 className="text-yellow-500 text-2xl font-medium my-1">
              $ {product?.price}
              <span className="pl-1 text-xs text-black">(Tax included)</span>
            </h2>
            <h2
              className={`${
                product?.quantity > 0 ? "text-green-500" : "text-red-500"
              } `}
            >
              {product?.quantity > 0
                ? `In Stock (${product?.quantity})`
                : "Stock out"}
            </h2>

            {/* Color */}
            <div className="flex items-center gap-5 mt-3">
              <h3 className="text-lg font-semibold">Color</h3>
              <div className="flex items-center gap-4">
                {product?.color?.map((color) => (
                  <label
                    key={color}
                    className="border-2 border-gray-400 rounded-full py-1 px-3 text-sm flex items-center"
                  >
                    <input
                      type="radio"
                      name="color"
                      value={color}
                      className="mr-1 text-start"
                    />
                    {color}
                  </label>
                ))}
              </div>
            </div>

            <hr className="my-3" />

            <p className="text-gray-500 mb-3">{product?.description}</p>
            <table>
              <thead>
                <tr>
                  <th className="text-center">No</th>
                  <th>Name</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {/* 1 */}
                <tr>
                  <td className="text-center">1</td>
                  <td>Brand</td>
                  <td>{product?.brand}</td>
                </tr>
                {/* 2 */}
                <tr>
                  <td className="text-center">2</td>
                  <td>Model</td>
                  <td>{product?.model}</td>
                </tr>
                {/* 3 */}
                <tr>
                  <td className="text-center">3</td>
                  <td>Material</td>
                  <td>{product?.material}</td>
                </tr>
                {/* 4 */}
                <tr>
                  <td className="text-center">4</td>
                  <td>Weight</td>
                  <td>{product?.weight} gm</td>
                </tr>
                {/* 5 */}
                <tr>
                  <td className="text-center">5</td>
                  <td>Country of Origin</td>
                  <td>{product?.country_of_origin}</td>
                </tr>
                {/* 6 */}
                <tr>
                  <td className="text-center">6</td>
                  <td>Manufacturer</td>
                  <td>{product?.manufacturer}</td>
                </tr>
              </tbody>
            </table>

            <hr className="my-3" />

            <div className="flex flex-row gap-5 my-5">
              <button className="bg-yellow-400 p-2 px-5 flex items-center gap-2">
                <RiShoppingBag2Line className="text-xl" /> Add to cart
              </button>
              <button className="text-gray-500 p-2 px-5 flex items-center gap-2 border-2 border-yellow-400">
                <FaRegHeart />
                Add to Wishlist
              </button>
            </div>

            <hr className="my-3" />

            <div
              className={
                product?.return_available
                  ? "border-2 border-gray-100 p-3 flex items-center gap-4"
                  : "hidden"
              }
            >
              <FaArrowRightArrowLeft />
              <p>{product?.return_policy}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const product = {
  image: [image1, image1],
  title: "Cordless Drill Set – 20V Max Lithium-Ion",
  price: 59.99,
  color: ["Black", "Yellow"],
  description:
    "This 20V cordless drill set is a powerful and lightweight tool ideal for DIY tasks, home repairs, and woodwork. Includes a fast-charging battery, 18+1 torque settings, LED light, and multiple drill bits for versatile use.",
  brand: "PowerPro Tools",
  model: "PP-DRILL-20V-LI",
  material: "ABS Plastic, Metal Alloy",
  weight: "2.25KG",
  country_of_origin: "China",
  manufacturer: "Shenzhen PowerPro Industrial Co., Ltd.",
  return_available: true,
  return_policy:
    "Eligible for return within 14 days of delivery. Item must be unused and in original packaging.",
};

export default ProductDetails;
