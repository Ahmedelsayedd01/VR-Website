import React, { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import NavMobile from "./components/NavMobile";

// import Components

const App = () => {
  const [navMobile, setNavMobile] = useState(true);
  return (
    <div>
      <Header etNavMobile={setNavMobile} />
      <Banner />
      {/* mobile nav */}
      <div
        className={`${
          navMobile ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-48 transition-all`}
      >
        <NavMobile etNavMobile={setNavMobile} />
      </div>
    </div>
  );
};

export default App;
