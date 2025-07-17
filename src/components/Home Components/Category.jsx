import Image1 from "../../assets/banner/yellow-drill-1.png";
import Image2 from "../../assets/banner/yellow-drill-1.png";
import Image3 from "../../assets/banner/yellow-chainsaw1.png";
import { Link } from "react-router";

const Category = () => {
  return (
    <div className="mt-4 px-5">
      <div className="grid grid-cols-4 gap-8">
        {/* 1st col */}
        <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-xl relative h-[320px] flex items-end hover:scale-110 duration-300">
          <div>
            <div className="mb-4">
              <p className="mb-[2px] text-gray-400">Enjoy</p>
              <p className="text-2xl font-semibold mb-[2px]">With</p>
              <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                Automotive Tools
              </p>
              <Link
                state={{ value: "Automotive Tools", type: "category" }}
                to="/shop"
              >
                <button
                  className={`bg-[#fdc62e] text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-1`}
                >
                  Browse
                </button>
              </Link>
            </div>
          </div>
          <img src={Image1} alt="" className="w-[320px] absolute bottom-0" />
        </div>
        {/* 2nd col */}
        <div className="py-10 pl-5 bg-gradient-to-br from-[#fdc62e] to-[#fdc62e] text-white rounded-xl relative h-[320px] flex items-end hover:scale-110 duration-300">
          <div>
            <div className="mb-4">
              <p className="mb-[2px] text-white">Enjoy</p>
              <p className="text-2xl font-semibold mb-[2px]">With</p>
              <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                Hand Tools
              </p>
              <Link
                state={{ value: "Hand Tools", type: "category" }}
                to="/shop"
              >
                <button
                  className={`bg-[#fdc62e] text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-1`}
                >
                  Browse
                </button>
              </Link>
            </div>
          </div>
          <img
            src={Image2}
            alt="Gadget"
            className="w-[320px] absolute -right-4 lg:top-[40px]"
          />
        </div>
        {/* 3rd col */}
        <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-[#f42c37] to-[#f42c37] text-white rounded-xl relative h-[320px] flex items-end hover:scale-105 duration-300">
          <div>
            <div className="mb-4">
              <p className="mb-[2px] text-white">Enjoy</p>
              <p className="text-2xl font-semibold mb-[2px]">With</p>
              <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                Gardening Tools
              </p>
              <Link
                state={{ value: "Gardening Tools", type: "category" }}
                to="/shop"
              >
                <button
                  className={`bg-[#fdc62e] text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-1`}
                >
                  Browse
                </button>
              </Link>
            </div>
          </div>
          <img
            src={Image3}
            alt="Laptop"
            className="w-[320px] absolute top-1/2 -translate-y-1/2 -right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
