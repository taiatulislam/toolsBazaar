import CartCard from "./CartCard";

import Featured1 from "../../assets/featured/featured-1.jpg";
import Featured2 from "../../assets/featured/featured-2.jpg";
import Featured3 from "../../assets/featured/featured-3.jpg";

const Carts = () => {
  const { totalQuantity, totalPrice } = myCarts.reduce(
    (acc, item) => {
      acc.totalQuantity += item.quantity;
      acc.totalPrice += item.unit_price * item.quantity;
      return acc;
    },
    { totalQuantity: 0, totalPrice: 0 }
  );

  return (
    <div className="container mx-auto duration-300">
      <div className="w-full rounded-2xl overflow-hidden shadow-lg my-5 duration-300">
        <div className="bg-black text-[#b89149] duration-300  ">
          <div className="grid grid-cols-6 items-center justify-between font-semibold border border-gray-100 px-10 py-5">
            <h5 className="text-center text-base">Product</h5>
            <h5 className="text-center text-base">Product Name</h5>
            <h5 className="text-center text-base">Unit Price</h5>
            <h5 className="text-center text-base">Quantity</h5>
            <h5 className="text-center text-base">Total</h5>
            <h5 className="text-center text-base">Remove</h5>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 gap-0">
          {myCarts?.length === 0 ? (
            <div className="text-center my-20">
              <p className=" my-10">Your cart is empty.</p>
            </div>
          ) : (
            <>
              {myCarts?.map((item) => (
                <CartCard cart={item} />
              ))}

              <div className="flex items-center justify-around gap-4 mb-3 mt-5">
                <p className="bg-black px-4 py-2 rounded-full text-white">
                  Total Quantity:{" "}
                  <span className=" text-[#FFA500]">{totalQuantity}</span>
                </p>
                <p className="bg-black px-4 py-2 rounded-full text-white">
                  Total price:{" "}
                  <span className="text-[#FFA500]">
                    {totalPrice?.toFixed(2)}
                  </span>
                </p>
                <button className="bg-black text-[#FFA500] hover:bg-gray-800 px-4 py-2 rounded-full text-base flex items-center gap-1">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const myCarts = [
  {
    product_image: Featured1,
    title: "Digital Multimeter",
    unit_price: 29.99,
    quantity: 2,
  },
  {
    product_image: Featured2,
    title: "Hydraulic Car Jack",
    unit_price: 26.999,
    quantity: 1,
  },
  {
    product_image: Featured3,
    title: "Cordless Drill Set",
    unit_price: 39.99,
    quantity: 2,
  },
];

export default Carts;
