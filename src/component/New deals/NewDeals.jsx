import React from 'react'
import NewDealsHeader from './NewDealsHeader'
import NewDealsBody from './NewDealsBody'

const NewDeals = () => {
  return (
    <div id='newDeals' className=' p-6 bg-white rounded-2xl flex flex-col gap-3 w-fit'>
      <NewDealsHeader/>
      <NewDealsBody/>
    </div>
  )
}

export default NewDeals
