import React, { useState } from "react";

// import Components
import Banner from "./components/Banner";
import Header from "./components/Header";
import NavMobile from "./components/NavMobile";
//import Icon
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const App = () => {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <div>
      <div className="relative container mx-auto">
        <Header />
        {/* nav mobile btn open */}
        <HiMenu
          onClick={() => setNavMobile(true)}
          className="lg:hidden absolute top-[33%] right-[4%]
          text-3xl text-white cursor-pointer"
        />
      </div>

      <Banner />

      {/* mobile nav */}
      <div
        className={`${
          navMobile ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-48 transition-all`}
      >
        {/* nav mobile btn close */}
        <IoClose
          onClick={() => {
            setNavMobile(false);
          }}
          className="text-3xl absolute left-4
      top-6 cursor-pointer"
        />
        <NavMobile />
      </div>
    </div>
  );
};

export default App;
