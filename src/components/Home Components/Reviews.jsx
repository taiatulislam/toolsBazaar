import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";

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
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
            <div key={id} className="px-3 h-full">
              {/* Full Height Wrapper */}
              <div className="h-full pb-5">
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 p-8 border border-gray-100 relative overflow-hidden group flex flex-col h-[400px]">
                  {/* Decorative Background */}
                  <div
                    className={`${randomColor} absolute top-0 right-0 w-28 h-28 rounded-bl-full opacity-20`}
                  ></div>

                  {/* Quote Icon */}
                  <FaQuoteLeft className="text-primary text-4xl mb-4 flex-shrink-0" />

                  {/* Review Text */}
                  <div className="flex-grow">
                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-5">
                      {review}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center md:justify-start mb-6 flex-shrink-0">
                    {Array.from({ length: rating }, (_, i) => (
                      <FaStar
                        key={i}
                        className="text-yellow-400 mr-1 text-lg"
                      />
                    ))}
                  </div>

                  {/* User Info */}
                  <div className="flex items-center gap-4 border-t pt-5 mt-auto flex-shrink-0">
                    <div className="relative">
                      <div
                        className={`${randomColor} absolute -bottom-2 -right-2 w-full h-full rounded-full opacity-50`}
                      ></div>
                      <img
                        src={image}
                        alt={name}
                        className="relative w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        {name}
                      </h3>
                      <p className="text-sm text-gray-500">{role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
