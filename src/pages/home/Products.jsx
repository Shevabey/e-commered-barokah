import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Cards from "../../components/Cards";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOptions, setSortOptions] = useState("default");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        // console.log(data);
        setProducts(data);
        setFilteredItems(data);
      } catch (error) {
        console.log(`Error fetching data: ${error}`);
      }
    };

    fetchData();
  }, []);

  // console.log(products);

  // filtering function
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? products
        : products.filter((item) => item.category === category);

    setFilteredItems(filtered);
    setSelectedCategory(category);
  };

  // show all products
  const showAll = () => {
    setFilteredItems(products);
    setSelectedCategory("all");
  };

  // sorting functionality
  const handleSortChange = (option) => {
    setSortOptions(option);

    // logic for sorting
    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredItems(sortedItems);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12 mt-10">
      <h2 className="title">Produk Kami</h2>

      {/* product card */}
      <div>
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-x-3 mb-8 mt-20">
          {/* all btn */}
          <div className="flex flex-row justify-start md:items-center md:gap-4 gap-4 flex-wrap ">
            <button onClick={showAll} className="btnProduct">
              Semua Produk
            </button>
            <button
              onClick={() => filterItems("Tabung Gas")}
              className="btnProduct"
            >
              Tabung Gas
            </button>
            <button
              onClick={() => filterItems("Galon Isi Ulang")}
              className="btnProduct"
            >
              Galon Isi Ulang
            </button>
            <button onClick={() => filterItems("Ikan")} className="btnProduct">
              Ikan
            </button>
            <button onClick={() => filterItems("Es")} className="btnProduct">
              Es Batu
            </button>
          </div>

          {/* sorting option */}
          <div className="flex justify-end items-center  rounded-sm">
            <div className="bg-blue-500 p-2 ">
              <FaFilter className="text-white h-4 w-4" />
            </div>
            <div>
              <select
                id="sort"
                onChange={(e) => handleSortChange(e.target.value)}
                value={sortOptions}
                className="bg-blue-500 text-white px-2 py-1 rounded-sm"
              >
                <option value="default">Default</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="low-to-high">Low to High</option>
                <option value="high-to-low">High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <Cards filteredItems={filteredItems} />
      </div>
    </div>
  );
};

export default Products;
