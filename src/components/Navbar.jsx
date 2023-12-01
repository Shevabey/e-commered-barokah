import React, { useState } from "react";
import logo from "/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoAnimated, setIsLogoAnimated] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { title: "Beranda", path: "/" },
    { title: "Produk", path: "/products" },
    { title: "Kontak", path: "/contact" },
  ];

  return (
    // <header className={`absolute max-w-screen-2xl xl:px-28 px-4 top-0 right-0 left-0 ${isLogoAnimated ? 'animate-logo' : ''}`}>
    <header className="bg-slate-100 shadow-md absolute min-w-screen-2xl xl:px-28 px-4 top-0 right-0 left-0">
      <div className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center font-bold"
          data-aos="fade-down-right"
        >
          <img src={logo} alt="logo" width={80} />
          <h1 className="hover:text-blue-500 text-xl">Toko Barokah</h1>
        </Link>

        {/* Navbar for small devices */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="w-5 h-5 text-black" />
            ) : (
              <FaBars className="w-5 h-5 text-black" />
            )}
          </button>
        </div>

        {/* Nav item */}
        <nav
          className="hidden lg:flex items-center ml-auto"
          data-aos="fade-down-left"
        >
          <ul className="lg:flex justify-between items-center gap-4 text-black">
            {navItems.map(({ title, path }) => (
              <li key={title} className="hover:text-blue-500">
                <Link to={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Sidebar menu overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 text-center py-9 bg-black bg-opacity-75 z-50 transition-all duration-300 ease-in-out">
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu}>
              <FaTimes className="w-5 h-5 text-white" />
            </button>
          </div>
          <ul className="text-white px-4">
            {navItems.map(({ title, path }) => (
              <li
                key={title}
                className="hover:text-blue-500 my-5 cursor-pointer"
              >
                <Link to={path} onClick={toggleMenu}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <hr />
    </header>
  );
};

export default Navbar;
