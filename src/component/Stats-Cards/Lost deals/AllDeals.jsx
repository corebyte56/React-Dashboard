import { MoveRight } from "lucide-react";
import React from "react";

const AllDeals = () => {
  return (
    <div className='px-6 py-5'>
      <a className="flex items-center gap-3 text-[#734A00] hover:text-orange-600" href="/">All deals <MoveRight/> </a>
    </div>
  );
};

export default AllDeals;
