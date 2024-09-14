import React from "react";
import HeroSection from "./HeroSection";
import Why from "./Why";
import Carousel from "./Carousel";
import Gallary from "./Gallary";
import Accordion from "./Accordion";
import Footer from "./Footer";
import Feedbacks from "./Feedbacks";

const Home = () => {
  return (
    <>
      <div className=" w-[80%] mx-auto">
        <HeroSection />
        <Why />
        <Carousel />
      </div>
      <Gallary />
      <div className=" w-[80%] mx-auto">
        <Accordion />
      </div>
      <Feedbacks />
      <div className="bg-[#f9f9f9] mt-32">
        <Footer />
      </div>
    </>
  );
};

export default Home;
