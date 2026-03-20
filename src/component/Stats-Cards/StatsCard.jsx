import React from 'react'
import Revenus from './Revenues/Revenus'
import LostDeals from './Lost deals/LostDeals'

const StatsCard = () => {
  return (
    <div className='flex gap-4'>
      <Revenus/>
      <LostDeals/>
    </div>
  )
}

export default StatsCard
