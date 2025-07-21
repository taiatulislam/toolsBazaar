import { Link } from "react-router";
import { IoIosSearch } from "react-icons/io";
import logo from "../../assets/logo.png";
import { TiShoppingCart } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";

export default function TopNav() {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto py-4 flex justify-between items-center flex-wrap">
        {/* logo  */}
        <h3 className="">
          <Link to={"/"}>
            <img
              src={logo}
              alt="logo"
              style={{
                height: "60px",
                width: "150px",
              }}
            />
          </Link>
        </h3>

        {/* search bar  */}
        <div className="w-[55%]">
          <div className="flex items-center">
            <input
              type="text"
              name="search"
              placeholder="Search by Product"
              className="p-4 rounded-lg w-full border-2 border-yellow-500 bg-white"
            />
            <span className="-ml-10">
              <IoIosSearch className="h-6 w-6 text-gray-500" />
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="-mb-2 flex gap-5">
            <Link to={"/carts"}>
              <TiShoppingCart className="h-7 w-7 text-gray-600" />
            </Link>

            <Link to={"/wishlist"}>
              <FaHeart className="h-7 w-7 text-gray-600" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
