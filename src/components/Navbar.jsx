import React, { useState } from "react";
import logo from "/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { RiMenu2Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

const links = [
  { name: "Home", go: "/" },
  { name: "Our menus", go: "/about" },
  { name: "Meal plans", go: "/about" },
  { name: "Catering", go: "/services" },
  { name: "How it work", go: "/contact" },
  { name: "Testimonials", go: "/blog" },
  { name: "FAQ", go: "/faq" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 md:w-[90%] w-[95%] shadow-sm p-4">
      {/* Your content here */}

      <header className="md:flex md:justify-between justify-center md:items-center  ">
        <Link to="/" className="mt-3">
          <img
            src={logo}
            alt="Logo"
            className=" h-14 hover:scale-105 transition-all "
          />
        </Link>
        <div
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <IoCloseSharp /> : <RiMenu2Fill />}
        </div>
        <ul
          className={`md:flex md:items-center md:gap-10 gap-20 font-semibold text-lg md:pb-0 pb-12 md:static md:z-auto z-[10] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-in relative bg-green-500 md:bg-white text-white ${
            isOpen ? "top-5" : "left-[-490px]"
          } `}
        >
          {links.map((item, idx) => (
            <li key={idx}>
              <NavLink
                to={item.go}
                
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-800 text-[15px]" : "text-gray-700 text-[15px]"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <div className="relative">
            <FaRegCircleUser className="md:hidden" />
          </div>
        </ul>
        <FaRegCircleUser className="hidden md:block" />
      </header>
    </div>
  );
};

export default Navbar;
