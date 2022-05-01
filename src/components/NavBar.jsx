import React from "react";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 h-12 w-screen flex flex-row items-center justify-evenly bg-secondary-color shadow-lg border-b-2 border-black">
      <NavBarHeading
        icon={<VscDebugBreakpointDataUnverified size="20" />}
        tooltip={"What's hot ?"}
        text={"Home"}
      />
      <NavBarHeading
        icon={<VscDebugBreakpointDataUnverified size="20" />}
        tooltip={"Add new server"}
        text={"Search"}
      />
      <NavBarHeading
        icon={<VscDebugBreakpointDataUnverified size="20" />}
        tooltip={"Trending"}
        text={"About"}
      />
      <NavBarHeading
        icon={<VscDebugBreakpointDataUnverified size="20" />}
        tooltip={"Settings"}
        text={"Contact"}
      />
    </div>
  );
};

const NavBarHeading = ({ text }) => {
  return (
    <div className="sidebar-icon group skew-x-[-15deg]">
      <div className="skew-x-[15deg] flex items-center tracking-wide justify-">
        <VscDebugBreakpointDataUnverified size="20" />
        {text}
      </div>
    </div>
  );
};

export default NavBar;
