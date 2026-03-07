
import { IndianRupee } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const WomenShirts = () => {
  const [apidata, setapidata] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        "https://fakestoreapi.com/products/category/women%27s%20clothing"
      );
      const data = await res.json();
      setapidata(data);
    };

    fetchProducts();
  }, []);

  if (!apidata)
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Loading...
      </div>
    );

  return (
    <section className="w-full px-4 py-12 flex justify-center">
      <div className="max-w-7xl w-full">

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {apidata.map((raw) => {
            return (
              <Link to={`/shirtsdetlpage/${raw.id}`} key={raw.id}>
                <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow hover:shadow-xl transition">

                  <img
                    className="h-40 object-contain mb-3 hover:scale-105 transition"
                    src={raw.image}
                    alt={raw.title}
                  />

                  <h2 className="text-sm text-gray-500 text-center line-clamp-2">
                    {raw.title}
                  </h2>

                  <h1 className="flex items-center font-bold text-lg mt-1">
                    <IndianRupee size={14} />
                    {raw.price}
                  </h1>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      const data = {
                        id: raw.id,
                        image: raw.image,
                        title: raw.title,
                        price: raw.price,
                      };
                      addToCart(data);
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

export default WomenShirts;

