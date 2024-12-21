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
    <div className="flex flex-col gap-10 px-8 md:px-8 lg:px-12">
      <Hero />
      <HomeServices />
      <HomeProjects />
      <HomeProducts />
      <HomeClients />
      <HomeTestimonials />
    </div>
  );
};

export default Home;
