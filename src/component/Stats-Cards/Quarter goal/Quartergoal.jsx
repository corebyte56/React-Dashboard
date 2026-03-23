import React from "react";
import QuarterGoalHeader from "./QuarterGoalHeader";
import QuarterGoalChart from "./QuarterGoalChart";
import AllGoal from "./AllGoal";


const Quartergoal = () => {
  return (
    <div id="quarter" className="bg-white px-3 py-2 rounded-2xl w-70 h-full items-center text-center">
      <div className="flex flex-col items-center px-3 py-2">
        <QuarterGoalHeader />
        <div className="w-fit">
            <QuarterGoalChart />
        </div>
        
        <div className="-mt-8">
            <AllGoal />
        </div>
      </div>
      
    </div>
  );
};

export default Quartergoal;
