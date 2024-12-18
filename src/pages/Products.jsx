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
    title: "Supply Chain \n Management Software",
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
    title: "Spa and Saloon \n Management System",
    image: "/assets/products/Spa and Saloon Management System.jpg",
  },
  {
    title: "School & College \n Management Software",
    image: "/assets/products/School & College Management Software.jpg",
  },
  {
    title: "Property/Hotel/Hostel\n Management System",
    image: "/assets/products/Product-8.jpg",
  },
];

const Products = () => {
  return (
    <div className="p-8 md:p-12 lg:p-16 xl:p-20 pb-0 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-semibold mb-20 text-center animate-fade-in">
        Products
      </h1>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-8 lg:gap-12">
        {/* IT Card */}
        {products.map((product, index) => (
          <div
            key={index}
            className="w-full flex flex-col justify-between rounded-xl border border-white shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer py-2"
          >
            <h1 className="text-xl lg:text-2xl flex items-center justify-center font-medium text-center h-[80px] whitespace-pre-line">
              {product.title}
            </h1>

            <img
              src={product.image}
              alt={product.image}
              className="h-64 md:h-72 lg:h-96"
            />

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
