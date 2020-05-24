import React from 'react'
import {connect} from 'react-redux'
import TeammateCard from './TeammateCard'

const Teammates = ({user_id, selectedPack, currentTeam}) => {
  
  // const prioritizeMyTeam = () => {
  //   teams.find(team => {
      
  //   })
    
    
  // }

  const unclaimedWorkouts = () => {
    return selectedPack.workouts.filter(wo => wo.status !== 'open' || !wo.status)
  }

  const displayTeamates = () => {
    // prioritizeMyTeam() --- Prioritize your team rather then just grabbing 0 index below

    if (currentTeam.teammates) {
      // NOTE: SLICE BELOW IS JUST TO LIMIT PLAYERS TO 3 FOR NOW
       return currentTeam.teammates.slice(0,3).map(player => <TeammateCard team={currentTeam} player={player}/>)
    }
  }

  return (
    <div className='team-col-2'>
      <h4>Team: {currentTeam ? currentTeam.name : "No Teammates"}</h4>
      <p>Motto: {currentTeam ? currentTeam.motto : "No Motto"} </p>
      <div className='teammate-container'>
        {displayTeamates()}
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    user_id: state.user.id,
    currentTeam: state.teams.currentTeam,
    selectedPack: state.leagues.currentLeague.selectedPack
    // teams: state.leagues.currentLeague.teams
  }
}

export default connect(mapStateToProps, null)(Teammates)