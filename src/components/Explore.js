import React from "react";

const Explore = () => {
  return (
    <section className="min-h-[400px] mb-16 lg:mb-4">
      <div className="container mx-auto h-full">
        <div className="h-full bg-explore bg-no-repeat
        bg-cover p-14 flex flex-col items-start
        justify-center">
          <h3>Explore product in new way</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque
            lobortis fringilla ante vel ornare. Nunc luctus lectus ut dui
            tristique.
          </p>
          {/* Form */}
          <form className="flex flex-col w-full space-y-4
          gap-x-4 lg:flex-row lg:space-y-0">
            <input
              className="bg-gradient-to-t from-[#341D38]
            to-[#271223] h-12 px-4 outline-none
            rounded-md"
              type="text"
              placeholder="Your email"
            />
            <button className="btn">Start</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Explore;
