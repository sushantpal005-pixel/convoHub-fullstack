import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

const Message = ({ message }) => {
  const scroll = useRef()
  const { authUser } = useSelector(store => store.user)
  const { selectedUser } = useSelector(store => store.user)
  const { messages } = useSelector(store => store.message)
  useEffect(() => {
    scroll.current?.scrollIntoView({ behaviour: "smooth" })
  }, [message])
  return (
    <div ref={scroll} className={`chat ${authUser?._id === message?.senderId ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={message?.senderId === authUser?._id ? authUser?.profilePhoto : selectedUser?.profilePhoto}
          />
        </div>
      </div>
      <div className="chat-header">
        <time className="text-xs opacity-50">{message.createdAt}</time>
      </div>
      <div className="chat-bubble">{message?.message}</div>
    </div>

  )
}

export default Message
