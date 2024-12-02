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
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="flex flex-col gap-20 px-12">
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
