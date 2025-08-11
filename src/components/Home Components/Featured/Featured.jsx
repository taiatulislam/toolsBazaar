import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBag2Line } from "react-icons/ri";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Featured1 from "../../../assets/featured/featured-1.jpg";
import Featured2 from "../../../assets/featured/featured-2.jpg";
import Featured3 from "../../../assets/featured/featured-3.jpg";
import Featured4 from "../../../assets/featured/featured-4.jpg";

import "./Featured.css";

const Featured = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
  };

  const selectedProduct = featuredProducts?.[currentIndex];

  return (
    <div className="my-20 px-5">
      <div className="flex flex-col items-center justify-center mb-10">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold montserrat text-center mb-3">
          Featured
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

      <div className="flex flex-row  gap-5 rounded-lg p-5 border-2 border-gray-200">
        {/* Left: Image Carousel */}
        <div className="text-center w-1/2 flex items-center justify-center">
          <Slider {...settings} className="w-full h-full">
            {featuredProducts?.map((product, index) => (
              <div key={index}>
                <img
                  src={product?.image}
                  alt={product?.title}
                  className="object-contain h-[300px] lg:h-[400px] w-full"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Right: Product Info */}
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl lg:text-3xl font-bold flex-wrap">
            {selectedProduct?.title}
          </h2>

          <p className="text-sm lg:text-base text-gray-500 my-5">
            {selectedProduct?.description}
          </p>

          <h2 className="text-3xl font-bold my-1">
            $ {selectedProduct?.price}
          </h2>

          <div className="flex flex-col gap-3 my-5">
            <button className="bg-yellow-400 py-2 px-5 flex items-center gap-2 cursor-pointer">
              <RiShoppingBag2Line className="text-xl" /> Add to cart
            </button>
            <button className="text-gray-500 py-2 px-5 flex items-center gap-2 border-2 border-yellow-400 cursor-pointer">
              <FaRegHeart />
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-4 top-[50%] transform -translate-y-1/2 cursor-pointer z-10 bg-white rounded-full p-2 shadow"
    onClick={onClick}
  >
    <MdOutlineKeyboardDoubleArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-4 top-[50%] transform -translate-y-1/2 cursor-pointer z-10 bg-white rounded-full p-2 shadow"
    onClick={onClick}
  >
    <MdOutlineKeyboardDoubleArrowLeft />
  </div>
);

const featuredProducts = [
  {
    id: 1,
    title: "Digital Multimeter Pro X200",
    image: Featured1,
    description:
      "Accurate digital multimeter for voltage, current, resistance, continuity, and diode testing.",
    features: [
      "LCD Backlight Display",
      "Auto/Manual Range",
      "Overload Protection",
      "Battery Included",
    ],
    category: "Electrical Equipment",
    price: 29.99,
    stock: "In Stock",
  },
  {
    id: 2,
    title: "High Visibility Reflective Vest",
    image: Featured2,
    description:
      "Safety vest with 360° reflectivity for day and night visibility.",
    features: [
      "Lightweight Mesh Fabric",
      "4 Front Pockets",
      "Zipper Closure",
      "ANSI Class 2 Compliant",
    ],
    category: "Safety Equipment",
    price: 12.75,
    stock: "In Stock",
  },
  {
    id: 3,
    title: "360° Self-Leveling Laser Level",
    image: Featured3,
    description:
      "Bright green beam laser for construction layout and leveling tasks.",
    features: [
      "3-Beam Lines",
      "Rechargeable Battery",
      "Magnetic Base",
      "IP54 Waterproof",
    ],
    category: "Construction Equipment",
    price: 99.0,
    stock: "In Stock",
  },
  {
    id: 4,
    title: "Hydraulic Car Jack 2 Ton",
    image: Featured4,
    description:
      "Strong, compact jack ideal for home garages and roadside emergencies.",
    features: [
      "Steel Construction",
      'Lift Range: 5"–13"',
      "Bypass Valve",
      "Carry Handle",
    ],
    category: "Automotive Tools",
    price: 48.0,
    stock: "In Stock",
  },
];
export default Featured;
