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
    <div className="p-8 md:p-12 pb-0 flex flex-col gap-6 min-h-screen bg-black">
      <h1 className="text-3xl md:text-5xl font-semibold mb-8 text-center text-white animate-fade-in">
        Products
      </h1>
      <div className="mt-12 mx-auto grid grid-cols-1 sm:grid-cols-3 place-items-center gap-8">
        {/* IT Card */}
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-gray-900 h-full w-full flex flex-col gap-4 p-2 text-white rounded-xl border border-white shadow-lg hover:shadow-xl transform transition duration-300"
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
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div> */}
    </div>
  );
};

export default Products;
