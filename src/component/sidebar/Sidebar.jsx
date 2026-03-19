import React from 'react'
import SidebarLogo from './SidebarLogo'
import Sidebarinput from './Sidebarinput'
import SidebarCatagory from './SidebarCatagory'
import SidebarFooter from './SidebarFooter'


const Sidebar = () => {
  return (
    <div className='bg-white rounded-2xl p-10 space-y-6 min-w-fit w-fit'>
      <SidebarLogo />
      <Sidebarinput />
      <SidebarCatagory />
      <SidebarFooter />
    </div>
  )
}

export default Sidebar
