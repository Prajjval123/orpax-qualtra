import React from "react";

const products = [
  {
    title: "E-commerce B2B",
    image: "/assets/For_Developing/Products_Section/online-payment-gateway.png",
  },
  {
    title: "E-commerce B2C",
    image: "/assets/products/product1.jpg",
  },
  {
    title: "Supply Chain Management Software",
    image: "/assets/For_Developing/Products_Section/dribbble.png",
  },
  {
    title: "Hospital/Nursing Home Management Software",
    image: "/assets/For_Developing/Products_Section/management software.png",
  },
  {
    title: "Survey Analysis Tool",
    image: "/assets/products/product2.jpg",
  },
  {
    title: "Spa and Saloon Management System",
    image: "/assets/products/product3.png",
  },
  {
    title: "School & College Management Software",
    image: "/assets/products/product3.png",
  },
  {
    title: "Property/Hotel/Hostel Management System",
    image: "/assets/products/product3.png",
  },
];

const Products = () => {
  return (
    <div className="p-4 lg:p-16 pb-0 min-h-screen ">
      <h1 className="text-5xl font-semibold mb-10 text-center text-white animate-fade-in">
        Products
      </h1>
      <div className="mt-12 mx-auto grid grid-cols-1 lg:grid-cols-3 place-items-center gap-8">
        {/* IT Card */}
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-gray-900 h-full w-full flex flex-col justify-between gap-4 p-2 text-white rounded-xl border border-white shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <h1 className="text-xl flex items-center justify-center font-semibold p-4 h-[90px] text-center">
              {product.title}
            </h1>
            
            <img
              src={product.image}
              alt={product.image}
              className="rounded-md object-cover w-full"
            />
            <h1 className="text-lg text-center font-semibold p-4 text-gray-300">
              Request a free demo
            </h1>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
