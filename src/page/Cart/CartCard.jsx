import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const CartCard = ({ cart, setCarts }) => {
  const [cartData, setCartData] = useState(cart);

  const handleChangeAdd = () => {
    setCartData((prev) => ({
      ...prev,
      quantity: prev?.quantity + 1,
    }));
  };

  const handleChangeSub = () => {
    setCartData((prev) => ({
      ...prev,
      quantity: prev?.quantity - 1,
    }));
  };

  const handleDelete = () => {
    setCarts((prev) => prev.filter((item) => item.id !== cartData?.id));
  };

  return (
    <div>
      <div className="bg-white rounded-3xl lg:rounded-none shadow-sm hover:bg-[#19a49113] lg:shadow-inherit border border-gray-100">
        <div className="grid grid-cols-6 gap-2 md:gap-0 items-center text-center font-semibold border border-gray-100 p-2 md:p-5">
          <img
            src={cartData?.product_image}
            alt="product"
            style={{ width: "70px", objectFit: "contain" }}
            className="mx-auto h-[70px] md:h-[100px]"
          />
          <h5 className="text-xs md:text-base text-wrap">{cartData?.title}</h5>
          <h5 className="text-xs md:text-base text-wrap">
            {cartData?.unit_price?.toFixed(2)} BDT
          </h5>
          <h5>
            <div className="flex items-center gap-2 flex-wrap">
              <button
                className="bg-base-300 md:p-3 cursor-pointer"
                onClick={handleChangeSub}
                disabled={cartData?.quantity === 0}
              >
                <FaMinus className=""></FaMinus>
              </button>
              <h3 className="text-xs md:text-base text-wrap">
                {cartData?.quantity}
              </h3>
              <button
                className="bg-base-300 md:p-3 cursor-pointer"
                onClick={handleChangeAdd}
              >
                <FaPlus className=""></FaPlus>
              </button>
            </div>
          </h5>
          <h5 className="text-xs md:text-base text-wrap">
            {(cartData?.unit_price * cartData?.quantity)?.toFixed(2)} BDT
          </h5>
          <div>
            <button
              className=" bg-red-500 rounded-full text-white p-3 cursor-pointer"
              onClick={handleDelete}
            >
              <RxCross2 className="mx-auto"></RxCross2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
