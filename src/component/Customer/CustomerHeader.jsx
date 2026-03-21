import { ChevronDown } from 'lucide-react'
import React from 'react'

const CustomerHeader = () => {
  return (
    <div className=''>
      <h2 className='text-[20px] font-semibold'>Customers</h2>
      <a href="/">Sort by Newest <ChevronDown/></a>  
    </div>
  )
}

export default CustomerHeader
