import React from "react";

const Button = ({ name, handleButton, color = "bg-[#fdc62e]" }) => {
  return (
    <button
      onClick={handleButton}
      className={`${color} bg-opacity-90 text-black font-medium cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full`}
    >
      {name}
    </button>
  );
};

export default Button;
