
import { IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";

const FooterTopItems = ({ products }) => {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
      {products.map((data) => {
        return (
          <Link to={`/detailspage/${data.id}`} key={data.id}>
            <div className="flex flex-col items-center bg-white rounded-xl p-4 hover:shadow-lg transition">

              <img
                className="rounded-xl h-32 object-contain hover:scale-105 transition"
                src={data.image}
                alt={data.name}
              />

              <h2 className="text-gray-500 text-sm mt-3 text-center">
                {data.name}
              </h2>

              <h1 className="text-lg font-bold flex items-center gap-1 mt-1">
                <IndianRupee size={14} />
                {data.priceCents}
              </h1>

            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default FooterTopItems;

