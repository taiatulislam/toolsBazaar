import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/shop/1")}>
      <div className="relative flex items-center rounded-lg border-2 border-gray-200 group aspect-square">
        <div className="w-full h-full flex items-center justify-center cursor-pointer">
          <img
            src={item.image}
            alt={"tool"}
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
            className="rounded-lg p-3 w-full "
          />
          {item.offer?.discount !== "N/A" && (
            <div className="absolute top-2 right-2 w-12 h-12">
              <div className="relative">
                <img src="https://i.ibb.co/KzpjhpT/new.png" alt="offer" />
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs">
                  {item.offer?.discount}%
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="w-full hidden group-hover:flex justify-center gap-10 absolute bottom-5 z-10">
          <button>
            <FaShoppingCart className="text-2xl text-black cursor-pointer" />
          </button>
          <button>
            <FaHeart className="text-2xl text-black cursor-pointer" />
          </button>
        </div>
      </div>
      <div className="mt-5 px-2">
        <h2 className="text-xl montserrat">{item.title}</h2>
        <p className="text-lg my-3 text-black montserrat">
          <FaStar className="inline mr-2" />
          <FaStar className="inline mr-2" />
          <FaStar className="inline mr-2" />
          <FaStar className="inline mr-2" />
          <FaStar className="inline" />
        </p>
        {item.offer?.discount === "N/A" ? (
          <div>
            <p className="text-3xl font-bold">$ {item.price}</p>
          </div>
        ) : (
          <div className="flex items-center gap-5">
            <p className="text-3xl font-bold">
              ${" "}
              {(
                item.price -
                (item.price * parseInt(item.offer?.discount)) / 100
              ).toFixed(2)}
            </p>
            <p className="text-xl line-through">$ {item.price}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
