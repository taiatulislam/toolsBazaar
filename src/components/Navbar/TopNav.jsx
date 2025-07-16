import { Link } from "react-router";
import { IoIosSearch } from "react-icons/io";

export default function TopNav() {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto py-4 flex justify-between items-center flex-wrap">
        {/* logo  */}
        <h3 className="order-1">
          <Link to={"/"}>LOGO</Link>
        </h3>

        {/* search bar  */}
        <div className="order-3 md:order-2 md:mt-0 w-[85%] md:w-[55%] lg:w-[50%] mt-4">
          <div className="relative">
            <div className="flex items-center">
              <input
                type="text"
                name="search"
                placeholder="Search by Product"
                className="px-4 py-2 md:py-3 rounded-lg w-full border-2 border-yellow-500"
              />
              <span className="-ml-10">
                <IoIosSearch className="h-6 w-6 text-gray-500" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
