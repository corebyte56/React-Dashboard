import React from 'react'
import TopMonth from './TopMonth'
import TopYear from './TopYear'
import TopBuyer from './TopBuyer'

const TopCards = () => {
  return (
    <div id='topCards' className='flex flex-wrap gap-4 justify-between w-full'>
      <TopMonth/>
      <TopYear/>
      <TopBuyer/>
    </div>
  )
}

export default TopCards
