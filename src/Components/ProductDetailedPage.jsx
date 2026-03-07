
import { IndianRupee } from "lucide-react";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductDetailedPage = () => {
  const { id } = useParams();
  const [singleProd, setSingleProd] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(
      "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.find((item) => item.id === id);
        setSingleProd(foundProduct);
      });
  }, [id]);

  if (!singleProd)
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <section className="w-full px-4 py-12 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">

        {/* Product Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="h-64 md:h-96 object-contain hover:scale-105 transition cursor-zoom-in"
            src={singleProd.image}
            alt={singleProd.name}
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 items-center md:items-start text-center md:text-left">

          <h1 className="text-xl md:text-2xl font-extrabold">
            {singleProd.name}
          </h1>

          <p className="text-gray-600">
            {singleProd.description}
          </p>

          <h1 className="text-2xl font-bold flex items-center gap-1">
            <IndianRupee size={15} />
            {singleProd.priceCents}
          </h1>

          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart({
                id: singleProd.id,
                image: singleProd.image,
                title: singleProd.name,
                price: singleProd.priceCents,
              });
            }}
            className="bg-black rounded-xl text-white px-8 py-3 hover:scale-105 transition hover:shadow-lg"
          >
            Add to cart
          </button>

        </div>
      </div>
    </section>
  );
};

export default ProductDetailedPage;

