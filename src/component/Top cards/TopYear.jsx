import React from 'react'

const TopYear = () => {
  return (
    <div className='bg-amber-100 py-8 px-10 flex flex-col item-start gap-4 w-fit rounded-2xl'>
      <h3 className='font-semibold text-[#7D7D7D] text-[18px]'>Top year</h3>
      <div>
        <h1 className='font-semibold text-[#734A00] text-2xl'>2023</h1>
        <h3 className='text-[#454545] text-[18px]'>96K sold so far</h3>
      </div>
    </div>
  )
}

export default TopYear
