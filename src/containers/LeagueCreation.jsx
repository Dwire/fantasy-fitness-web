import React from 'react'

import AddLeague from '../components/AddLeague'
import AddPacksToLeague from '../components/AddPacksToLeague'
import AddPlayersToLeague from '../components/AddPlayersToLeague'
// import LeagueCreationBreadcrumb from '../components/LeagueCreationBreadcrumb'

class LeagueCreation extends React.Component {
  state = {
    form: 'addLeague',
    league: {
      name: '',
      motto: '',
      image_url: '',
      number_of_teams: 0,
      number_of_players: 0,
      number_of_weeks: 0,
      start_date: ''
    },
    packs: [],
    players: []
  }

  handleNext = () => {
    if (this.state.form === 'addLeague'){
      this.setState({form: 'addPacks'})
    }else if (this.state.form === 'addPacks'){
      this.setState({form: 'addPlayers'})
    }
  }

  handleBack = () => {
    if (this.state.form === 'addPacks'){
      this.setState({form: 'addLeague'})
    }else if (this.state.form === 'addPlayers'){
      this.setState({form: 'addPacks'})
    }
  }

  handleLeageInputChange = (e) => {
    this.setState({
      league: {...this.state.league, [e.target.name]: e.target.value}
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    debugger
  }

  displayForms = () => {
    switch (this.state.form) {
      case 'addLeague':
        return <AddLeague 
        handleNext={this.handleNext} 
        handleLeageInputChange={this.handleLeageInputChange} 
        league={this.state.league}
        />
      case 'addPacks':
        return <AddPacksToLeague 
        handleNext={this.handleNext} 
        handleBack={this.handleBack} 
        />
      case 'addPlayers':
        return <AddPlayersToLeague 
        handleBack={this.handleBack}
        handleSubmit={this.handleSubmit} 
        />
      default:
        return <AddLeague />
    }
  }


  render() {
    console.log("nice", this.state);
    
    return (
      <div>
        <ul class="breadcrumb">
          <li><a href="#">Create League</a></li>
          <li><a href="#">Add Workout Packs</a></li>
          <li><a href="#">Add Players</a></li>
          <li>LFG!!!</li>
        </ul>

        {this.displayForms()}

      </div>
    )
  }
}

export default LeagueCreation