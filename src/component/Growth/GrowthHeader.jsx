import { ChevronDown } from 'lucide-react'
import React from 'react'

const GrowthHeader = () => {
  return (
    <div className='flex justify-between py-7'>
      <h2 className='text-[20px] font-semibold'>Growth</h2>
      <a className='flex items-center gap-3 text-[#454545]' href="/">Yearly <ChevronDown/></a>  
    </div>
  )
}

export default GrowthHeader
