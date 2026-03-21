import React from "react";
import { LayoutDashboard, User, ClipboardMinus, Globe } from "lucide-react";

const customerinfo = [
  { name: "Chris Friedkly",      company: 'Supermarket Villanova',     icon: <LayoutDashboard /> },
  { name: "Maggie Johnson",      company: 'Oasis Organic Inc.',        icon: <User /> },
  { name: "Gael Harry" ,         company: 'New York Finest Fruits',    icon: <ClipboardMinus /> },
  { name: "Jenna Sullivan",      company: 'Walmart',                   icon: <Globe /> },
];

const CustomerList = () => {
    

  return (
    <div>
        {
            customerinfo.map((item, index) => (
               <div>
                 <p key={index}> 
                {item.name} {item.icon}
                </p>
                
               </div>
            ))
        }
    </div>
  );
};

export default CustomerList;
