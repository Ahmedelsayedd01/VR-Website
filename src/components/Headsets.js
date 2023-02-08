import React from "react";

// import image
import Headsets1 from "../assets/img/headset-1.png";
import Headsets2 from "../assets/img/headset-2.png";
import Headsets3 from "../assets/img/headset-3.png";
import Headsets4 from "../assets/img/headset-4.png";

const Headsets = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto">
        {/* title */}
        <h2 className="text-3xl font-bold mb6">Mixed Reality Headsets</h2>
        {/* grid */}
        <div className="grid gap-y-4 lg:grid-cols-2 lg:gap-9">
          {/* item 1 */}
          <div className="relative">
            <img src={Headsets1} alt="" />
            <div
              className="absolute bottom-0 bg-white/20
          backdrop-blur-md max-w-[300px] min-h-[]150px p-6"
            >
              <h4 className="font-semibold text-xl mb-2">Metaverse</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                in neque non est semper malesuada.
              </p>
            </div>
          </div>
          {/* item 2 */}
          <div className="relative">
            <img src={Headsets2} alt="" />
            <div
              className="absolute bottom-0 bg-white/20
          backdrop-blur-md max-w-[300px] min-h-[]150px p-6"
            >
              <h4 className="font-semibold text-xl mb-2">AIoT</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                in neque non est semper malesuada.
              </p>
            </div>
          </div>
          {/* item 3 */}
          <div className="relative">
            <img src={Headsets3} alt="" />
            <div
              className="absolute bottom-0 bg-white/20
          backdrop-blur-md max-w-[300px] min-h-[]150px p-6"
            >
              <h4 className="font-semibold text-xl mb-2">HoloLens</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                in neque non est semper malesuada.
              </p>
            </div>
          </div>
          {/* item 4 */}
          <div className="relative">
            <img src={Headsets4} alt="" />
            <div
              className="absolute bottom-0 bg-white/20
          backdrop-blur-md max-w-[300px] min-h-[]150px p-6"
            >
              <h4 className="font-semibold text-xl mb-2">TPCASTT</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                in neque non est semper malesuada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;
