import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import frame from "/Frame 3.png";
import subtract from "/Subtract.png";
// import { GoArrowUpRight } from "react-icons/go";

const HeroSection = () => {
  return (
    <div className="md:my-56 my-20 grid md:grid-cols-2 gap-20 md:gap-5">
      <div className="flex flex-col mt-6 leading-10">
        <h1 className="text-5xl tracking-wide font-semibold leading-snug text-black">
          Keep track of <br />
          <span className="text-green-500"> Fitness Goal</span>
        </h1>
        <p className="text-2xl font-semibold text-green-800">
          Order on Simply Good Food
        </p>
        <button className="px-4 py-1 mt-2 bg-[#FDB64E] rounded-md md:w-1/3 w-1/2 text-white flex items-center gap-1">
          <span>Expolor Menu</span>
          <GoArrowUpRight className="font-semibold" />
        </button>
      </div>
      <div className="flex justify-center items-center relative">
        <img src={subtract} alt="" className="absolute animate-spin slow" />
        <img src={frame} alt="" className="relative" />
      </div>
    </div>
  );
};

export default HeroSection;
