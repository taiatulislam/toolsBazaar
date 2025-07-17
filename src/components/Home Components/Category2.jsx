import Image1 from "../../assets/banner/yellow-chainsaw1.png";
import Image2 from "../../assets/banner/yellow-drill-1.png";
import Image3 from "../../assets/banner/yellow-drill-1.png";

import { Link } from "react-router";

const Category2 = () => {
  return (
    <div className="my-10 px-5">
      <div className="grid grid-cols-4 gap-8">
        {/* 1st col */}
        <div className="col-span-2 py-10 pl-5 bg-gradient-to-br ☐ from-gray-400/90 to-gray-100 text-white rounded-xl relative h-[320px] flex items-end hover:scale-105 duration-300">
          <div>
            <div className="mb-4">
              <p className="mb-[2px] text-white">Enjoy</p>
              <p className="text-2xl font-semibold mb-[2px]">With</p>
              <p className="text-5xl font-bold opacity-40 mb-2">
                Electrical Equipment
              </p>
              <Link
                state={{ value: "Electrical Equipment", type: "category" }}
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
            src={Image1}
            alt="Gaming"
            className="w-[320px] absolute top-1/2 -translate-y-1/2 -right-0"
          />
        </div>
        {/* 2nd col */}
        <div className="py-10 pl-5 bg-gradient-to-br ☐ from-[#2dcc6f] to-[#2dcc6f] text-white rounded-xl relative h-[320px] flex items-end hover:scale-110 duration-300">
          <div>
            <div className="mb-4">
              <p className="mb-[2px] text-white">Enjoy</p>
              <p className="text-2xl font-semibold mb-[2px]">With</p>
              <p className="text-5xl font-bold opacity-20 mb-2">
                Safety Equipment
              </p>
              <Link
                state={{ value: "Safety Equipment", type: "category" }}
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
          <img src={Image2} alt="VR" className="w-[320px] absolute bottom-0" />
        </div>
        {/* 3rd col */}
        <div className="py-10 pl-5 bg-gradient-to-br ☐ from-[#1376f4] to-[#1376f4] text-white rounded-xl relative h-[320px] flex items-end hover:scale-110 duration-300">
          <div>
            <div className="mb-4">
              <p className="mb-[2px] text-white">Enjoy</p>
              <p className="text-2xl font-semibold mb-[2px]">With</p>
              <p className="text-5xl font-bold opacity-40 mb-2">
                Construction Equipment
              </p>
              <Link
                state={{ value: "Construction Equipment", type: "category" }}
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
            alt="Gadget"
            className="w-[200px] absolute bottom-0 right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Category2;
