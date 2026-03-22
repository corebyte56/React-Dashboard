import { ChevronDown } from 'lucide-react'
import React from 'react'

const CustomerHeader = () => {
  return (
    <div className='flex justify-between py-7'>
      <h2 className='text-[20px] font-semibold'>Customers</h2>
      <a className='flex items-center gap-3 text-[#454545]' href="/">Sort by Newest <ChevronDown/></a>  
    </div>
  )
}

export default CustomerHeader
