import React from 'react'


const TeammateCard = ({team, player, index}) => {

  const playerCompletions = (timeFrame) => {

    if (timeFrame === "week"){
      return team.week_completions.filter(comp => comp.user_id === player.id)
    }else{
      return team.completions.filter(comp => comp.user_id === player.id)
    }
  }

  const numberOfCompletionsClaimed = (timeFrame) => {
    return playerCompletions(timeFrame).filter(comp => comp.status && comp.status.toLowerCase() === 'claimed')
  }

  const numberOfCompletionsCompleted = (timeFrame) => {
    return playerCompletions(timeFrame).filter(comp => comp.status && comp.status.toLowerCase() === 'completed')
  }

  return (
    <div className={`teammate-card teammate-${index}`}>
      {/* <h5>{`${player.first_name} ${player.last_name}`}</h5> */}
      <h5>{player.first_name}</h5>
      <img src={player.avatar} alt="player avatar"/>
      <p>Claimed: {numberOfCompletionsClaimed("week").length}</p>
      <p>Completed: {numberOfCompletionsCompleted("week").length}</p>
      <h5 className="player-total">Total: {numberOfCompletionsCompleted("allTime").length}</h5>

    </div>
  )
}

export default TeammateCard