import WishListProduct from "./WishListProduct";
import image1 from "../../assets/featured/featured-1.jpg";
import image2 from "../../assets/featured/featured-2.jpg";

const Wishlist = () => {
  return (
    <div className="container mx-auto py-3 my-10 text-gray-800 bg-white  ">
      <div className="space-y-2">
        <div className="rounded-lg">
          <h1 className="text-2xl font-bold pb-1 text-center">
            Wish List Product
          </h1>

          <div className="overflow-x-auto">
            <table className="w-full mt-2">
              <tr className="text-[#FF9D00]  ">
                <th className="border bg-gray-100 border-gray-300 text-center text-lg py-3">
                  N/A
                </th>
                <th className="border bg-gray-100 border-gray-300 text-center text-lg py-3">
                  Title Name
                </th>
                <th className="border bg-gray-100 border-gray-300 text-center text-lg p-2">
                  Product Image
                </th>
                <th className="border bg-gray-100 border-gray-300 text-center text-lg p-2">
                  Color
                </th>
                <th className="border bg-gray-100 border-gray-300 text-center text-lg py-3">
                  Stock Limit
                </th>
                <th className="border bg-gray-100 border-gray-300 text-center text-lg py-3">
                  Unit Price
                </th>
                <th className="border bg-gray-100 border-gray-300 text-center text-lg py-3">
                  Total Price
                </th>
                <th className="border bg-gray-100 border-gray-300 text-center text-lg py-3">
                  Action
                </th>
              </tr>

              {wishlistProduct?.map((product, i) => (
                <WishListProduct
                  key={i}
                  product={product}
                  i={i}
                ></WishListProduct>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const wishlistProduct = [
  {
    title: "Cordless Electric Drill",
    product_image: [image1],
    color: "Matte Black",
    stock_limit: 5,
    unit_price: 59.99,
    total_price: 119.98,
  },
  {
    title: "Heavy-Duty Adjustable Wrench",
    product_image: [image2],
    color: "Silver",
    stock_limit: 3,
    unit_price: 89.99,
    total_price: 269.97,
  },
];

export default Wishlist;
