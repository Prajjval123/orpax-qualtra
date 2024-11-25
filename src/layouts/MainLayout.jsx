import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className=" md:px-8 lg:px-0 py-6">
      {children}
    </div>
  );
};

export default MainLayout;
