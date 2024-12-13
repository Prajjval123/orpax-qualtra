import React from "react";

const products = [
  {
    title: "E-commerce B2B",
    image: "/assets/products/E-commerce B2B.png",
  },
  {
    title: "E-commerce B2C",
    image: "/assets/products/E-commerce B2C.jpg",
  },
  {
    title: "Supply Chain Management Software",
    image: "/assets/products/Supply Chain Management Software.jpg",
  },
  {
    title: "Hospital/Nursing Home Management Software",
    image: "/assets/products/Product-4.jpg",
  },
  {
    title: "Survey Analysis Tool",
    image: "/assets/products/Survey Analysis Tool.png",
  },
  {
    title: "Spa and Saloon Management System",
    image: "/assets/products/Spa and Saloon Management System.jpg",
  },
  {
    title: "School & College Management Software",
    image: "/assets/products/School & College Management Software.jpg",
  },
  {
    title: "Property/Hotel/Hostel Management System",
    image: "/assets/products/Product-8.jpg",
  },
];

const Products = () => {
  return (
    <div className="p-4 lg:p-16 pb-0 min-h-screen ">
      <h1 className="text-5xl font-semibold mb-10 text-center animate-fade-in">
        Products
      </h1>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 place-items-center gap-12">
        {/* IT Card */}
        {products.map((product, index) => (
          <div
            key={index}
            className="h-full w-full flex flex-col justify-between rounded-xl py-4 border border-gray-600 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <h1 className="text-2xl flex items-center justify-center font-medium p-6 mx-12 text-center">
              {product.title}
            </h1>
            
            <div className="h-[360px]">
            <img
              src={product.image}
              alt={product.image}
              className="rounded-md object-cover w-full h-full"
            />
            </div>
            <h1 className="text-2xl text-center font-medium p-6 text-gray-300">
              Request a free demo
            </h1>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
