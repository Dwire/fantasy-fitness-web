import React from 'react'
import {connect} from 'react-redux'

import completionAdapter from '../adapters/completionAdapter'

const ChallengeCard = ({challenge, user, currentLeague, currentTeam, selectedPack}) => {

  const handleChange = (e) => {
    let token = localStorage.getItem("jwt")
    
    if (e.target.value === "Open"){
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
  // go through team completions array 
  // find 
    const addUserToCompletion = (completion) => {
      let challengeUser = currentTeam.teammates.find(user => user.id = completion.user_id)
      // debugger
      let userAndCompletion = {
        challengeUser,
        completion
      }
      
      return userAndCompletion
    }

  const mapChallengeToCompletion = () => {
    let completion = currentTeam.completions.find(completion => {
      return completion.workout_pack_id === challenge.workout_pack_id
    })

    if (completion) {
      return addUserToCompletion(completion)
    }
  }  


  return (
    <div className='challenge-card'>
      <h4>{challenge.workout.name}</h4>
      {/* <p>Description: {challenge.workout.description}</p> */}
      <p>{challenge.workout.category}</p>
      <p>Points: {challenge.workout.default_points}</p>
      <img src={challenge.workout.image_url} alt="workout"/>
      <p> Status: {mapChallengeToCompletion() ? mapChallengeToCompletion().completion.status : "open"}</p>    
      <p> User: {mapChallengeToCompletion() ? mapChallengeToCompletion().challengeUser.username : "None"}</p>   
      <select 
      id={mapChallengeToCompletion() ?mapChallengeToCompletion().completion.id : null} 
      onChange={handleChange}
      >
        <option>Open</option>
        <option>Claimed</option>
        <option>Completed</option>
      </select>
      {/* <button onClick={handleClick}>Claim</button> */}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    currentLeague: state.leagues.currentLeague,
    selectedPack: state.leagues.currentLeague.selected_pack,
    currentTeam: state.leagues.currentTeam   
  }
}

export default connect(mapStateToProps, {completionAdapter})(ChallengeCard)