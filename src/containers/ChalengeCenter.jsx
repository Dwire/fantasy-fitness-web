import React from 'react'
import {connect} from 'react-redux'

import ChallengeCard from '../components/ChallengeCard'

const ChallengeCenter = ({selectedPack, currentTeam}) => {

  const displayChallenges = () => {
    if (selectedPack){
      return selectedPack.workouts.map(workout => <ChallengeCard challenge={mapWorkoutToCompletion(workout)} />)
    }
  }

  const mapWorkoutToCompletion = (workout) => {
    let completion = currentTeam.completions.find(completion => {
      return completion.workout_pack_id === workout.workout_pack_id
    })
    
    if (completion) {
      return addUserToWorkoutAndCompletion(completion, workout)
    }else{
      return workout
    }
  } 

  const addUserToWorkoutAndCompletion = (completion, workout) => {
    let completionUser = currentTeam.teammates.find(user => user.id === completion.user_id )
  
      let userAndCompletion = {...workout, completion, completionUser}
      
      return userAndCompletion
    }


  return (
    <div className='column col-5'>
      <div className='header'>
        <p className='header-left'>◀</p>
        <h1 className='header-center'> Challenge Center </h1>
        <p className='header-right'>▶</p>
      </div>

      <div className='challenge-container'>
        {displayChallenges()}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedPack: state.leagues.currentLeague.selected_pack,
    // currentTeam: state.leagues.currentTeam 
    currentTeam: state.teams.currentTeam 
  }
}

export default connect(mapStateToProps, null)(ChallengeCenter)