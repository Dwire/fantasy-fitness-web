import React from 'react'


const TeamateCard = ({player}) => {
  return (
    <div className='teamate'>
      <h5>{player.username}</h5>
      <h5>{player.first_name}</h5>
      <h5>{player.last_name}</h5>
    </div>
  )
}

export default TeamateCard