import React, { useEffect, useState } from "react";

//import Icon
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

// import Components
import Banner from "./components/Banner";
import Header from "./components/Header";
import NavMobile from "./components/NavMobile";
import Experience from "./components/Experience";
import Video from "./components/Video";
import Headsets from "./components/Headsets";
import Testimonial from "./components/Testimonial";
import Explore from "./components/Explore";

//import Aos Animation on Scroll
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";

const App = () => {
  const [navMobile, setNavMobile] = useState(false);

  // Aos initialization
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  return (
    <div>
      <div
        className="relative container mx-auto overflow-hidden
       before:w-[600px] before:h-[200px] before:bg-circle
       before:bg-no-repeat before:absolute before:-top-16
       before:left-[600px] before:hidden before:lg:flex"
      >
        <Header />
        {/* nav mobile btn open */}
        <HiMenu
          onClick={() => setNavMobile(true)}
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-delay="900"
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
      <Experience />
      <Video />
      <Headsets />
      <Testimonial />
      <Explore />
      <Footer />
    </div>
  );
};

export default App;
