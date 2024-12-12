import React from "react";

const products = [
  {
    title: "Hospital/Nursing Home Management Software",
    image: "/assets/For_Developing/Products_Section/management software.png",
  },
  {
    title: "Supply Chain Management Software",
    image: "/assets/For_Developing/Products_Section/dribbble.png",
  },
  {
    title: "E-commerce B2B",
    image: "/assets/For_Developing/Products_Section/online-payment-gateway.png",
  },
];

const Products = () => {
  return (
    <div className="flex flex-col gap-12 min-h-screen">
      <h1 className="text-5xl font-semibold mb-8 text-center animate-fade-in">
        Products
      </h1>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 place-items-center gap-12">
        {/* IT Card */}
        {products.map((product, index) => (
          <div
            key={index}
            className="h-full w-full flex flex-col justify-between rounded-xl py-4 border border-gray-600 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <h1 className="text-xl flex items-center justify-center font-medium p-6 mx-12 text-center">
              {product.title}
            </h1>
            
            <div className="h-[360px]">
            <img
              src={product.image}
              alt={product.image}
              className="rounded-md object-cover w-full h-full"
            />
            </div>
            <h1 className="text-xl text-center font-medium p-6 text-gray-300">
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
