import React from 'react'
import {connect} from 'react-redux'

import ChallengeCard from '../components/ChallengeCard'

import { setDisplayPackId } from '../actions/packActions'

const ChallengeCenter = ({selectedPack, currentTeam, displayPackId, leaguePacks, setDisplayPackId}) => {

  const displayChallenges = () => {
    console.log("DPID", displayPackId);

    if (!!displayPackId){
      const pack = leaguePacks.find(pack => pack.id === displayPackId)

      if (pack.id === selectedPack.id ){
        return pack.workouts.map(workout => <ChallengeCard challenge={mapWorkoutToCompletion(workout)} />)
      }else if (leaguePacks.indexOf(pack) > leaguePacks.indexOf(selectedPack)){
        return pack.workouts.map(workout => <ChallengeCard challenge={mapWorkoutToCompletion(workout)} visible="afterCurrentPack"/>)
      }else{
        return pack.workouts.map(workout => <ChallengeCard challenge={mapWorkoutToCompletion(workout)} visible="beforCurrentPack"/>)
      }
    }
    
    // if (selectedPack){
    //   return selectedPack.workouts.map(workout => <ChallengeCard challenge={mapWorkoutToCompletion(workout)} />)
    // }
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

  const setToPreviousPack = () => {
    let lastIndex = leaguePacks.length - 1
    let currentIndex = leaguePacks.findIndex(el => el.id === displayPackId)

      let newDisplayPackId = null
      if (currentIndex === 0){
        newDisplayPackId = leaguePacks[lastIndex].id
      }else{
        newDisplayPackId = leaguePacks[currentIndex - 1].id
      }
      
      setDisplayPackId(newDisplayPackId)
    }
    
    const setToNextPack = () => {
      let lastIndex = leaguePacks.length - 1
      let currentIndex = leaguePacks.findIndex(el => el.id === displayPackId)
      
      let newDisplayPackId = null
      if (currentIndex === lastIndex){
        newDisplayPackId = leaguePacks[0].id
      }else{
        newDisplayPackId = leaguePacks[currentIndex + 1].id
      } 
      
      setDisplayPackId(newDisplayPackId)
  }





  return (
    <div className='column col-5'>
      <div className='header'>
        <p className='header-left' onClick={setToPreviousPack}>◀</p>
        <div className='header-center'>
          <h1 >{leaguePacks.find(pack => pack.id === displayPackId).pack.name} </h1>
          <h3> Team: {currentTeam.name}</h3>
        </div>
        <p className='header-right' onClick={setToNextPack}>▶</p>
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
    currentTeam: state.teams.currentTeam,
    leaguePacks: state.leagues.currentLeague.league_packs,
    displayPackId: state.packs.displayPackId 
  }
}

export default connect(mapStateToProps, { setDisplayPackId })(ChallengeCenter)