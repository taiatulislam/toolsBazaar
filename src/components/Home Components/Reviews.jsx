import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Jone Copper",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Working with Jone was a game-changer for our project! His keen eye for detail and creative approach to product design elevated our concept beyond our expectations. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sophia Smith",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Sophia delivered clean, scalable code with precision. Her expertise in React and Tailwind significantly boosted our project's performance and usability.",
    rating: 4,
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    review:
      "Michael ensured smooth workflow management and timely delivery of milestones. His leadership and communication skills are exceptional.",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Graphic Designer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Emily's designs are always modern, vibrant, and user-friendly. She has an amazing ability to transform ideas into stunning visuals.",
    rating: 5,
  },
  {
    id: 5,
    name: "David Wilson",
    role: "Backend Developer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    review:
      "David is a brilliant backend engineer. His API integrations are smooth, efficient, and well-documented, making collaboration seamless.",
    rating: 4,
  },
];

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute z-10 left-0 top-2/3 -translate-y-1/2 bg-white shadow-md p-3 rounded-full border text-blue-600 hover:bg-blue-50"
  >
    <FaArrowLeft size={18} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-2/3 -translate-y-1/2 bg-white shadow-md p-3 rounded-full border text-blue-600 hover:bg-blue-50"
  >
    <FaArrowRight size={18} />
  </button>
);

export default function Reviews() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const colors = [
    "bg-red-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
    "bg-indigo-500",
    "bg-teal-500",
    "bg-amber-500",
  ];

  return (
    <div className="max-w-6xl py-5 md:py-14 mx-auto px-5">
      <div className="flex flex-col items-center justify-center mt-10 mb-2">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold montserrat text-center mb-3 text-nowrap">
          What Our Customers Are Saying
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

      <Slider {...settings}>
        {reviews.map(({ id, name, role, image, review, rating }) => {
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          return (
            <div
              key={id}
              className="flex flex-col md:flex-row items-center bg-white rounded-xl p-6 relative"
            >
              {/* Image */}
              <div className="relative flex-shrink-0">
                <div
                  className={`${randomColor} absolute -bottom-3 -left-3 w-full h-full rounded-xl`}
                ></div>
                <img
                  src={image}
                  alt={name}
                  className="relative rounded-xl w-48 h-48 object-cover z-10"
                />
              </div>

              {/* Content */}
              <div className="mt-6 md:mt-0 md:ml-10 flex-1 text-center md:text-left">
                <p className="text-blue-500 text-4xl leading-none mb-3">“</p>
                <p className="text-gray-600 mb-4">{review}</p>

                {/* Rating */}
                <div className="flex justify-center md:justify-start mb-3">
                  {Array.from({ length: rating }, (_, i) => (
                    <FaStar key={i} className="text-yellow-400 mr-1" />
                  ))}
                </div>

                <h3 className="text-lg font-bold text-gray-800">{name}</h3>
                <p className="text-sm text-gray-500">{role}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
