import React from 'react'
import {connect} from 'react-redux'

import ChallengeCard from '../components/ChallengeCard'

const ChallengeCenter = ({selectedPack}) => {

  const displayChallenges = () => {
    if (selectedPack){
      debugger
      return selectedPack.workouts.map(challenge => <ChallengeCard challenge={challenge} />) 
    }
  }

  return (
    <div className='column col-5'>
      <h1>Challenge Center</h1>
      <div className='challenge-container'>
        {displayChallenges()}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedPack: state.leagues.currentLeague.selected_pack   
  }
}

export default connect(mapStateToProps, null)(ChallengeCenter)