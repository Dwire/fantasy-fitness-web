import React from 'react'
import {connect} from 'react-redux'


const Message = ({message, userId}) => {
  const fromLoggedInUser = () => {
    if (message.user && message.user.id === userId){
      return true
    }else{
      return false
    }
  }

  return (
    <div className={fromLoggedInUser() ? 'user-message-container' : 'teammate-message-container'}>
      <div className={fromLoggedInUser() ? 'user-message' : 'teammate-message'}>
        <strong>{message.user ? message.user.first_name: "F**K"}:</strong>
        <p> {message.content}</p>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userId: parseInt(state.user.id)
  }
}

export default connect(mapStateToProps, null)(Message)