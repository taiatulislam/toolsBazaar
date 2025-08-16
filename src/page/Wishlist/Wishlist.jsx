import image1 from "../../assets/featured/featured-1.jpg";
import image2 from "../../assets/featured/featured-2.jpg";
import { MdDelete } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";

const Wishlist = () => {
  return (
    <div className="container mx-auto py-3 md:my-10 text-gray-800 bg-white">
      <div className="space-y-2">
        <div className="rounded-lg">
          <h1 className="text-2xl font-bold pb-1 text-center">
            Wish List Product
          </h1>

          <div className="overflow-x-auto px-2 md:px-5 rounded-lg">
            <table className="w-full mt-2">
              <tr className="text-[#FF9D00] ">
                <th className={`${tableHeadStyle}`}>N/A</th>
                <th className={`${tableHeadStyle}`}>Title Name</th>
                <th className={`${tableHeadStyle}`}>Product Image</th>
                <th className={`${tableHeadStyle}`}>Color</th>
                <th className={`${tableHeadStyle}`}>Stock Limit</th>
                <th className={`${tableHeadStyle}`}>Unit Price</th>
                <th className={`${tableHeadStyle}`}>Total Price</th>
                <th className={`${tableHeadStyle}`}>Action</th>
              </tr>

              {wishlistProductList?.map((product, i) => (
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

const WishListProduct = ({ product, i }) => {
  return (
    <>
      <tr>
        <td className="border bg-white border-gray-200 p-2 text-center">
          {i + 1}
        </td>
        <td className="border bg-white border-gray-200 p-2 text-xs md:text-sm">
          {product?.title?.slice(0, 30)}.....
        </td>
        <td className="border bg-white border-gray-200 p-2">
          <img
            className="h-16 rounded-lg mx-auto object-contain"
            src={product?.product_image[0]}
            alt={product?.title}
          />
        </td>
        <td className={tableDataStyle}>{product?.color}</td>
        <td className={tableDataStyle}>{product?.stock_limit}</td>
        <td className={tableDataStyle}>$ {product?.unit_price}</td>
        <td className={tableDataStyle}>$ {product?.total_price}</td>
        <td className={tableDataStyle}>
          <div className="flex items-center justify-center gap-6">
            <span className="text-xl cursor-pointer">
              <FaCartPlus />
            </span>
            <span className="text-2xl text-red-600 cursor-pointer">
              <MdDelete />
            </span>
          </div>
        </td>
      </tr>
    </>
  );
};

// Styles and Data
const tableHeadStyle =
  "border bg-gray-100 border-gray-300 !text-center text-xs md:text-sm lg:text-lg p-2";

const tableDataStyle =
  "border bg-white border-gray-200 p-2 text-xs md:text-sm lg:text-md !text-center";

const wishlistProductList = [
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
