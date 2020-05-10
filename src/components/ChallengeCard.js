import React from 'react'
// import {connect} from 'react-redux'

const ChallengeCard = ({challenge}) => {

  return (
    <div className='challenge-card'>
      <h4>Title: {challenge.workout.name}</h4>
      <p>Description: {challenge.workout.description}</p>
      <p>Category: {challenge.workout.category}</p>
      <p>Points: {challenge.workout.default_points}</p>
      <img src={challenge.workout.image_url} alt="workout"/>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     selectedPack: state.leagues.currentLeague.selected_pack   
//   }
// }

export default ChallengeCard