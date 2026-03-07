
import { IndianRupee } from "lucide-react";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const WomenShoespage = () => {
  const [womenShoes, setWomenShoes] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchingShoes = async () => {
      const res = await fetch(
        "https://dummyjson.com/products/category/womens-shoes"
      );
      const data = await res.json();
      setWomenShoes(data);
    };
    fetchingShoes();
  }, []);

  if (!womenShoes)
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <section className="w-full px-4 py-12 flex justify-center">
      <div className="max-w-7xl w-full">

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {womenShoes.products.map((raw) => {
            return (
              <Link
                to={`/shoesdetlpage/${raw.id}`}
                key={raw.id}
              >
                <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow hover:shadow-xl transition text-center">

                  <img
                    className="h-36 object-contain mb-3 hover:scale-105 transition"
                    src={raw.images[1]}
                    alt={raw.title}
                  />

                  <h2 className="text-gray-500 text-sm">
                    {raw.brand}
                  </h2>

                  <h2 className="text-sm line-clamp-2">
                    {raw.title}
                  </h2>

                  <h1 className="text-lg font-bold flex items-center mt-1">
                    <IndianRupee size={14} />
                    {raw.price}
                  </h1>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      const product = {
                        id: raw.id,
                        title: raw.title,
                        price: raw.price,
                        image: raw.images[1],
                      };

                      addToCart(product);
                    }}
                    className="mt-3 bg-black text-white px-4 py-2 rounded-xl hover:scale-105 transition hover:shadow-lg"
                  >
                    Add to cart
                  </button>

                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WomenShoespage;

