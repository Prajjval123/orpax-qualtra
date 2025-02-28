import React, { useContext, useEffect, useState } from "react";
import Hero from "../components/Hero";
import HomeServices from "../components/HomeServices";
import HomeProjects from "../components/HomeProjects";
import HomeProducts from "../components/HomeProducts";
import HomeClients from "../components/HomeClients";
import HomeTestimonials from "../components/HomeTestimonials";
import { GlobalContext } from "../context/GlobalContext";
import FlickerImage from "../components/FlickerImage";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Home = () => {
  const { loading, error, homepageData } = useContext(GlobalContext);

  if (loading || error || !homepageData) {
    return (
      <div class="text-center absolute top-[50%] left-[50%]">
        <div class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-500 mx-auto"></div>
        <h2 class="text-zinc-900 dark:text-white mt-4">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col gap-10 px-8 md:px-8 lg:px-12">
      <Hero />
      <HomeServices />
      <HomeProjects />
      <HomeProducts />
      <HomeClients />
      <HomeTestimonials />

      {/* better one for computer bg blue light */}
      <img
        src="/assets/For_Developing/Background/Dot.png"
        className="hidden lg:block absolute top-20 right-60 w-80 h-80 bg-blue-800 opacity-100 rounded-full blur-[60px] mix-blend-lighten animate-fade-in-slow"
      />

      {/* Use for It service home cards */}
      <img
        src="/assets/For_Developing/Background/Dot.png"
        className="hidden lg:block absolute top-[600px] right-96 w-80 h-80 bg-blue-800 opacity-20 rounded-full blur-[60px] mix-blend-lighten "
      />
      {/* motion line */}
      <img
        src="/assets/For_Developing/Background/Motion_Line.png"
        alt="Motion Line"
        className="absolute top-[12rem] left-[28rem]"
      />
      <img
        src="/assets/For_Developing/Background/Motion_Line.png"
        alt="Motion Line"
        className="absolute top-[18rem] left-[16rem] "
      />

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
      <img
        src="/assets/For_Developing/Background/Dot.png"
        className="hidden lg:block absolute bottom-[1000px] right-20 w-80 h-80 bg-blue-800 opacity-30 rounded-full blur-[80px]  "
      />
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
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
