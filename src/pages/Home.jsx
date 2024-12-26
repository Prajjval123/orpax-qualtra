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
    <div className="relative flex flex-col gap-10 px-8 md:px-8 lg:px-12">
      <Hero />
      <HomeServices />
      <HomeProjects />
      <HomeProducts />
      <HomeClients />
      <HomeTestimonials />
      {/* project images */}
      <img
            src="/assets/For_Developing/Background/Dot.png"
            className="absolute top-[120rem] left-[60rem] w-10 h-10 mr-52"
          />
          <img
            src="/assets/For_Developing/Background/Dot.png"
            className="absolute top-[125rem] right-[60rem]  w-20 h-20 mr-52"
          />
          <img
            src="/assets/For_Developing/Background/Dot.png"
            className="absolute top-[125rem] right-[4rem]  w-5 h-5 mr-52"
          />
{/* productimage  */}
<img
            src="/assets/For_Developing/Background/Dot.png"
            className="absolute top-[190rem] left-[60rem] w-10 h-10 mr-52"
          />
          <img
            src="/assets/For_Developing/Background/Dot.png"
            className="absolute top-[190rem] right-[60rem] w-20 h-20 mr-52"
          />
          <img
            src="/assets/For_Developing/Background/Dot.png"
            className="absolute top-[190rem] right-[4rem]  w-10 h-10 mr-52"
          />
          <img
            src="/assets/For_Developing/Background/Dot.png"
            className="absolute top-[195rem] right-[1rem]  w-4 h-4 mr-52"
          />
          <img
            src="/assets/For_Developing/Background/Dot.png"
            className="absolute top-[190rem] left-[4rem]  w-5 h-5 mr-52"
          />

          {/* clients */}
          <img
            src="/assets/For_Developing/Background/Dot.png"
            className="absolute top-[240rem] left-[10rem]  w-20 h-20 mr-52"
          />
          <img
            src="/assets/For_Developing/Background/Dot.png"
            className="absolute top-[240rem] right-[10rem]  w-20 h-20 mr-52"
          />

          {/* testimonial */}
          <img
            src="/assets/For_Developing/Background/Dot.png"
            className="absolute top-[265rem] left-[20rem] w-10 h-10 mr-52"
          />
          <img
            src="/assets/For_Developing/Background/Dot.png"
            className="absolute top-[290rem] left-[2rem]  w-10 h-10 mr-52"
          />
    </div>
  );
};

export default Home;
