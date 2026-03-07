
import React from "react";
import FooterTopItems from "./FooterTopItems";
import NewArivals from "./NewArivals";

const Footer = ({ products }) => {
  return (
    <section className="w-full px-4 py-10 flex justify-center">
      <div className="w-full max-w-7xl">

        {/* NEW ARRIVALS */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            NEW ARRIVALS
          </h1>
        </div>

        <FooterTopItems products={products.slice(0, 4)} />

        {/* TOP SELLING */}
        <div className="text-center mt-12 mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            TOP SELLING
          </h1>
        </div>

        <NewArivals products={products.slice(5, 9)} />

      </div>
    </section>
  );
};

export default Footer;

