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
    <div className="p-8 lg:p-24 pb-0 min-h-screen">
      <h1 className="text-4xl font-semibold mb-10 text-center text-white animate-fade-in">
        Products
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white w-full p-2 rounded-lg shadow-lg flex flex-col items-center justify-between transform transition-transform duration-300 hover:scale-105 animate-slide-up"
          >
            <h1 className=" text-gray-300 mb-4">{product.title}</h1>
            <div className="relative">
              <img src={product.image} alt="Project" />
              <button className="w-full absolute -bottom-0.5 h-12 bg-red-500">Request a free demo</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
