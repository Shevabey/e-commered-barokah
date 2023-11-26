import React from "react";
import bannerImg from "/public/images/banner.png";
import { FaShoppingBag } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-primaryBG py-12 xl:px-28 px-4">
      <div className="py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14">
        {/* img */}
        <div className="md:w-1/2">
          <div className="animated-banner"> {/* Menambahkan kelas animated-banner */}
            <img src={bannerImg} alt="banner" width={500} />
          </div>
        </div>
        <div className="md:1/2">
          <h1 className="text-5xl  mb-5 font-semibold">Toko Barokah</h1>
          <p className="text-xl mb-7">
            Anda dapat menjelajahi toko kami dengan berbagai produk yang kami
            sediakan disini.
          </p>
          <button className="btnPrimary">
            <FaShoppingBag className="inline-flex" /> Belanja Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
