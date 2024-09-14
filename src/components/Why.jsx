import React from "react";
import img1 from "/health.png";
import img2 from "/protin.png";
import img3 from "/unpending.jpg";

const Why = () => {
  const whyFood = [
    {
      img: img1,
      title: "Health awareness",
      heading:
        "Our portions are bigger. Meals designed to fill you up with the nutrients you need to perform at your best.",
    },
    {
      img: img2,
      title: "More Protein",
      heading:
        "Protein-rich meals to FUEL your workouts, improve recuperation, and increase outcomes.",
    },
    {
      img: img3,
      title: "Unending Variety",
      heading:
        "Select breakfasts, snacks, and bulk proteins/sides. You can change it up at any moment or stick with the same routine.",
    },
  ];
  return (
    <div className="mt-28">
      <p className="text-5xl font-semibold text-center mb-10 md:mb-14">
        Why Simply Good Food{" "}
      </p>
      <div className="grid md:grid-cols-3 items-center md:px-4 md:gap-4 gap-8">
        {whyFood.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-center"
          >
            <img src={item.img} alt={item.title} className="mb-4" />
            <h1 className="font-bold text-lg">{item.title}</h1>
            <h2 className="text-sm text-gray-500">{item.heading}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
