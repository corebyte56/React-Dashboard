import React from 'react'
import SideBar from './component/sidebar/Sidebar'
import StatsCard from './component/Stats-Cards/StatsCard'
import Customer from './component/Customer/Customer'
const App = () => {
  return (
    <div className='bg-[#F6F6F3] p-4 h-screen flex gap-4'>
      <SideBar />
      <StatsCard/>
      <Customer/>
    </div>
  )
}

export default App
  