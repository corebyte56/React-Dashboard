import { PlusIcon } from "lucide-react";
import React from "react";

const deals = [
  "Fruit2Go",
  "Marshall's MKT",
  "CCNT",
  "Joana Mini-market",
  "Little Brazil Vegan",
  "Target",
  "Organic Place",
  "Morello's",
];
const NewDealsBody = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {deals.map((items, idx) => (
        <div
          key={idx}
          className="flex items-center gap-2 px-4 py-3 bg-orange-50 border border-transparent rounded-2xl hover:border-orange-200 cursor-pointer transition-all"
        >
          <PlusIcon size={18} className="text-orange-500 border rounded-lg" />

          <span className="text-orange-900 font-medium text-sm">{items}</span>
        </div>
      ))}
    </div>
  );
};

export default NewDealsBody;
