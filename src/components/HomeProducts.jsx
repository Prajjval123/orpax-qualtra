import React from "react";

const products = [
  {
    title: "Hospital/Nursing Home \n Management Software",
    image: "/assets/For_Developing/Products_Section/management software.png",
  },
  {
    title: "Supply Chain \n Management Software",
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
      <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-center animate-fade-in">
        Products
      </h1>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-8 lg:gap-12">
        {/* IT Card */}
        {products.map((product, index) => (
          <div
            key={index}
            className="h-full w-full flex flex-col md:py-1 lg:py-2 justify-between rounded-xl border border-white bg-gray-900 backdrop-blur-lg bg-opacity-40 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <h1 className="text-xl lg:text-2xl flex items-center justify-center font-medium text-center h-[80px] whitespace-pre-line">
              {product.title}
            </h1>
            
            <div className="md:h-[300x] lg:h-[400px]">
            <img
              src={product.image}
              alt={product.image}
              className="w-full h-96 md:h-full "
            />
            </div>
            <h1 className="text-xl lg:text-2xl text-center font-medium p-6 text-gray-300">
              Request a free demo
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
