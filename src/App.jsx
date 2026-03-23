import React from "react";
import SideBar from "./component/sidebar/Sidebar";
import StatsCard from "./component/Stats-Cards/StatsCard";
import Customer from "./component/Customer/Customer";
import Growth from "./component/Growth/Growth";
import Chats from "./component/Chats/Chats";
import TopStates from "./component/Top States/TopStates";
import NewDeals from "./component/New deals/NewDeals";
import TopCards from "./component/Top cards/TopCards";

const App = () => {
  return (
    <div className="min-h-screen bg-[#F6F6F3] flex">
      <aside className="w-87.5 sticky top-0  h-screen py-4 px-3 bg-[#F6F6F3]">
        <SideBar />
      </aside>

      <main className="flex-1 py-4 px-7 grid grid-cols-6 grid-rows-[auto_1fr_1fr_1fr] gap-4">
        <div className="col-span-6">
          <StatsCard />
        </div>

        <div className="col-span-3 row-span-3 bg-white rounded-2xl  p-6 overflow-hidden">
          <Customer />
        </div>

        <div className="col-span-3 row-span-2 bg-white rounded-2xl p-6">
          <Growth />
        </div>

        <div className="col-span-3">
          <TopCards />
        </div>

        <div className="col-span-2 bg-white rounded-2xl  p-6">
          <Chats />
        </div>

        <div className="col-span-2 bg-white rounded-2xl p-6">
          <TopStates />
        </div>
        <div className="col-span-2 bg-white rounded-2xl  p-6">
          <NewDeals />
        </div>
      </main>
    </div>
  );
};
export default App;
