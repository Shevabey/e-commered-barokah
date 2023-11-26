/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Cards = ({ filteredItems }) => {
  const generateWhatsAppLink = (phoneNumber, message) => {
    // Format link untuk WhatsApp
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center gap-12 shadow-sm">
      {filteredItems.slice(0, 8).map((item) => (
        <div key={item.id} className="card">
          <Link to={`/shop/${item.id}`}>
            <img
              src={item.image}
              alt="item"
              className="object-cover mx-auto w-full hover:scale-105 transition-all duration-300"
            />
          </Link>
          <div className="mt-4 px-4">
            <h4 className="text-base font-semibold mb-2">{item.title}</h4>
            <p className="text-gray-500">{item.description}</p>
          </div>
          <div className="flex justify-between mb-3">
            <p className="text-black/50">{item.category}</p>
            <p className="font-semibold">Rp.{item.price.toLocaleString()}</p>
          </div>
          <a
            href={generateWhatsAppLink("6282257149271", `Halo, saya tertarik dengan ${item.title} apa masih ada?`)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:ring-offset-2 focus:ring-green-500 gap-2"
          >
            <FaWhatsapp /> Pesan sekarang
          </a>
        </div>
      ))}
    </div>
  );
};

export default Cards;

