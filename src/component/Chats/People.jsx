import React from 'react'
import Img1 from '../../assets/c1.png';
import Img2 from '../../assets/c2.png';
import Img3 from '../../assets/c3.png';
import Img4 from '../../assets/c4.png';

const People = () => {
  return (
    <div className='flex gap-7'>
      <img className='p-6 cursor-pointer hover:bg-[#FFF7E8] rounded-2xl' src={Img1} alt="" />
      <img className='p-6 cursor-pointer hover:bg-[#FFF7E8] rounded-2xl' src={Img2} alt="" />
      <img className='p-6 cursor-pointer hover:bg-[#FFF7E8] rounded-2xl' src={Img3} alt="" />
      <img className='p-6 cursor-pointer hover:bg-[#FFF7E8] rounded-2xl' src={Img4} alt="" />
    </div>
  )
}

export default People
