import React from 'react'
import {connect} from 'react-redux'
import TeamateCard from './TeamateCard'

const Teamates = ({user_id, teams}) => {
  
  // const prioritizeMyTeam = () => {
  //   teams.find(team => {
      
  //   })
    
    
  // }

  const displayTeamates = () => {
    // prioritizeMyTeam() --- Prioritize your team rather then just grabbing 0 index below

    if (teams.length > 0) {
      let currentTeam = teams[0]
      // NOTE: SLICE BELOW IS JUST TO LIMIT PLAYERS TO 3 FOR NOW
       return currentTeam.teammates.slice(0,3).map(player => <TeamateCard player={player}/>)
    }
  }

  return (
    <div>
      <h1>Teamates</h1>
      <div className='teamate-container'>
        {displayTeamates()}
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    user_id: state.user.id,
    teams: state.leagues.currentLeague.teams
    // teams: state.leagues.currentLeague.teams
  }
}

export default connect(mapStateToProps, null)(Teamates)