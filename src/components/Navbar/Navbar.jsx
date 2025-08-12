import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, NavLink, useLocation } from "react-router";
import { IoIosSearch } from "react-icons/io";
import logo from "../../assets/logo.png";
import { TiShoppingCart } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import Swal from "sweetalert2";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const location = useLocation();
  const { user, setUser, logOut } = useContext(AuthContext) || {};
  const [activeLink, setActiveLink] = useState(location?.pathname || "/");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setActiveLink(location?.pathname);
  }, [location]);

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure you want to Logout?",
      icon: "warning",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        logOut();
        setUser(null);
        localStorage.removeItem("user");
        Swal.fire({
          title: "Logout!",
          text: "You successfully Logout.",
          icon: "success",
          timer: 3000,
        });
      }
    });
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-10">
      <div className="container mx-auto py-[10px] flex justify-between items-center flex-wrap px-2 lg:px-5 bg-gray-100">
        {/* logo  */}
        <div className="h-[55px] w-[110px]">
          <Link to={"/"}>
            <img
              src={logo}
              alt="logo"
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </Link>
        </div>

        {/* search bar  */}
        <div className="hidden lg:block w-[50%]">
          <div className="flex items-center">
            <input
              type="text"
              name="search"
              placeholder="Search by Product"
              className="p-[10px] rounded-lg w-full border-2 border-yellow-300 bg-white"
            />
            <span className="-ml-10">
              <IoIosSearch className="h-6 w-6 text-gray-500" />
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="-mb-2 flex gap-5">
            <Link to={"/cart"}>
              <TiShoppingCart className="h-6 w-6 text-gray-600" />
            </Link>

            <Link to={"/wishlist"}>
              <FaHeart className="h-6 w-6 text-gray-600" />
            </Link>

            {user && <FaRegCircleUser className="h-6 w-6 text-gray-600" />}
          </div>
        </div>
      </div>

      <nav className="bg-[#fdd835] h-[60px]">
        <div className="flex justify-between items-center h-full px-2 lg:px-5">
          <div className="w-[90%]">
            <div className="flex items-center">
              <input
                type="text"
                name="search"
                placeholder="Search by Product"
                className="p-[10px] rounded-lg w-full border-2 border-yellow-300 bg-white"
              />
              <span className="-ml-10">
                <IoIosSearch className="h-6 w-6 text-gray-500" />
              </span>
            </div>
          </div>
          <button
            onClick={toggleNavbar}
            className="md:hidden text-white hover:text-gray-300 focus:outline-none ml-4"
          >
            {isOpen ? (
              <IoClose className="h-7 w-7 text-gray-900" />
            ) : (
              <CgMenuRightAlt className="h-7 w-7 text-gray-900" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex container mx-auto justify-between items-center nav-container h-full px-5">
          <ul className="flex items-center gap-10 py-3">
            {menuItems?.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  onClick={() => setActiveLink(item.path)}
                  className={`cursor-pointer ${
                    activeLink === item.path
                      ? "border-b-4 border-red-600"
                      : "border-b-4 border-[#fdd835]"
                  } ${activeLink === item.path ? "text-red-600" : ""}`}
                >
                  {item.label}
                </NavLink>
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
            {user ? (
              <button
                onClick={handleLogOut}
                className="flex items-center justify-center w-[100%]"
              >
                <p className="text-lg text-white cursor-pointer">Logout</p>
              </button>
            ) : (
              <Link
                className="flex items-center justify-center w-[100%]"
                to={"/login"}
              >
                <button className="text-lg text-white cursor-pointer">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>

        {/* responsive menu for mobile */}
        <div className="z-50 relative">
          <div
            className={`absolute w-full bg-[#fffffff3] ${
              isOpen ? "" : "hidden"
            }`}
          >
            <div
              className={`pb-8 md:hidden ${
                isOpen ? "block" : "hidden"
              } mt-2 mx-4`}
            >
              <ul className="flex flex-col space-y-2">
                {menuItems?.map((item, index) => (
                  <li
                    key={index}
                    className={`block bg-gray-300 px-3 py-1.5 rounded-md border-l-4 ${
                      activeLink === item.path
                        ? "border-red-600"
                        : "border-[#fdd835]"
                    }`}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setActiveLink(item.path)}
                      className={`cursor-pointer ${
                        activeLink === item.path ? "text-red-600" : ""
                      }`}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
                <li
                  className={`block bg-gray-300 px-3 py-1.5 rounded-md border-l-4 ${
                    activeLink === "/login"
                      ? "border-red-600"
                      : "border-[#fdd835]"
                  }`}
                >
                  <NavLink
                    to={"/login"}
                    onClick={() => setActiveLink("/login")}
                    className={`cursor-pointer ${
                      activeLink === "/login" ? "text-red-600" : ""
                    }`}
                  >
                    {user ? "Logout" : "Login"}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

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
