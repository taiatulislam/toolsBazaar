import React from "react";
import { Link } from "react-router";

export default function FooterLink({ path, children }) {
  return (
    <li>
      <Link to={path} className="text-gray-400 hover:text-red-600 text-sm">
        <MotionTextHover>{children}</MotionTextHover>
      </Link>
    </li>
  );
}

const MotionTextHover = ({ children }) => {
  return (
    <span
      whileHover={{
        letterSpacing: "0.1em",
        transition: {
          duration: 0.4,
        },
      }}
    >
      {children.split("").map((char, index) => (
        <span key={index}>{char}</span>
      ))}
    </span>
  );
};
