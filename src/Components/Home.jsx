
import React from "react";
import HomeText from "./HomeText";
import HomeImg from "./HomeImg";
import Footer from "./Footer";
import LastFooter from "./LastFooter";

const Home = ({ products }) => {
  return (
    <>
      <section className="w-full bg-gray-200 flex justify-center px-4 py-10">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-10">

          <HomeText />
          <HomeImg />

        </div>
      </section>

      <Footer products={products} />
      <LastFooter />
    </>
  );
};

export default Home;

