
import { Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const HomeText = () => {

const {show} = useContext(CartContext)
  return (
    <div className="w-full lg:w-1/2 flex justify-center">
      <div className="flex flex-col gap-6 max-w-xl">

        <div className="overflow-hidden">
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold  animate-pulse
                         transform transition-all duration-1000 ease-out
                         ${show ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"}
                         `}>
            FIND PRODUCTS <br />
            THAT MATCH <br />
            YOUR LIFESTYLE
          </h1>
        </div>

        <div className="overflow-hidden">
          <p className={`text-gray-600 text-sm sm:text-base transform transation-all ease-out duration-1000 
          ${show ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"}
          `}>
            Browse through our wide range of quality products across fashion,
            beauty, electronics, home essentials, and more — carefully curated
            to fit your needs and reflect your personality.
          </p>
        </div>

        <div className="overflow-hidden px-5">
          <Link to="/shop">
            <button className={`bg-black text-white py-3 px-8 rounded-3xl hover:scale-105  hover:shadow-xl w-fit hover:animate-pulse hover:duration-0
          transform transition-all ease-out duration-1000   ${show ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"}`}>
              Shop Now
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default HomeText;

