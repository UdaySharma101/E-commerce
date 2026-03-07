
import { IndianRupee } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductDetShirts = () => {
  const { id } = useParams();
  const [shirtData, setShirtData] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchShirts = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setShirtData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchShirts();
  }, [id]);

  if (!shirtData)
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <section className="w-full flex justify-center px-4 py-12">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10 items-center">

        {/* Product Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="h-64 md:h-96 object-contain hover:scale-105 transition cursor-zoom-in"
            src={shirtData.image}
            alt={shirtData.title}
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 flex flex-col gap-5 text-center md:text-left items-center md:items-start">

          <h2 className="font-medium text-lg md:text-xl">
            {shirtData.title}
          </h2>

          <h1 className="font-bold text-2xl flex items-center gap-1">
            <IndianRupee size={14} />
            {shirtData.price}
          </h1>

          <button
            onClick={(e) => {
              e.preventDefault();
              const data = {
                id: shirtData.id,
                image: shirtData.image,
                title: shirtData.title,
                price: shirtData.price,
              };
              addToCart(data);
            }}
            className="bg-black text-white px-7 py-3 rounded-xl hover:scale-105 transition hover:shadow-lg"
          >
            Add to cart
          </button>

        </div>

      </div>
    </section>
  );
};

export default ProductDetShirts;
