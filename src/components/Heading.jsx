import React from "react";

const Heading = ({ title }) => {
  return (
    <>
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold montserrat text-center mb-3">
        {title}
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
    </>
  );
};

export default Heading;
