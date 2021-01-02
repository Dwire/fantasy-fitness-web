import React from 'react'
import {connect} from 'react-redux'

import completionAdapter from '../adapters/completionAdapter'
import {updateTeamCompletion, deleteTeamCompletion, createTeamCompletion} from '../actions/teamActions'

const ChallengeCard = ({deleteTeamCompletion, createTeamCompletion, challenge, user, updateTeamCompletion, currentLeague, currentTeam, selectedPack}) => {
  // debugger
  const handleChange = (e) => {
    let token = localStorage.getItem("jwt")

    if (e.target.value === "open"){
      if (e.target.id) {
        let completionId = parseInt(e.target.id)
        deleteCompletion(token, completionId)
      } 
    }else if(e.target.id) {
      let completionId = e.target.id
      let completionStatus = e.target.value
      updateCompletion(token, completionStatus, completionId)
    }else{
      let completionStatus = e.target.value
      createCompletion(token, completionStatus)
    }
  }
  
  const deleteCompletion = (token, completionId) => {
    completionAdapter.delete(token, completionId)
    .then(() => deleteTeamCompletion(completionId))
  }

  const updateCompletion = (token, completionStatus, completionId) => {
    let completionData = {
      user_id: parseInt(user.id),
      team_id: currentTeam.id,
      league_pack_id: selectedPack.id,
      workout_pack_id: challenge.workout_pack_id,
      workout_id: challenge.workout.id,
      status: completionStatus
    }

    completionAdapter.update(token, completionData, completionId)
    .then(updateTeamCompletion)
  }

  const createCompletion = (token, completionStatus) => {
    let completionData = {
      user_id: parseInt(user.id),
      team_id: currentTeam.id,
      league_pack_id: selectedPack.id,
      workout_pack_id: challenge.workout_pack_id,
      workout_id: challenge.workout.id,
      status: completionStatus
    }
    
    completionAdapter.create(token, completionData)
    .then(createTeamCompletion)
    // .then(console.log)
  }

  // const checkWorkoutOwner = () => {
  //   // debugger
  //   if (challenge.completionUser && challenge.completionUser.id === parseInt(user.id)){
  //     return true 
  //   }else if (!challenge.completionUser){
  //     return true 
  //   }else{
  //    return false 
  //   }
  // }

  const checkIfyouShouldSeeDropDown = () => {
    const teammateIds = currentTeam.teammates.map(member => member.id)
  
    return teammateIds.includes(parseInt(user.id))
    // console.log(currentTeam.teammates.includes(member => member.id === parseInt(user.id))); 
  }

  return (
    <div className='challenge-card'>
      <h4>{challenge.workout.name}</h4>
      {/* <p>Description: {challenge.workout.description}</p> */}
      <p>{challenge.workout.category}</p>
      <p>Points: {challenge.workout.default_points}</p>
      <img src={challenge.workout.image_url} alt="workout" className="challenge-card-img"/>
      <p> Status: {challenge.completion ? challenge.completion.status : "open"}</p>    
      <p> User: {challenge.completionUser ? challenge.completionUser.username : "None"}</p>   

      {/* {checkWorkoutOwner() ?  */}
      { checkIfyouShouldSeeDropDown() ?
        <select 
        id={challenge.completion ? challenge.completion.id : null} 
        onChange={handleChange}
        value={challenge.completion ? challenge.completion.status : "open"}>
          <option value="open">Open</option>
          <option value="claimed">Claimed</option>
          <option value="completed">Completed</option>
        </select>
      :
        null
      }

      {/* : */}
        {/* null */}
      {/* } */}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    currentLeague: state.leagues.currentLeague,
    selectedPack: state.leagues.currentLeague.selected_pack,
    currentTeam: state.teams.currentTeam,
  }
}

export default connect(mapStateToProps, {updateTeamCompletion, deleteTeamCompletion, createTeamCompletion})(ChallengeCard)



