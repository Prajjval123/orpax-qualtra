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
    <div className="flex flex-col gap-40 px-12">
      <div className="relative flex flex-col pb">
        <div className="relative z-10 flex flex-col gap-8">
          <Header />
          <Hero />
        </div>
      </div>
      <HomeServices />
      <HomeProjects />
      <HomeProducts />
      <Testimonials />
      <Clients />
    </div>
  );
};

export default Home;
