import { useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);
  const { id, title, image, quantity, price } = item;
  return (
    <div className="flex gap-x-3">
      <Link
        // to={"/product/:id"}
        className="flexCenter flex-1 m-1 py-1 rounded-xl ring-1 ring-slate-900/5 h-[74px]"
      >
        <img
          src={image}
          alt="cartItemImage"
          height={55}
          width={55}
          className="object-contain aspect-square p-1"
        />
      </Link>
      <div className="flex flex-[4] flex-col gap-y-2 mr-3">
        <div className="flex justify-between gap-8 items-baseline">
          <div className="medium-14 uppercase line-clamp-2">{title}</div>
          <div className="cursor-pointer text-grey-50">
            <MdClose onClick={() => removeFromCart(id)} />
          </div>
        </div>
        <div className="flexBetween">
          <div className="flexBetween gap-4 ring-1 ring-slate-900/5 px-2">
            <FaMinus
              onClick={() => decreaseQuantity(id)}
              className="cursor-pointer"
            />
            <span>{quantity}</span>
            <FaPlus
              onClick={() => increaseQuantity(id)}
              className="cursor-pointer"
            />
          </div>
          <p>${price}</p>
          <div className="medium-15">{`${parseFloat(price * quantity).toFixed(
            2
          )}`}</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
