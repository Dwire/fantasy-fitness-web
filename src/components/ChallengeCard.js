import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import completionAdapter from '../adapters/completionAdapter'
// import {setCurrentCompletionAndUser} from '../actions/completionActions'

const ChallengeCard = ({challenge, user, currentLeague, currentTeam, selectedPack, completionUser, completion, workout}) => {
  console.log("WORK", challenge)
  const handleChange = (e) => {
    let token = localStorage.getItem("jwt")
    
    if (e.target.value === "open"){
      let completionId = parseInt(e.target.id)
      deleteCompletion(token, completionId)
    }else{
      createCompletion(token, e)
    }
  }
  
  const deleteCompletion = (token, completionId) => {
    completionAdapter.delete(token, completionId).then(console.log)
  }
  
  const createCompletion = (token, e) => {
    let completionData = {
      user_id: parseInt(user.id),
      team_id: currentTeam.id,
      league_pack_id: selectedPack.id,
      workout_pack_id: challenge.workout_pack_id,
      workout_id: challenge.workout.id,
      status: e.target.value 
    }
    completionAdapter.create(token, completionData).then(console.log)
  }


    return (
      <div className='challenge-card'>
      <h4>{challenge.workout.name}</h4>
      {/* <p>Description: {challenge.workout.description}</p> */}
      <p>{challenge.workout.category}</p>
      <p>Points: {challenge.workout.default_points}</p>
      <img src={challenge.workout.image_url} alt="workout"/>
      <p> Status: {challenge.completion ? challenge.completion.status : "open"}</p>    
      <p> User: {challenge.completionUser ? challenge.completionUser.username : "None"}</p>   
      <select 
      id={challenge.completion ? challenge.completion.id: null} 
      onChange={handleChange}
      value={challenge.completion ? challenge.completion.status : "open"}>
        <option value="open">Open</option>
        <option value="claimed">Claimed</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    currentLeague: state.leagues.currentLeague,
    selectedPack: state.leagues.currentLeague.selected_pack,
    currentTeam: state.leagues.currentTeam,
  }
}

export default connect(mapStateToProps, null)(ChallengeCard)