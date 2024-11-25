import React from "react";

const products = [
  {
    title: "Hospital/Nursing Home Management Software",
    image: "/assets/products/product1.jpg",
  },
  {
    title: "Supply Chain Management Software",
    image: "/assets/products/product2.jpg",
  },
  {
    title: "E-commerce B2B",
    image: "/assets/products/product3.png",
  },
];

const Products = () => {
  return (
    <div className="p-8 md:p-24 pb-0 min-h-screen bg-black">
      <h1 className="text-3xl md:text-4xl font-semibold mb-10 text-center text-white animate-fade-in">
        Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white w-full p-4 rounded-lg shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105 animate-slide-up"
          >
            <h2 className="text-lg md:text-xl font-semibold text-gray-300 mb-4 text-center">
              {product.title}
            </h2>
            <div className="relative w-full">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <button className="absolute bottom-0 left-0 w-full h-12 bg-red-500 text-white font-semibold rounded-b-md hover:bg-red-600">
                Request a Free Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
