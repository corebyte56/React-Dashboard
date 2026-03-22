import React from 'react'
import SidebarLogo from './SidebarLogo'
import Sidebarinput from './Sidebarinput'
import SidebarCatagory from './SidebarCatagory'
import SidebarFooter from './SidebarFooter'


const Sidebar = () => {
  return (
    <div className= 'sidebar bg-white rounded-2xl px-4 py-3 space-y-4 min-w-fit w-fit'>
      <SidebarLogo />
      <Sidebarinput />
      <SidebarCatagory />
      <SidebarFooter />
    </div>
  )
}

export default Sidebar
