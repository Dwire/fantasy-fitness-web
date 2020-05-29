import React from 'react'
import {connect} from 'react-redux'

import AddLeague from '../components/AddLeague'
import AddPacksToLeague from '../components/AddPacksToLeague'
import AddPlayersToLeague from '../components/AddPlayersToLeague'
// import LeagueCreationBreadcrumb from '../components/LeagueCreationBreadcrumb'

import packAdapter from '../adapters/packAdapter'
import {setPacks} from '../actions/packActions'

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

  componentDidMount() {
    packAdapter.getAll()
    .then(this.props.setPacks)
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

  handlePackSelection = (pack) => {
    // ! NEED TO SEND BACK PackID and week_number
    // could just iterate through array and grab infor plus index
    this.setState({packs: [...this.state.packs, pack]})
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
        handlePackSelection={this.handlePackSelection}
        handleNext={this.handleNext} 
        handleBack={this.handleBack} 
        selectedPacks={this.state.packs}
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

export default connect(null, {setPacks})(LeagueCreation)