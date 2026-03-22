import React from 'react'
import ChatHeader from './chatHeader'
import People from './people'

const Chats = () => {
  return (
    <div className='Growth py-6 px-9 border rounded-2xl w-fit flex flex-col gap-6'>
      <ChatHeader/>
      <People/>
    </div>
  )
}

export default Chats
