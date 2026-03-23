import React from 'react'
import SideBar from './component/sidebar/Sidebar'
import StatsCard from './component/Stats-Cards/StatsCard'
import Customer from './component/Customer/Customer'
import Growth from './component/Growth/Growth'
import Chats from './component/Chats/Chats'
import TopStates from './component/Top States/TopStates'
import NewDeals from './component/New deals/NewDeals'
import TopCards from './component/Top cards/TopCards'

const App = () => {
  return (
    <div className="min-h-screen bg-[#F6F6F3] p-6">
      
      <div className="grid grid-cols-[260px_1fr_1fr_1fr] gap-6  mx-auto">
        
        
        <aside className="row-span-4"> 
          <SideBar />
        </aside>

        
        <div className="col-span-3">
           <StatsCard /> 
        </div>

       
        <div className="col-span-2 bg-white rounded-2xl shadow-sm p-4">
          <Customer />
        </div>
        <div className="col-span-1 bg-white rounded-2xl shadow-sm p-4">
          <Growth />
        </div>

        
        <div className="col-span-2 bg-white rounded-2xl shadow-sm p-4">
          <Chats />
        </div>
        <div className="col-span-1 bg-white rounded-2xl shadow-sm p-4">
          <TopCards />
        </div>

        
        <div className="col-span-1 bg-white rounded-2xl shadow-sm p-4">
          <TopStates />
        </div>
        <div className="col-span-2 bg-white rounded-2xl shadow-sm p-4">
          <NewDeals />
        </div>

      </div>
    </div>
  )
}

export default App