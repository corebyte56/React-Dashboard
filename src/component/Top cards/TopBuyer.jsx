import React from 'react'
import TopBuy from '../../assets/topbuy.png'

const TopBuyer = () => {
  return (
    <div className='bg-amber-100 py-8 px-10 flex flex-col item-start gap-4 w-fit rounded-2xl'>
      <h3 className='font-semibold text-[#7D7D7D] text-[18px]'>Top buyer</h3>
      <img className='w-7 h-7' src={TopBuy} alt="Top Buyer" />
      <div>
        <p className='font-medium text-[18px]'>Maggie Johnson</p>
        <h3 className='font-normal text-[#454545] text-[12px]'>Oasis Organic Inc.</h3>
      </div>
    </div>
  )
}

export default TopBuyer
