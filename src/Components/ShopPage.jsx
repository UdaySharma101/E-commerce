
import React, { useEffect, useState, useContext } from "react";
import { IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ShopPage = () => {
  const [product, setProduct] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(
          "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json"
        );
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <section className="w-full px-4 py-12 flex justify-center">
      <div className="max-w-7xl w-full">

        <div className="text-center text-2xl text-gray-500 mb-8">
          <h1>Featured Products..</h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {product.map((data) => {
            return (
              <Link to={`/detailspage/${data.id}`} key={data.id}>
                <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow hover:shadow-xl transition text-center">

                  <img
                    className="h-36 object-contain mb-3 hover:scale-105 transition"
                    src={data.image}
                    alt={data.title}
                  />

                  <h1 className="text-gray-600 text-sm line-clamp-2">
                    {data.title}
                  </h1>

                  <h1 className="text-lg font-bold flex items-center mt-1">
                    <IndianRupee size={14} />
                    {data.priceCents}
                  </h1>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart({
                        id: data.id,
                        title: data.title,
                        price: data.priceCents,
                        image: data.image,
                      });
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

export default ShopPage
