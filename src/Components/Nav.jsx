
import React, { useContext } from "react";
import { ShoppingCart, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Nav = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="w-full bg-gray-300 flex justify-center px-4 py-4">
      <div className="max-w-7xl w-full flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-extrabold">
          SHOP.CO
        </h1>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700">
          <Link className="hover:text-black transition" to="/">
            Home
          </Link>
          <Link className="hover:text-black transition" to="/shop">
            Shop
          </Link>
          <Link className="hover:text-black transition" to="/about">
            About
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-6 relative">

          {/* <Search className="cursor-pointer hover:scale-110 transition" /> */}

          <Link to="/cart" className="relative">
            <ShoppingCart className="cursor-pointer hover:scale-110 transition" />

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Nav;

