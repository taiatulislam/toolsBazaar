import { FaMinus, FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const CartCard = ({ cart }) => {
  return (
    <div>
      <div className="bg-white rounded-3xl lg:rounded-none shadow-sm hover:bg-[#19a49113] lg:shadow-inherit border border-gray-100">
        <div className="grid grid-cols-6 items-center text-center font-semibold border border-gray-100 p-5">
          <img
            src={cart?.product_image}
            alt="product"
            style={{ width: "50%", height: "100%" }}
            className="mx-auto"
          />
          <h5>{cart?.title}</h5>
          <h5>{cart?.unit_price?.toFixed(2)} BDT</h5>
          <h5>
            <div className="flex items-center gap-2">
              <button className="bg-base-300 p-3">
                <FaMinus className="mx-auto"></FaMinus>
              </button>
              <h3>{cart?.quantity}</h3>
              <button className="bg-base-300 p-3">
                <FaPlus className="mx-auto"></FaPlus>
              </button>
            </div>
          </h5>
          <h5>{cart?.unit_price * cart?.quantity?.toFixed(2)} BDT</h5>
          <div>
            <button className=" bg-red-500 rounded-full text-white p-3">
              <RxCross2 className="mx-auto"></RxCross2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
