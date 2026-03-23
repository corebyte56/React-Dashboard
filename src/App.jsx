import React from 'react';
import SideBar from './component/sidebar/Sidebar';
import StatsCard from './component/Stats-Cards/StatsCard';
import Customer from './component/Customer/Customer';
import Growth from './component/Growth/Growth';
import Chats from './component/Chats/Chats';
import TopStates from './component/Top States/TopStates';
import NewDeals from './component/New deals/NewDeals';
import TopCards from './component/Top cards/TopCards';

const App = () => {
  return (
    <div className="min-h-screen bg-[#F6F6F3] p-6 flex gap-6">
      {/* Fixed Sidebar */}
      <aside className="">
        <SideBar />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 grid grid-cols-3 gap-6 auto-rows-min">
        {/* Row 1: StatsCard (Revenue, Lost, Goal) */}
        <div className="col-span-3">
          <StatsCard />
        </div>

        {/* Row 2: Customer (Left 2/3) & Growth (Right 1/3) */}
        <div className="col-span-2 bg-white rounded-2xl shadow-sm p-6">
          <Customer />
        </div>
        <div className="col-span-1 bg-white rounded-2xl shadow-sm p-6">
          <Growth />
        </div>

        {/* Row 3: TopCards (Month, Year, Buyer) */}
        <div className="col-span-3 row-span-1">
          <TopCards />
        </div>

        {/* Row 4: Chats, TopStates, NewDeals (1 column each) */}
        <div className="col-span-1 bg-white rounded-2xl shadow-sm p-6">
          <Chats />
        </div>
        <div className="col-span-1 bg-white rounded-2xl shadow-sm p-6">
          <TopStates />
        </div>
        <div className="col-span-1 bg-white rounded-2xl shadow-sm p-6">
          <NewDeals />
        </div>
      </main>
    </div>
  );
};

export default App;