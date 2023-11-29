import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
        {/* footer top */}
      <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
        <div className="mt-20 mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
          {/* company info */}
          <div className="md:w-[400px]">
            <Link to="/">
              <img src="/logo.svg" alt="" />
            </Link>
            <p className="my-8 text-Black/75">
            Toko Barokah, destinasi utama untuk kebutuhan sehari-hari Anda! Di Toko Barokah, kami bangga menyajikan beragam produk berkualitas tinggi yang memenuhi kebutuhan sehari-hari Anda dengan kenyamanan dan harga terjangkau.
            </p>
            
          </div>

          {/* Catalog */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">KATALOG</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-blue-500">
                Tabung Gas
              </Link>
              <Link to="/" className="text-sm block hover:text-blue-500">
                Galon Isi Ulang
              </Link>
              <Link to="/" className="text-sm block hover:text-blue-500">
                Ikan
              </Link>
              <Link to="/" className="text-sm block hover:text-blue-500">
                Es Batu
              </Link>
            </div>
          </div>

          {/* ABOUT US */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">Tentang kami</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-blue-500">
                Produk Kami
              </Link>
              <Link to="/" className="text-sm block hover:text-blue-500">
              Peta Situs
              </Link>
              <Link to="/" className="text-sm block hover:text-blue-500">
              Pertanyaan Umum
              </Link>
              <Link to="/" className="text-sm block hover:text-blue-500">
                Tentang kami 
              </Link>
              
            </div>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div className="bg-blue-500">
      <p className="text-white text-center items-center py-3">© {currentYear} Coral, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;