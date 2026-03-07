
import React, { useContext } from "react";
import { BrushCleaning } from "lucide-react";
import CartItems from "./CartItems";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      {cart.length === 0 ? (
        <div className="h-screen flex items-center justify-center px-4 text-center">
          <h1 className="text-2xl md:text-5xl font-bold text-gray-400 flex items-center gap-3">
            Your cart is empty <BrushCleaning size={50} />
          </h1>
        </div>
      ) : (
        <CartItems cart={cart} />
      )}
    </>
  );
};

export default Cart;

