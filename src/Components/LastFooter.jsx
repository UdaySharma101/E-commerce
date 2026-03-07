import { Link } from "react-router-dom";

const LastFooter = () => {
  return (
    <section className="w-full flex justify-center px-4 py-10">
      <div className="w-full max-w-7xl bg-gray-200 rounded-2xl p-6 md:p-10">

        <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
          BROWSE BY DRESS STYLE
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Men Shirts */}
          <Link to="/menshirt">
            <div className="bg-white rounded-2xl flex justify-between items-center overflow-hidden cursor-pointer hover:scale-[1.02] transition shadow hover:shadow-xl min-h-[180px]">
              <h1 className="text-xl md:text-3xl font-bold px-6 py-6">
                Men <br /> Shirts
              </h1>

              <img
                className="h-full w-[45%] object-cover"
                src="https://plus.unsplash.com/premium_photo-1688497831384-e40b2e5615cd?w=600&auto=format&fit=crop&q=60"
                alt=""
              />
            </div>
          </Link>

          {/* Women Shirts */}
          <Link to="/womwnshirt">
            <div className="bg-white rounded-2xl flex justify-between items-center overflow-hidden cursor-pointer hover:scale-[1.02] transition shadow hover:shadow-xl min-h-[180px]">
              <h1 className="text-xl md:text-3xl font-bold px-6 py-6">
                Women <br /> Shirts
              </h1>

              <img
                className="h-full w-[45%] object-cover"
                src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>
          </Link>

          {/* Men Shoes */}
          <Link to="/menshoes">
            <div className="bg-white rounded-2xl flex justify-between items-center overflow-hidden cursor-pointer hover:scale-[1.02] transition shadow hover:shadow-xl min-h-[180px]">
              <h1 className="text-xl md:text-3xl font-bold px-6 py-6">
                Men <br /> Shoes
              </h1>

              <div className="h-full w-[45%] overflow-hidden transition  ">
                <img
                  className="h-full w-full object-cover hover:scale-105 "
                  src="https://images.unsplash.com/photo-1715775506665-3201fe907dda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fG1lbiUyMHNob2VzfGVufDB8fDB8fHww"
                  alt=""
                />
              </div>
            </div>
          </Link>

          {/* Women Shoes */}
          <Link to="/womenshoes">
            <div className="bg-white rounded-2xl flex justify-between items-center overflow-hidden cursor-pointer hover:scale-[1.02] transition shadow hover:shadow-xl min-h-[180px]">
              <h1 className="text-xl md:text-3xl font-bold px-6 py-6">
                Women <br /> Shoes
              </h1>

              <img
                className="h-full w-[45%] object-cover"
                src="https://images.unsplash.com/photo-1559334417-01b38aec66bd?w=600"
                alt=""
              />
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default LastFooter;