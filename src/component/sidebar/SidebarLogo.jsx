import React from "react";
import Logo from '../../assets/Logomark.png'
const SidebarLogo = () => {
  return (
    <div className="flex gap-1.5 p-5">
      <img className="w-10" src={Logo} alt="Logo" />
      <h1 className="font-semibold text-3xl">OrangeFarm</h1>
    </div>
  )
};

export default SidebarLogo;
