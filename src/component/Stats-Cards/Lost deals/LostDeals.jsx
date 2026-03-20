import React from "react";
import LostDealsHeader from "./LostDealsHeader";
import LostDealsParcentage from "./LostDealsParcentage";
import LostDealsText from "./LostDealsText";
import AllDeals from "./AllDeals";

const LostDeals = () => {
  return (
    <div className="bg-white px-6 py-5 rounded-2xl w-115 space-y-9">
      <div className="px-6 py-5 space-y-4">
        <LostDealsHeader />
        <LostDealsParcentage />
        <LostDealsText />
      </div>
      <AllDeals />
    </div>
  );
};

export default LostDeals;
