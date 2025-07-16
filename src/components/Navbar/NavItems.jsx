import { Link, NavLink } from "react-router";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
import { IoCloseCircleOutline } from "react-icons/io5";

const NavItems = () => {
  const menuItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/shop">Shop</NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs">AboutUs</NavLink>
      </li>
      <li>
        <NavLink to="/faq">FAQ</NavLink>
      </li>
      <li>
        <NavLink to="/faq">ContactUs</NavLink>
      </li>
    </>
  );

  return (
    <nav className="">
      <div className="bg-yellow-600 py-6 md:py-3 -mt-20 md:mt-0">
        <div className="container mx-auto flex justify-between items-center nav-container">
          <div>
            <ul className="hidden md:flex items-center space-x-10">
              {menuItems}
            </ul>
          </div>

          <div className="flex items-center">
            <Link className="hidden md:flex" to={"/login"}>
              <button color="red">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavItems;
