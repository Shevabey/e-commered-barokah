import React from "react";
import hero from "/public/images/hero.jpg";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const heroStyle = {
    backgroundImage: `url(${hero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,.1)",
  };

  return (
    <div style={heroStyle} className="bg-primaryBG py-12 xl:px-28 px-4">
      <div className="py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14">
        <div className="md:1/2">
          <h1
            className="text-5xl mb-5 font-semibold"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Toko Barokah
          </h1>
          <p
            className="text-xl mb-7"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Anda dapat menjelajahi toko kami dengan berbagai produk yang kami
            sediakan di sini.
          </p>
          <Link to="/products">
            <button className="btnPrimary" data-aos="zoom-out-right">
              <FaShoppingBag className="inline-flex" /> Belanja Sekarang
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
