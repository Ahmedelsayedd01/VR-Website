import React from "react";

// import image
import Img1 from "../assets/img/exp-img1.png";
import Img2 from "../assets/img/exp-img2.png";

const Experience = () => {
  return (
    <section className="mb-12 lg:mb-12">
      <div className="container mx-auto">
        <div
          className="flex flex-col min-h-[480px]
        lg:space-x-20 lg:flex-row overflow-hidden"
        >
          <div
            className="flex-1 flex space-x-6
          items-center lg:space-x-12"
          >
            {/* image */}
            <div
              className="self-start"
              data-aos="fade-down"
              data-aos-offset="400"
            >
              <img src={Img1} alt="" />
            </div>
            <div className="self-end" 
            data-aos="fade-up">
              <img src={Img2} alt="" />
            </div>
          </div>
          {/* text */}
          <div
            className="flex-1 flex flex-col items-start
          justify-center mt-6 lg:mt-0"
            data-aos="fade-left"
            data-aos-offset="400"
          >
            <h2 className="text-3xl font-bold mb-6">
              New Experience In Playing Games
            </h2>
            <p className="font-secondary mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="btn">Get it now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
