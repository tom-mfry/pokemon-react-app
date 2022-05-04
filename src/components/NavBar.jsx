import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 h-12 w-screen flex flex-row items-center justify-evenly bg-secondary-color shadow-lg border-b-2 border-black z-20">
        <NavBarHeading text={"POKE-DEX"} />
      </div>
      <div className="h-12 w-screen opacity-0"></div>
    </>
  );
};

const NavBarHeading = ({ text }) => {
  return (
    <div className="nav-main group w-[60%]">
      <div className="skew-x-[15deg] flex items-center tracking-wide justify-">
        {text}
      </div>
    </div>
  );
};

export default NavBar;
