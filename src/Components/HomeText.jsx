
import { Link } from "react-router-dom";
import React from "react";

const HomeText = () => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center">
      <div className="flex flex-col gap-6 max-w-xl">

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold animate-pulse">
          FIND PRODUCTS <br />
          THAT MATCH <br />
          YOUR LIFESTYLE
        </h1>

        <p className="text-gray-600 text-sm sm:text-base">
          Browse through our wide range of quality products across fashion,
          beauty, electronics, home essentials, and more — carefully curated
          to fit your needs and reflect your personality.
        </p>

        <Link to="/shop">
          <button className="bg-black text-white py-3 px-8 rounded-3xl hover:scale-105 transition hover:shadow-xl w-fit hover:animate-pulse">
            Shop Now
          </button>
        </Link>

      </div>
    </div>
  );
};

export default HomeText;

