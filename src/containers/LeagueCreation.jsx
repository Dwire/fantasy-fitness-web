import React from 'react'
import {connect} from 'react-redux'

import AddLeague from '../components/AddLeague'
import AddPacksToLeague from '../components/AddPacksToLeague'
import AddPlayersToLeague from '../components/AddPlayersToLeague'
// import LeagueCreationBreadcrumb from '../components/LeagueCreationBreadcrumb'
import SideNav from '../components/SideNav'

import packAdapter from '../adapters/packAdapter'
import {setPacks} from '../actions/packActions'
import leagueAdapter from '../adapters/leagueAdapter'
import leaguePackAdapter from '../adapters/leaguePackAdapter'


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
    selectedPacks: [],
    players: [],
    currentPlayer: ''
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

  handleCurrentPlayerInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleCurrentPlayerAdd = (e) => {
    e.preventDefault()
    this.setState({
      players: [...this.state.players, this.state.currentPlayer],
      currentPlayer: ''
    })
  }

  handlePackSelection = (pack) => {
    // ! NEED TO SEND BACK PackID and week_number
    // could just iterate through array and grab infor plus index
    this.setState({selectedPacks: [...this.state.selectedPacks, pack]})
  }

  createLeagueBtn = () => {
    leagueAdapter.create(this.state.league)
    .then(console.log)
    // createleage
    //? with return value set state
    // create leagePacks 
    //? with return value set state
    // create teams at random

    // redirect to league dash
  }

  createLeagueRequest = () => {
    leagueAdapter.create(this.state.league)
    .then(createLeaguePacks)
  }

  createLeaguePacks = () => {
    leaguePackAdapter.create
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
        selectedPacks={this.state.selectedPacks}
        leagueInfo={this.state.league}
        />
      case 'addPlayers':
        return <AddPlayersToLeague 
        createLeagueBtn={this.createLeagueBtn}
        handleBack={this.handleBack}
        handleCurrentPlayerInputChange={this.handleCurrentPlayerInputChange}
        handleCurrentPlayerAdd={this.handleCurrentPlayerAdd}
        players={this.state.players} 
        currentPlayer={this.state.currentPlayer} 
        />
      default:
        return <AddLeague />
    }
  }


  render() {
    console.log("nice", this.state);
    
    return (
      <div>
          <SideNav />
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