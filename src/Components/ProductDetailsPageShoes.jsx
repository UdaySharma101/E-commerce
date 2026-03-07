
import { IndianRupeeIcon } from "lucide-react";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductDetailsPageShoes = () => {
  const { id } = useParams();
  const [detPage, setDetPage] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setDetPage(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!detPage)
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <section className="w-full px-4 py-12 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="h-64 md:h-96 object-contain hover:scale-105 transition cursor-zoom-in"
            src={detPage.images[0]}
            alt={detPage.title}
          />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-6 text-center md:text-left">

          <h2 className="font-medium text-xl">
            {detPage.brand}
          </h2>

          <h1 className="text-2xl font-bold flex items-center gap-1">
            <IndianRupeeIcon size={14} />
            {detPage.price}
          </h1>

          <button
            onClick={() =>
              addToCart({
                id: detPage.id,
                title: detPage.title,
                price: detPage.price,
                image: detPage.images[0],
              })
            }
            className="bg-black text-white px-7 py-3 rounded-xl hover:scale-105 transition hover:shadow-lg"
          >
            Add to cart
          </button>

        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPageShoes;

