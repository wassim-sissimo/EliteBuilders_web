import React from "react";
import { LandingCarousel } from "../Carousel";

const Hero = () => {
  return (
    <div className="relative h-screen bg-[#073a68] flex items-center justify-center">
      <div className="absolute w-[60%] h-[50%] bg-[#4796A8] opacity-30 rounded-3xl blur-[100px] animate-slow-pulse"></div>
      <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-[#F4E9B5] text-4xl font-bold z-10">
        Faisons de votre environnement un lieu unique
      </h1>
      <div className="absolute bottom-[-200px] left-1/2 transform -translate-x-1/2 w-[60%] h-[60%] rounded-3xl">
        <LandingCarousel />
      </div>
    </div>
  );
};

export default Hero;
