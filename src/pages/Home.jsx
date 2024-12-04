import React from "react";
import Hero from "../components/Hero";
import HomeServices from "../components/HomeServices";
import HomeProjects from "../components/HomeProjects";
import Testimonials from "./Testimonials";
import HomeProducts from "../components/HomeProducts";
import HomeClients from "../components/HomeClients";
import Clients from "./Clients";

const Home = () => {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <HomeServices />
      <HomeProjects />
      <HomeProducts />
      <Testimonials />
      <div className="hidden md:block"><HomeClients /></div>
      <div className="md:hidden"><Clients /></div>
    </div>
  );
};

export default Home;
