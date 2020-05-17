import React from 'react'


const TeammateCard = ({team, player}) => {
  const playerCompletions = () => {
    return team.completions.filter(comp => comp.user_id === player.id)
  }

  const numberOfCompletionsClaimed = () => {
    return playerCompletions().filter(comp => comp.status && comp.status.toLowerCase() === 'claimed')
  }

  const numberOfCompletionsCompleted = () => {
    return playerCompletions().filter(comp => comp.status && comp.status.toLowerCase() === 'completed')
  }

  return (
    <div className='teammate-card'>
      {/* <h5>{`${player.first_name} ${player.last_name}`}</h5> */}
      <h5>{player.username}</h5>
      <img src={player.avatar} alt="player avatar"/>
      <p>Claimed: {numberOfCompletionsClaimed().length}</p>
      <p>Completed: {numberOfCompletionsCompleted().length}</p>
    </div>
  )
}

export default TeammateCard