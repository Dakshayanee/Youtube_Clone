import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm px-2'>
        <img
          className="h-10"
          alt="icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
        
    </div>
  )
}

export default ChatMessage