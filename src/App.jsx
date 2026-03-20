import React from 'react'
import SideBar from './component/sidebar/Sidebar'
import StatsCard from './component/Stats-Cards/StatsCard'
const App = () => {
  return (
    <div className='bg-[#F6F6F3] p-4 h-screen flex gap-4'>
      <SideBar />
      <StatsCard/>
    </div>
  )
}

export default App
  