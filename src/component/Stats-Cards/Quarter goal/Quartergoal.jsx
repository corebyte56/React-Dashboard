import React from "react";
import QuarterGoalHeader from "./QuarterGoalHeader";
import QuarterGoalChart from "./QuarterGoalChart";
import AllGoal from "./AllGoal";

const Quartergoal = () => {
  return (
    <div className="bg-white px-6 py-5 rounded-2xl w-fit">
      <div className="flex flex-col items-center px-6 py-5 ">
        <QuarterGoalHeader />
        
            <QuarterGoalChart />
        <AllGoal />
        
      </div>
    </div>
  );
};

export default Quartergoal;
