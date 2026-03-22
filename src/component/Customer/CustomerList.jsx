import React from "react";
import { EllipsisVertical} from "lucide-react";
import Img1 from '../../assets/c1.png';
import Img2 from '../../assets/c2.png';
import Img3 from '../../assets/c3.png';
import Img4 from '../../assets/c4.png';

const customerinfo = [
  { name: "Chris Friedkly", company: 'Supermarket Villanova', icon: <EllipsisVertical/> , img: Img1 },
  { name: "Maggie Johnson", company: 'Oasis Organic Inc.', icon: <EllipsisVertical/>, img: Img2 },
  { name: "Gael Harry", company: 'New York Finest Fruits', icon: <EllipsisVertical/>, img: Img3 },
  { name: "Jenna Sullivan", company: 'Walmart', icon: <EllipsisVertical/>, img: Img4 },
];

const CustomerList = () => {
    

  return (
    <div>
        {
            customerinfo.map((item, index) => (
               <div className=" flex items-center justify-between border border-transparent rounded-2xl hover:bg-[#FFF7E8] my-4 py-2 px-3 cursor-pointer">
                
                 <div key={index} className="flex items-center gap-5 mb-5"> 
                  <img className="w-10 h-10" src={item.img} alt="" /> 
                    <div className="flex flex-col">
                      <h3 className="font-medium text-[18px]">
                      {item.name}
                    </h3> 
                    <p className="text-[#454545] ">
                      {item.company}
                    </p>
                    </div>
                </div>
                <div>
                  {item.icon}
                </div>
                
               </div>
            ))
        }
    </div>
  );
};

export default CustomerList;
