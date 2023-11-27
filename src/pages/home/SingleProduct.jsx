// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const SingleProduct = () => {
//   const { id } = useParams();
//   const [products, setProducts] = useState([]);
//   // console.log(id);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/products.json");
//         const data = await response.json();
//         const product = data.find((p) => p.id === Number(id));
//         // console.log(product);

//         if (product) {
//           setProducts(product);
//         } else {
//           console.error("Product not found");
//         }
//       } catch (error) {
//         console.log(`Error fetching data: ${error}`);
//       }
//     };

//     fetchData();
//   }, [id]);

// const { title, category, price, image, status, description } = products;

// return (
//   <div className="mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4">
//     <div className="p-3 max-w-7xl m-auto">
//       <div className="mt-6 sm:mt-10">
//         <div>
//           <div>
//             {/* <img src="/images/products/gasHijau.jpg" alt={title} /> */}
//             <img src={`/images/products/${image}`} alt="gambar gas" />
//             <h2>{title}</h2>
//             <p>{description}</p>
//             {/* Tambahkan tampilan informasi lainnya */}
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// };

// export default SingleProduct;

import React, { useEffect, useState } from "react";
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
        console.log(product);
        setProducts(product[0]);
      } catch (error) {
        console.log(`Error fetching data: ${error}`);
      }
    };

    fetchData();
  }, [id]);

  const { title, category, price, image, status, description } = products;

  return (
    <div className="mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4">
      <div className="p-3 max-w-7xl m-auto">
        <div className="mt-6 sm:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max">
            <div>
              <img src={image} alt="gambar" className="w-full  " />
              {/* <img src="/images/products/gasHijau.jpg" alt="" /> */}
              <h2>{title}</h2>
            </div>
            <div className="mt-6">
              <h1 className="title text-left">
                {title}
              </h1>
              <p className="mt-4 text-gray-500 text-base leading-6 text-justify sm:text-left sm:mt-4">{description}</p>
              <p className="mt-4 text-gray-800"> {category}</p>
              <p className="mt-4 my-2 text-red-500 font-semibold sm:text-2xl ">
                 Rp.{price}
              </p>
              <p className="mt-4 text-gray-800 font-semibold">{status}</p>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default SingleProduct;
