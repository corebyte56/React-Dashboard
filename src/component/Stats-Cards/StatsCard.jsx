import React from 'react'
import Revenus from './Revenues/Revenus'
import LostDeals from './Lost deals/LostDeals'
import Quartergoal from './Quarter goal/Quartergoal'

const StatsCard = () => {
  return (
    <div className='statsCard flex gap-4'>
      <Revenus/>
      <LostDeals/>
      <Quartergoal/>
    </div>
  )
}

export default StatsCard
