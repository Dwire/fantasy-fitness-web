import React from 'react'
import {connect} from 'react-redux'

import completionAdapter from '../adapters/completionAdapter'
import {updateTeamCompletion, deleteTeamCompletion, createTeamCompletion} from '../actions/teamActions'

const ChallengeCard = ({visible, deleteTeamCompletion, createTeamCompletion, challenge, user, updateTeamCompletion, currentLeague, currentTeam, selectedPack}) => {
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
    
    if (teammateIds.includes(parseInt(user.id)) && visible !== "beforeCurrentPack" && visible !== "afterCurrentPack") {
      return true
    }
  }

  const challengeOwner = () => {
    const teammateIndexes = currentTeam.teammates.map(mate => mate.id)
    
    if (challenge.completion){
      const indexOfTeamate = teammateIndexes.indexOf(challenge.completion.user_id)
      return ` challenge-user-${indexOfTeamate}`
    }else {
      return ""
    }
  }

  // const transformCategoryToClassName = () => {
  //   let categoryString = challenge.workout.category.toLowerCase()
  //   let categoryArray = categoryString.split

  //   return categoryString.join("_")
  // }

  return (
    <div className={"challenge-card " + challenge.workout.category.toLowerCase() + challengeOwner() }>
      {visible !== "afterCurrentPack" ?
        <div className={`challenge-card-inner ${visible}`}>
          <div className="challenge-card-inener-left">
            <div className="challenge-details">
              <h1>{challenge.workout.category}</h1>
              <h3>{challenge.workout.name}</h3>
              <p>Description: {challenge.workout.description}</p>
            </div>
            { challenge.completion && challenge.completion.status === "completed"?
              <div className="challenge-status">
                <h1>{challenge.completion ? challenge.completion.status.toUpperCase() : "Open"}</h1>    
                {/* <p> User: {challenge.completionUser ? challenge.completionUser.first_name : "None"}</p>    */}
              </div>
                :
              <div className="challenge-status">
                <p> Status: {challenge.completion ? challenge.completion.status : "Open"}</p>    
                <p> User: {challenge.completionUser ? challenge.completionUser.first_name : "None"}</p>   
              </div>
            }
          </div>
          <div className="challenge-card-inener-right">
          { checkIfyouShouldSeeDropDown() ?
            <select 
            id={challenge.completion ? challenge.completion.id : null} 
            onChange={handleChange}
            className={"challenge-selection-dropdown"}
            value={challenge.completion ? challenge.completion.status : "open"}>
            <option className="challenge-dropdown-option" value="open">Open</option>
            <option className="challenge-dropdown-option" value="claimed">Claimed</option>
            <option className="challenge-dropdown-option" value="completed">Completed</option>
            </select>
            :
            null
          }
          </div>
        </div>
        :
        <div className={`${visible}`  }>
              <h1>Future Week!</h1>
        </div>
      }
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



