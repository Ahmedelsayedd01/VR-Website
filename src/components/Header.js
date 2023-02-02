import React from "react";

//import Components
import Logo from "../assets/img/logo.svg";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-6">
      <div className="">
        <div className="flex items-center justify-between">
          {/* logo */}
          <a href="#">
            <img className="h-[30px]" src={Logo} alt="" />
          </a>
          {/* nav */}
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
