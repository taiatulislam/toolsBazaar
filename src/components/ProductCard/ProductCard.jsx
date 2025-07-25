import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import Image3 from "../../assets/banner/yellow-chainsaw1.png";

const ProductCard = () => {
  const title = "chainsaw1";
  const price = "10";
  const offer = { discount: "10" };

  return (
    <div>
      <div className="relative flex items-center rounded-lg border-2 border-gray-200 group aspect-square">
        <div className="w-full h-full flex items-center justify-center">
          <img src={Image3} alt={"tool"} className="rounded-lg p-3 w-full " />
          {offer?.discount !== "N/A" && (
            <div className="absolute top-2 right-2 w-12 h-12">
              <div className="relative">
                <img src="https://i.ibb.co/KzpjhpT/new.png" alt="offer" />
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs">
                  {offer?.discount}%
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="w-full hidden group-hover:flex justify-center gap-10 absolute bottom-5 z-10">
          <button>
            <FaShoppingCart className="text-2xl text-black" />
          </button>
          <button>
            <FaHeart className="text-2xl text-black" />
          </button>
        </div>
      </div>
      <div className="mt-5 px-2">
        <h2 className="text-xl montserrat">{title}</h2>
        <p className="text-lg my-3 text-black montserrat">
          <FaStar className="inline mr-2" />
          <FaStar className="inline mr-2" />
          <FaStar className="inline mr-2" />
          <FaStar className="inline mr-2" />
          <FaStar className="inline" />
        </p>
        {offer?.discount === "N/A" ? (
          <div>
            <p className="text-3xl font-bold">$ {price}</p>
          </div>
        ) : (
          <div className="flex items-center gap-5">
            <p className="text-3xl font-bold">
              $ {(price - (price * parseInt(offer?.discount)) / 100).toFixed(2)}
            </p>
            <p className="text-xl line-through">$ {price}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
