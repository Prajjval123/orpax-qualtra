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

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeServices />
      <HomeProjects />
      <Products />
      <Testimonials />
      <Clients />
    </div>
  );
};

export default Home;
