import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    clientReview:
      "Great website for buying and selling hardware products. Easy to navigate and find what I need. Will definitely use again!",
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "JohnDoe",
  },
  {
    clientReview:
      "Smooth transactions every time. Tools Bazaar has a wide range of products at competitive prices. Highly recommend.",
    starRating: 4,
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "JaneSmith",
  },
  {
    clientReview:
      "Excellent customer service and fast shipping. Found exactly what I was looking for. Will be a repeat customer.",
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "MikeJohnson",
  },
  {
    clientReview:
      "Good selection of hardware items. Prices are reasonable. Website interface could be improved for better user experience.",
    starRating: 3,
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "SarahBrown",
  },
  {
    clientReview:
      "Tools Bazaar offers great deals on bulk purchases. Saved me a lot of money for my business.",
    starRating: 4,
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "DavidClark",
  },
  {
    clientReview:
      "The website layout is clean and easy to use. However, some product descriptions lack detail. Overall satisfied with my purchase.",
    starRating: 4,
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "EmilyTaylor",
  },
  {
    clientReview:
      "Had an issue with an order, but customer service was quick to resolve it. Appreciate the prompt response.",
    starRating: 4,
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "ChrisWilson",
  },
  {
    clientReview:
      "Tools Bazaar has become my go-to for hardware needs. Reliable service and quality products.",
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "JenniferLee",
  },
  {
    clientReview:
      "Average experience overall. Prices are decent, but shipping took longer than expected.",
    starRating: 3,
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "KevinNguyen",
  },
  {
    clientReview:
      "Impressive selection of hardware items. Prices are competitive. Will recommend to friends.",
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "AmandaGarcia",
  },
  {
    clientReview:
      "User-friendly website. Found what I needed quickly and checkout was smooth. Will shop again.",
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "DanielMartinez",
  },
  {
    clientReview:
      "Decent prices, but could use more variety in product offerings. Overall satisfied with my purchase.",
    starRating: 3,
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "MelissaWong",
  },
  {
    clientReview:
      "Love the convenience of shopping at Tools Bazaar. Always find what I need at a good price.",
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "RyanJohnson",
  },
  {
    clientReview:
      "Website is easy to use, but could benefit from more filtering options. Products arrived as described.",
    starRating: 4,
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "LauraDavis",
  },
  {
    clientReview:
      "Great experience overall. Will definitely recommend to colleagues. Keep up the good work!",
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "MarkThompson",
  },
];

export default function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    appendDots: (dots) => (
      <div style={{ bottom: "-25px" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="py-14 px-5 mx-auto">
      <div className="flex flex-col items-center justify-center mt-10 mb-2">
        <h2 className="text-4xl font-bold montserrat text-center mb-3 text-nowrap">
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

      <Slider {...settings} className="mySlider py-10">
        {reviews.map((review) => (
          <div key={review.clientReview} className="text-center px-5">
            <img
              className="w-16 rounded-full mx-auto"
              src={review.userProfile}
              alt=""
            />
            <h3 className="font-semibold text-red-600 text-lg py-1">
              {review.userName}
            </h3>
            <span className="flex justify-center">
              <FaStar style={{ color: "#FFCC00" }} />
              <FaStar style={{ color: "#FFCC00" }} />
              <FaStar style={{ color: "#FFCC00" }} />
              <FaStar style={{ color: "#FFCC00" }} />
              <FaStar style={{ color: "#FFCC00" }} />
            </span>
            <p className="pt-8">{review.clientReview}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
