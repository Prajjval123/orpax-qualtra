import React, { useContext } from "react";
import Hero from "../components/Hero";
import HomeServices from "../components/HomeServices";
import HomeProjects from "../components/HomeProjects";
import HomeProducts from "../components/HomeProducts";
import HomeClients from "../components/HomeClients";
import HomeTestimonials from "../components/HomeTestimonials";
import { GlobalContext } from "../context/GlobalContext";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Home = () => {
  const { loading, error, homepageData } = useContext(GlobalContext);

  if (loading || error || !homepageData) {
    return (
      <div className="text-center absolute top-[50%] left-[50%]">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-500 mx-auto"></div>
        <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col gap-10 px-8 md:px-8 lg:px-12 overflow-x-hidden">
      <Hero />
      <HomeServices />
      <HomeProjects />
      <HomeProducts />
      <HomeClients />
      <HomeTestimonials />

      {/* Large screen images only */}
      {/* 
        Use `hidden lg:block absolute ...` 
        so these appear on lg+ but remain hidden on mobile/tablet. 
      */}

      {/* Example #1 */}
      <img
        src="/assets/For_Developing/Background/Dot.png"
        className="hidden lg:block absolute top-20 right-60 w-80 h-80 bg-blue-800 opacity-100 rounded-full blur-[60px] mix-blend-lighten animate-fade-in-slow"
      />

      {/* Example #2 */}
      <img
        src="/assets/For_Developing/Background/Dot.png"
        className="hidden lg:block absolute top-[600px] right-96 w-80 h-80 bg-blue-800 opacity-20 rounded-full blur-[60px] mix-blend-lighten"
      />

      {/* Example #3 (motion lines) */}
      <img
        src="/assets/For_Developing/Background/Motion_Line.png"
        alt="Motion Line"
        className="hidden lg:block absolute top-[12rem] left-[28rem]"
      />
      <img
        src="/assets/For_Developing/Background/Motion_Line.png"
        alt="Motion Line"
        className="hidden lg:block absolute top-[18rem] left-[16rem]"
      />

      {/* Example #4 */}
      <img
        src="/assets/For_Developing/Background/Dot.png"
        className="hidden lg:block absolute top-[120rem] left-[60rem] w-10 h-10 mr-52"
      />
      <img
        src="/assets/For_Developing/Background/Dot.png"
        className="hidden lg:block absolute top-[125rem] right-[60rem] w-20 h-20 mr-52"
      />
      <img
        src="/assets/For_Developing/Background/Dot.png"
        className="hidden lg:block absolute top-[125rem] right-[4rem] w-5 h-5 mr-52"
      />
      <img
        src="/assets/For_Developing/Background/Dot.png"
        className="hidden lg:block absolute bottom-[1000px] right-20 w-80 h-80 bg-blue-800 opacity-30 rounded-full blur-[80px]"
      />
      <img
        src="/assets/For_Developing/Background/Dot.png"
        className="hidden lg:block absolute top-[190rem] left-[60rem] w-10 h-10 mr-52"
      />
      <img
        src="/assets/For_Developing/Background/Dot.png"
        className="hidden lg:block absolute top-[190rem] right-[60rem] w-20 h-20 mr-52"
      />
      <img
        src="/assets/For_Developing/Background/Dot.png"
        className="hidden lg:block absolute top-[190rem] right-[4rem] w-10 h-10 mr-52"
      />
      <img
        src="/assets/For_Developing/Background/Dot.png"
        className="hidden lg:block absolute top-[195rem] right-[1rem] w-4 h-4 mr-52"
      />

      {/* Clients */}
      <img
        src="/assets/For_Developing/Background/Dot.png"
        className="hidden lg:block absolute top-[240rem] left-[10rem] w-20 h-20 mr-52"
      />
      <img
        src="/assets/For_Developing/Background/Dot.png"
        className="hidden lg:block absolute top-[240rem] right-[10rem] w-20 h-20 mr-52"
      />

      {/* Testimonials */}
      <img
        src="/assets/For_Developing/Background/Dot.png"
        className="hidden lg:block absolute top-[265rem] left-[20rem] w-10 h-10 mr-52"
      />
      <img
        src="/assets/For_Developing/Background/Dot.png"
        className="hidden lg:block absolute top-[290rem] left-[2rem] w-10 h-10 mr-52"
      />

      <ScrollToTopButton />
    </div>
  );
};

export default Home;
