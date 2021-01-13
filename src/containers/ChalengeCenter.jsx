import React from 'react'
import {connect} from 'react-redux'

import ChallengeCard from '../components/ChallengeCard'

import { setDisplayPackId } from '../actions/packActions'
import { setDropdownOption, clearFilters } from '../actions/formActions'

const ChallengeCenter = ({selectedPack, currentTeam, displayPackId, leaguePacks, setDisplayPackId, setDropdownOption, dropDownStatus, clearFilters}) => {

  const displayChallenges = () => {
    if (!!displayPackId){
      const pack = leaguePacks.find(pack => pack.id === displayPackId)

      if (pack.id === selectedPack.id ){
        // return pack.workouts.map(workout => <ChallengeCard challenge={mapWorkoutToCompletion(workout)} />)
        return packFilter(pack).map(workout => <ChallengeCard challenge={mapWorkoutToCompletion(workout)} />)
      }else if (leaguePacks.indexOf(pack) > leaguePacks.indexOf(selectedPack)){
        // return pack.workouts.map(workout => <ChallengeCard challenge={mapWorkoutToCompletion(workout)} visible="afterCurrentPack"/>)
        return packFilter(pack).map(workout => <ChallengeCard challenge={mapWorkoutToCompletion(workout)} visible="afterCurrentPack"/>)
      }else{
        // return pack.workouts.map(workout => <ChallengeCard challenge={mapWorkoutToCompletion(workout)} visible="beforCurrentPack"/>)
        return packFilter(pack).map(workout => <ChallengeCard challenge={mapWorkoutToCompletion(workout)} visible="beforCurrentPack"/>)
      }
    }
  }

  const packFilter = (pack) => {
    let packFiltered = [...pack.workouts] 

    console.log("WTF", dropDownStatus);
    
    if (dropDownStatus.userId !== "all"){
      console.log("HOW");
      
      packFiltered = packFiltered.filter(workout => mapWorkoutToCompletion(workout).completionUser && mapWorkoutToCompletion(workout).completionUser.id === parseInt(dropDownStatus.userId))
    }

    if (dropDownStatus.category !== "all"){
      packFiltered = packFiltered.filter(wo => wo.workout.category === dropDownStatus.category)
    }

    if (dropDownStatus.status === "open") {
      packFiltered = packFiltered.filter(workout => !mapWorkoutToCompletion(workout).completion)
    }else if (dropDownStatus.status !== "all"){
      packFiltered = packFiltered.filter(workout => mapWorkoutToCompletion(workout).completion &&  mapWorkoutToCompletion(workout).completion.status === dropDownStatus.status)
    }

    return packFiltered
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
      clearFilters()
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
      
      clearFilters()
      setDisplayPackId(newDisplayPackId)
  }

  const uniqueStatuses = () => {
    let categories = selectedPack.workouts.map(wo => wo.workout.category)
    let uniqueCategories = categories.reduce((array, item) => {
      return array.includes(item) ? array : [...array, item]
    }, [])
    return uniqueCategories
  }

  const handleDropdownChange = (e) => {
    let formDate = {[e.target.name]: e.target.value}

    setDropdownOption(formDate)
  }




  return (
    <div className='column col-5'>
      <div className='header'>
        <p className='header-left' onClick={setToPreviousPack}>◀</p>
        <div className='header-center'>
          {console.log(dropDownStatus)}
          <h1 >{leaguePacks.find(pack => pack.id === displayPackId).pack.name} </h1>
          <h3> Team: {currentTeam.name}</h3>
        </div>
        <p className='header-right' onClick={setToNextPack}>▶</p>
      </div>

      <div className="challenge-dropdown-conatiner"> 
            <div className="challenge-dropdown-div">
              <label htmlFor="user-dropdown">Sort by User</label>
              <select name="userId" className="challenge-dropdown" id="user-dropdown" value={dropDownStatus.userId} onChange={handleDropdownChange}>
                <option value="all">All</option>
                {currentTeam.teammates.map( memeber => <option value={memeber.id}>{memeber.first_name}</option>)}
              </select>
            </div>

            <div className="challenge-dropdown-div">
              <label htmlFor="category-dropdown">Sort by Category</label>
              <select name="category" className="challenge-dropdown" id="category-dropdown" value={dropDownStatus.category} onChange={handleDropdownChange}>
                <option value="all">All</option>
                {uniqueStatuses().map(status => <option value={status}>{status}</option>)}
              </select>
            </div>

            <div className="challenge-dropdown-div">
              <label htmlFor="status-dropdown">Sort by Status</label>
              <select name="status" className="challenge-dropdown" id="status-dropdown" value={dropDownStatus.status} onChange={handleDropdownChange}>
                <option value="all">All</option>
                <option value="open">Open</option>
                <option value="claimed">Claimed</option>
                <option value="completed">Completed</option>
              </select>
            </div>
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
    dropDownStatus: state.forms.challengeDropdowns,
    currentTeam: state.teams.currentTeam,
    leaguePacks: state.leagues.currentLeague.league_packs,
    displayPackId: state.packs.displayPackId 
  }
}

export default connect(mapStateToProps, { setDisplayPackId, setDropdownOption, clearFilters })(ChallengeCenter)