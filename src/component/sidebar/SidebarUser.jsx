import React from 'react'
import Admin from '../../assets/admin.png'

const SidebarUser = () => {
  return (
    <div className='flex gap-3 items-center'>
      <img className='w-10' src={Admin} alt="Admin" />
      <div>
        <h3 className='font-medium text-[18px]'>Gustavo Xavier</h3>
        <div className='p-2 w-fit rounded-3xl font-medium text-[12px] bg-amber-400 my-2'>Admin</div>
      </div>
    </div>
  )
}

export default SidebarUser
