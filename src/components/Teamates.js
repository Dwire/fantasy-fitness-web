import React from 'react'
import TeamateCard from './TeamateCard'

const Teamates = () => {
  const displayTeamates = () => {
    let count = ["Brandon", "Robin", "Samantha"]
    return count.map(player => <TeamateCard playerName={player}/>)
  }
  return (
    <div>
      <h1>Teamates</h1>
      <div class='teamate-container'>
        {displayTeamates()}
      </div>
    </div>
  )
}

export default Teamates