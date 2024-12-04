import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="relative md:px-8 lg:px-0 bg-banner bg-repeat bg-left min-h-screen">
        <img
          src="/assets/additional_images/left_top_design.png"
          alt="Background Decor"
          className="absolute top-0 left-0 w-3/6 object-contain"
        />
        <div>
          <img
            src="/assets/additional_images/Computer_bg.png"
            alt="Background Decor"
            className="absolute top-20 right-10 opacity-50 w-2/3 object-contain bg-gradient-radial opacity-75 from-red-500 via-transparent to-blue-600 mix-blend-lighten shadow-blue-500/50 sm:w-3/4 sm:top-20 sm:right-5 md:w-1/2"
          />
        </div>
        {children}
      </div>
    </>
  );
};

export default MainLayout;
