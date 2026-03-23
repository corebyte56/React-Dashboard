import React from "react";
import RevenusHeader from "./RevenusHeader";
import RevenusParcentage from "./RevenusParcentage";
import RevenusText from "./RevenusText";
import RevenusReport from "./RevenusReport";

const Revenus = () => {
  return ( 
    <div id="revenue" className="bg-white px-6 py-5 rounded-2xl w-full h-full space-y-9">
      <div className="px-6 py-5 space-y-4">
        <RevenusHeader />
        <RevenusParcentage />
        <RevenusText />
      </div>
      <RevenusReport />
    </div>
  );
};

export default Revenus;
