import React from 'react'
import TopMonth from './TopMonth'
import TopYear from './TopYear'
import TopBuyer from './TopBuyer'

const TopCards = () => {
  return (
    <div className='flex gap-10'>
      <TopMonth/>
      <TopYear/>
      <TopBuyer/>
    </div>
  )
}

export default TopCards
