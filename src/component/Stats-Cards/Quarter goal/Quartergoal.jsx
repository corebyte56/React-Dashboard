import React from "react";
import QuarterGoalHeader from "./QuarterGoalHeader";
import QuarterGoalChart from "./QuarterGoalChart";
import AllGoal from "./AllGoal";


const Quartergoal = () => {
  return (
    <div className="bg-white px-6 py-5 rounded-2xl w-fit items-center text-center">
      <div className="flex flex-col items-center px-6 py-5">
        <QuarterGoalHeader />
        <div className="-mt-6">
            <QuarterGoalChart />
        </div>
        
        <div className="-mt-6">
            <AllGoal />
        </div>
      </div>
      
    </div>
  );
};

export default Quartergoal;
