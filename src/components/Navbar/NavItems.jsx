import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";

const NavItems = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location?.pathname || "/");

  useEffect(() => {
    setActiveLink(location?.pathname);
  }, []);

  const menuItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Shop",
      path: "/shop",
    },
    {
      label: "About Us",
      path: "/about",
    },
    {
      label: "FAQ",
      path: "/faq",
    },
    {
      label: "Contact Us",
      path: "/contact",
    },
  ];

  return (
    <nav className="bg-[#fdd835] h-[60px]">
      <div className="container mx-auto flex justify-between items-center nav-container h-full px-5">
        <ul className="flex items-center gap-10 py-3">
          {menuItems?.map((item, index) => (
            <li
              key={index}
              onClick={() => setActiveLink(item.path)}
              className={`cursor-pointer ${
                activeLink === item.path
                  ? "border-b-4 border-red-600"
                  : "border-b-4 border-primary"
              } ${activeLink === item.path ? "text-red-600" : ""}`}
            >
              <NavLink to={item.path}>{item.label}</NavLink>
            </li>
          ))}
        </ul>

        <div
          className="flex items-center"
          style={{
            backgroundColor: "#E53935",
            height: "100%",
            width: "200px",
            clipPath: "polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)",
          }}
        >
          <Link
            className="flex items-center justify-center w-[100%]"
            to={"/login"}
          >
            <button className="text-lg text-white cursor-pointer">Login</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavItems;
