import React from 'react'
import SidebarUser from './sidebaruser'
import SidebarSetting from './SidebarSetting'
import Logout from './Logout'
const SidebarFooter = () => {
  return (
    <div>
      <SidebarUser />
      <SidebarSetting />
      <Logout />
    </div>
  )
}

export default SidebarFooter
