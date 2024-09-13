import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
       <marquee
        behavior="scroll"
        direction="left"
        className="h-10 text-white font-bold w-full flex flex-col items-center justify-center bg-[#FDB64e]"
      >
        %% Free shipping on all orders %%
      </marquee>
      <main className="w-[100%] mx-auto">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
};

export default App;
