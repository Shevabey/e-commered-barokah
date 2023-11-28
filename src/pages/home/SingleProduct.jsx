import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  // console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        const product = data.filter((p) => p.id == id);
        // console.log(product);
        setProducts(product[0]);
      } catch (error) {
        console.log(`Error fetching data: ${error}`);
      }
    };
    window.scrollTo({top: 0, behavior:'smooth'})
    fetchData();

  }, [id]);

  const { title, category, price, image, status, description, notice } =
    products;

  const generateWhatsAppLink = (phoneNumber, message) => {
    // Format link untuk WhatsApp
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4">
      <div className="p-3 max-w-7xl m-auto">
        <div className="mt-4">
          <a href="/" className="text-gray-500">Home</a>
          <a href="/shop" className="font-bold text-black"> / Shop</a>
        </div>
        <div className="mt-2 sm:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max">
            <div>
              <img src={image} alt="gambar" className="w-full" />
            </div>

            {/* product detail */}
            <div className="mt-1">
              <h1 className="text-3xl font-semibold capitalize text-left my-8">
                {title}
              </h1>
              <p className="mt-4 text-gray-500 text-base leading-6 text-justify sm:text-left sm:mt-4">
                {description}
              </p>
              <p className="mt-4 text-gray-800"> {category}</p>
              <p className="mt-4 my-2 text-red-500 font-semibold sm:text-2xl ">
                {price
                  ? `Rp. ${price.toLocaleString("id-ID")}`
                  : "Harga tidak tersedia"}
              </p>
              <p className="mt-4 text-gray-800"> {notice}</p>
              <p className="mt-4 text-gray-800 font-semibold">{status}</p>
              <div className="mt-4">
                <div className=" gap-3 flex justify-between items-center">
                  <a
                    href={generateWhatsAppLink(
                      "6282257149271",
                      `Halo, saya tertarik dengan ${title} apa masih ada?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-xl text-white bg-green-500 hover:bg-green-600 focus:ring-offset-2 focus:ring-green-500 gap-2"
                  >
                    <FaWhatsapp /> Pesan Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
