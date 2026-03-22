import React from 'react'
import CustomerHeader from './CustomerHeader'
import CustomerList from './CustomerList'
import AllCustomer from './AllCustomer'

const Customer = () => {
  return (
    <div className='customer'>
      <CustomerHeader/>
      <CustomerList/>
      <AllCustomer/>
    </div>
  )
}

export default Customer
