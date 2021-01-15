import React from 'react'
import {connect} from 'react-redux'
import Teammates from '../components/Teammates'

import {setCurrentTeam} from '../actions/teamActions'
import {clearFilters} from '../actions/formActions'

class Team extends React.Component {
  state = {
    // add some state to show arrow in left right divs
  }

  handleClick = (e) => {
    if (e.target.classList.contains("team-left")){
      this.props.clearFilters()
      this.setToPreviousTeam()
    }else{
      this.props.clearFilters()
      this.setToNextTeam()
    }
  }

  setToPreviousTeam = () => {
    let lastIndex = this.props.allTeams.length - 1
    let currentIndex = this.props.allTeams.findIndex(el => el.id === this.props.currentTeam.id)
    
    let newCurrentTeam = {}
    if (currentIndex === 0){
      newCurrentTeam = this.props.allTeams[lastIndex]
    }else{
      newCurrentTeam = this.props.allTeams[currentIndex - 1]
    }
    
    this.props.setCurrentTeam(newCurrentTeam)
  }

  setToNextTeam = () => {
    let lastIndex = this.props.allTeams.length - 1
    let currentIndex = this.props.allTeams.findIndex(el => el.id === this.props.currentTeam.id)
    
    let newCurrentTeam = {}
    if (currentIndex === lastIndex){
      newCurrentTeam = this.props.allTeams[0]
    }else{
      newCurrentTeam = this.props.allTeams[currentIndex + 1]
    } 

    this.props.setCurrentTeam(newCurrentTeam)
  }

  render() {
    return (
      <div className='column col-3 team-container'>
       <div className="team-header team-col-1">
          <h1>Team: {this.props.currentTeam ? this.props.currentTeam.name : "No Team"}</h1>
          <h5>Motto: {this.props.currentTeam ? this.props.currentTeam.motto : "No Motto"} </h5>
        </div>
        <div className="team-left team-col-2" onClick={this.handleClick}></div>
        <Teammates />
        <div className="team-right team-col-4" onClick={this.handleClick}></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentTeam: state.teams.currentTeam,
    allTeams: state.teams.allTeams
  }
}

export default connect(mapStateToProps, {setCurrentTeam, clearFilters})(Team)