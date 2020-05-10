import React from 'react'


const TeammateCard = ({team, player}) => {
  const playerCompletions = () => {
    return team.completions.filter(comp => comp.user_id === player.id)
  }

  const numberOfCompletionsClaimed = () => {
    return playerCompletions().filter(comp => comp.status === 'claimed')
  }

  const numberOfCompletionsCompleted = () => {
    return playerCompletions().filter(comp => comp.status === 'completed')
  }

  return (
    <div className='teammate-card'>
      <h5>{`${player.first_name} ${player.last_name}`}</h5>
      <img src={player.avatar} alt="player avatar"/>
      <p>Claimed: {numberOfCompletionsClaimed().length}</p>
      <p>Completed: {numberOfCompletionsCompleted().length}</p>
    </div>
  )
}

export default TeammateCard