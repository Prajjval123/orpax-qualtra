import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HomeServices from "../components/HomeServices";
import HomeProjects from "../components/HomeProjects";
import Projects from "./Projects";
import Products from "./Products";
import Testimonials from "./Testimonials";
import Clients from "./Clients";
import HomeProducts from "../components/HomeProducts";

const Home = () => {
  return (
    <div className="flex flex-col gap-40">
      <Hero />
      <HomeServices />
      <HomeProjects />
      <HomeProducts />
      <Testimonials />
      <Clients />
    </div>
  );
};

export default Home;
