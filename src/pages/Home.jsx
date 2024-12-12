import React from "react";
import Hero from "../components/Hero";
import HomeServices from "../components/HomeServices";
import HomeProjects from "../components/HomeProjects";
import Testimonials from "./Testimonials";
import HomeProducts from "../components/HomeProducts";
import HomeClients from "../components/HomeClients";
import Clients from "./Clients";
import HomeTestimonials from "../components/HomeTestimonials";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 px-4 md:px-12">
      <Hero />
      <HomeServices />
      <HomeProjects />
      <HomeProducts />
      
      <div className="hidden lg:block">
      <HomeClients />
      </div>
      {/* Show Testimonials on smaller devices */}
      <div className="block lg:hidden">
        <Clients />
      </div>
      <div className="hidden lg:block">
        <HomeTestimonials />
      </div>
      {/* Show Testimonials on smaller devices */}
      <div className="block lg:hidden">
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
