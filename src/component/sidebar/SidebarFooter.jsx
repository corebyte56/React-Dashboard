import React from 'react'
import SidebarUser from './sidebaruser'
import SidebarSetting from './SidebarSetting'
import Logout from './Logout'
const SidebarFooter = () => {
  return (
    <div className='mt-50 mb-5 space-y-1'>
      <SidebarUser />
      <SidebarSetting />
      <Logout />
    </div>
  )
}

export default SidebarFooter
