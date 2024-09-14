import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Accordion = () => {
  return (
    <>
      <div className="my-20">
        <p className="md:text-5xl text-3xl font-semibold text-center ">
          New & Trending Menu
        </p>
        <p className="md:mb-10 mt-4 items-center +
        
        md:text-sm md:text-center">Simply Good Food prepares and delivers organically sourced, fresh meals to your door nationwide. Unlike other meal kit delivery services that need preparation and cleaning, our meals are delivered ready to consume. Our mission is to make healthy eating easy and enjoyable while not sacrificing flavor. Do you have a question regarding our shipping service?</p>
      </div>
      <div className="space-y-2">
        <div className="collapse collapse-plus bg-base-200">
          <input
            type="radio"
            name="my-accordion-3"
            className="text-orange-400"
          />
          <div className="collapse-title  font-medium text-[#3E3E3E] text-base">
            What are the foods like Steel Yat? How does the mail plan work?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input
            type="radio"
            name="my-accordion-3"
            className="text-orange-400"
          />
          <div className="collapse-title  font-medium text-[#3E3E3E] text-base">
            How Do I Eat Fresh and Lean?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input
            type="radio"
            name="my-accordion-3"
            className="text-orange-400"
          />
          <div className="collapse-title  font-medium text-[#3E3E3E] text-base">
            How long do my meals last?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input
            type="radio"
            name="my-accordion-3"
            className="text-orange-400"
          />
          <div className="collapse-title  font-medium text-[#3E3E3E] text-base">
            How long do my meals last?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input
            type="radio"
            name="my-accordion-3"
            className="text-orange-400"
          />
          <div className="collapse-title  font-medium text-[#3E3E3E] text-base">
            How long do my meals last?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
