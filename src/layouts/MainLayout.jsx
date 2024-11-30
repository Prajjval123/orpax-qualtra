import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="relative md:px-8 lg:px-0 bg-banner bg-repeat bg-left min-h-screen">
      <img
        src="/assets/additional_images/left_top_design.png"
        alt="Background Decor"
        className="absolute top-0 left-0 w-3/6 object-contain"
      />
      {/* Right-Side Image */}
      {/* <div className="">
        <img
          src="/assets/For_Developing/Background/First_Section.png"
          alt="Background Decor"
          className="absolute top-0 right-0 w-3/6 object-contain bg-gradient-radial opacity-75 from-red-500 via-transparent to-blue-600 mix-blend-lighten shadow-blue-500/50"
        />
      </div> */}
      <div>
        <img
          src="/assets/additional_images/Computer_bg.png"
          alt="Background Decor"
          className="absolute top-10 right-0 w-3/6 object-contain bg-gradient-radial opacity-75 from-red-500 via-transparent to-blue-600 mix-blend-lighten shadow-blue-500/50"
        />
      </div>
      {children}
    </div>
  );
};

export default MainLayout;
