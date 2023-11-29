import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Products from "./pages/home/Products.jsx";
import SingleProduct from "./pages/home/SingleProduct.jsx";
import Contact from "./pages/home/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/products",
        element: <Products/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path:"/shop/:id",
        element: <SingleProduct/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  
);
