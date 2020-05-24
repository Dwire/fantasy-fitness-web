import React from 'react'


const Message = ({message}) => {
  console.log("MESS",message)

  return (
    <div>
      <p><strong>{message.user ? message.user.username: "F**K"}:</strong> {message.content}</p>
    </div>
  )
}

export default Message