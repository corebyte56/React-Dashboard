import React from "react";
import SidebarLogo from "./SidebarLogo";
import Sidebarinput from "./Sidebarinput";
import SidebarCatagory from "./SidebarCatagory";
import SidebarFooter from "./SidebarFooter";

const Sidebar = () => {
  return (
    <div
      id="sidebar"
      className=" bg-white rounded-2xl px-4 py-3 space-y-4 w-full h-full"
    >
      <SidebarLogo />
      <Sidebarinput />
      <SidebarCatagory />
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
