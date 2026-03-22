import React from 'react'
import SideBar from './component/sidebar/Sidebar'
import StatsCard from './component/Stats-Cards/StatsCard'
import Customer from './component/Customer/Customer'
import Growth from './component/Growth/Growth'
import Chats from './component/Chats/Chats'
const App = () => {
  return (
    <div className='dashboard bg-[#F6F6F3] p-4 h-screen flex flex-col gap-4'>
      <SideBar />
      <StatsCard />
      <Customer/>
      <Growth/>
      <Chats/>
    </div>
  )
}

export default App
  