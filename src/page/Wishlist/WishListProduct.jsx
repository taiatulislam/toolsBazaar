import { MdDelete } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";

const WishListProduct = ({ product, i }) => {
  return (
    <>
      <tr>
        <td className="border bg-white border-gray-200 p-2 text-center">
          {i + 1}
        </td>
        <td className="border bg-white border-gray-200 p-2 text-sm">
          {product?.title?.slice(0, 30)}.....
        </td>
        <td className="border bg-white border-gray-200 p-2">
          <img
            className="h-16 rounded-lg mx-auto"
            src={product?.product_image[0]}
            alt={product?.title}
          />
        </td>
        <td className="border bg-white border-gray-200 p-2 text-md text-center">
          {product?.color}
        </td>
        <td className="border bg-white border-gray-200 p-2 text-md text-center">
          {product?.stock_limit}
        </td>
        <td className="border bg-white border-gray-200 p-2 text-md text-center">
          $ {product?.unit_price}
        </td>
        <td className="border bg-white border-gray-200 p-2 text-md text-center">
          $ {product?.total_price}
        </td>
        <td className="border bg-white border-gray-200 p-2 text-md text-center">
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

export default WishListProduct;
