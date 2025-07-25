import { useState } from "react";
import { Link, NavLink } from "react-router";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
import { IoCloseCircleOutline } from "react-icons/io5";

const NavItems = () => {
  const [activeLink, setActiveLink] = useState("/");

  const menuItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Shop",
      path: "shop",
    },
    {
      label: "About Us",
      path: "about",
    },
    {
      label: "Contact Us",
      path: "contact",
    },
  ];

  return (
    <nav className="bg-primary py-3 h-[70px]">
      <div className="container mx-auto flex justify-between items-center nav-container h-full">
        <ul className="flex items-center gap-10">
          {menuItems?.map((item, index) => (
            <li
              key={index}
              onClick={() => setActiveLink(item.path)}
              className={`cursor-pointer pb-1 ${
                activeLink === item.path
                  ? "border-b-4 border-red-600"
                  : "border-b-4 border-primary"
              }`}
            >
              <NavLink to={item.path}>{item.label}</NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center">
          <Link className="flex" to={"/login"}>
            <button color="red" className="text-lg">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavItems;
