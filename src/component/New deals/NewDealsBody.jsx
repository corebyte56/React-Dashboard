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
    <div>
        {
            deals.map((items, idx) => (
                <div key={idx}>
                    <p>{items}</p>
                </div>
            ))
        }
    </div>
  )
};

export default NewDealsBody;
