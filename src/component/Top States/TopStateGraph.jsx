import React from "react";
const data = [
  { state: "NY", value: 120, percent: 90 },
  { state: "MA", value: 80, percent: 70 },
  { state: "NH", value: 70, percent: 60 },
  { state: "OR", value: 50, percent: 45 },
];

const TopStateGraph = () => {
  return (
    
    <div className="bg-white p-5 w-full rounded-2xl">
     
      <div className="flex flex-col gap-2">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-linear-to-r from-[#FFCD71] to-[white] h-8 rounded-md flex items-center justify-between px-3 text-sm"
            style={{ width: item.width }}
          >
            <span className="font-semibold text-[14px]">{item.state}</span>
            <span className="text-[10px] font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopStateGraph;
