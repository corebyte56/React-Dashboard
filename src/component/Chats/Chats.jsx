import React from 'react'
import ChatHeader from './chatHeader'
import People from './people'

const Chats = () => {
  return (
    <div id='chats' className=' py-6 px-9 rounded-2xl w-full flex flex-col gap-6'>
      <ChatHeader/>
      <People/>
    </div>
  )
}

export default Chats
