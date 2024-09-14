import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img from "/profile.png";

const Feedbacks = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      title: "CEO of Company",
      message:
        "This service has been outstanding and beyond our expectations. Highly recommended!",
      rating: 5,
      avatar: img,
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Marketing Manager",
      message:
        "Working with them has been a game-changer for our business. Excellent results!",
      rating: 4,
      avatar: img,
    },
    {
      id: 3,
      name: "Michael Johnson",
      title: "Freelancer",
      message:
        "Great experience! The team was professional and the results were amazing.",
      rating: 5,
      avatar: img,
    },
    {
      id: 4,
      name: "Emily Brown",
      title: "Startup Founder",
      message:
        "I highly recommend them. Their expertise helped us scale quickly.",
      rating: 4.5,
      avatar: img,
    },
  ];

  return (
    <div>
      <div className="md:my-20 my-10">
        <p className="md:text-5xl text-xl font-semibold text-center ">
          Feedbacks
        </p>
      </div>
      <div className="gap-24">
        <Carousel responsive={responsive}>
          {testimonials.map((item, idx) => (
            <div className="md:p-2 bg-slate-100 items-center gap-2 md:mr-10 py-9 flex">
              <img src={item.avatar} alt="" className="rounded-full w-24  h-24" />
              <div>
                <h3 className="text-md font-semibold ">{item.name}</h3>
                <p className="text-sm">{item.message}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Feedbacks;
