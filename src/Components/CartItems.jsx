
import React, { useContext } from "react";
import { IndianRupeeIcon, Minus, Plus, Trash } from "lucide-react";
import { CartContext } from "../context/CartContext";

const CartItems = ({ cart }) => {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearFullCart,
  } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="w-full px-4 py-10 flex justify-center">
      <div className="max-w-4xl w-full flex flex-col gap-6">

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white shadow-md rounded-xl p-4"
          >
            <img
              className="h-24 object-contain"
              src={item.image}
              alt={item.title}
            />

            <div className="flex flex-col text-center sm:text-left">
              <h1 className="text-gray-700 text-sm md:text-lg">
                {item.title}
              </h1>

              <h2 className="flex items-center justify-center sm:justify-start font-bold">
                <IndianRupeeIcon size={16} />
                {item.price}
              </h2>
            </div>

            <div className="flex gap-3 items-center bg-gray-100 px-4 py-2 rounded">
              <Minus
                onClick={() => decreaseQuantity(item.id)}
                className="cursor-pointer hover:scale-110"
              />

              <span>{item.quantity}</span>

              <Plus
                onClick={() => increaseQuantity(item.id)}
                className="cursor-pointer hover:scale-110"
              />
            </div>

            <Trash
              onClick={() => removeFromCart(item.id)}
              className="cursor-pointer text-red-500 hover:scale-110"
            />
          </div>
        ))}

        <button
          onClick={() => clearFullCart()}
          className="bg-red-400 text-white py-3 rounded-lg hover:scale-105 transition"
        >
          Clear Cart
        </button>

        <div className="flex justify-center">
          <h1 className="font-bold text-xl md:text-2xl bg-gray-100 px-6 py-3 rounded-lg shadow">
            Total Price: {totalPrice}
          </h1>
        </div>

      </div>
    </section>
  );
};

export default CartItems;

