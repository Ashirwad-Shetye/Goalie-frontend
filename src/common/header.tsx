import React from "react";
import logo from "../styles/assets/logo/logo.png";

const Header = ({ children }: any) => (
  <nav className="container relative mx-auto flex h-28 z-20 items-center bg-blue-200">
    <section className="top-8 w-36 lg:left-4 cursor-pointer">
      <img src={logo} alt="goalie logo" />
    </section>
    {children}
  </nav>
);

export default Header;
