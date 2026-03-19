import { LogOut } from 'lucide-react'
import React from 'react'

const Logout = () => {
  return (
    <div className='p-5'>
      <button className='text-red-600 flex gap-2 items-center'>
       <LogOut/> LogOut
      </button>
    </div>
  )
}

export default Logout
