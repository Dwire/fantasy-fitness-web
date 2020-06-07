import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import AddLeague from '../components/AddLeague'
import AddPacksToLeague from '../components/AddPacksToLeague'
import AddPlayersToLeague from '../components/AddPlayersToLeague'
// import LeagueCreationBreadcrumb from '../components/LeagueCreationBreadcrumb'
import SideNav from '../components/SideNav'

import packAdapter from '../adapters/packAdapter'
import leagueAdapter from '../adapters/leagueAdapter'
import leaguePackAdapter from '../adapters/leaguePackAdapter'
import userTeamAdapter from '../adapters/userTeamAdapter'
import userAdapter from '../adapters/userAdapter'
import {setPacks} from '../actions/packActions'

// import {addLeague, setCurrentLeague} from '../actions/leagueActions'
// import {setCurrentTeam, setAllTeams} from '../actions/teamActions'


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
    currentPlayer: '',
    selectionComplete: ''
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
    this.setState({selectedPacks: [...this.state.selectedPacks, pack]}, this.checkIfSelectionIsComplete)
  }

  checkIfSelectionIsComplete = () => {
    if (this.state.selectedPacks.length === parseInt(this.state.league.number_of_weeks)){
      this.setState({selectionComplete: 'grid-selection-complete'})
    }else{
      this.setState({selectionComplete: ''})
    }
  }


  createLeagueBtn = () => {
    // leagueAdapter.create(this.state.league)
    // .then(this.createLeagueRequest)
    this.createLeagueRequest()
    // createleage
    //? with return value set state
    // create leagePacks 
    //? with return value set state
    // create teams at random

    // redirect to league dash
  }

  createLeagueRequest = () => {
    leagueAdapter.create(this.state.league)
    .then(this.createLeaguePacksRequest)
  }

  createLeaguePacksRequest = (league) => {
    let packDataArray = this.state.selectedPacks.map((pack, i) => {
      return {pack_id: pack.id, week: i + 1, league_id: league.league.id}
    }) 

    let fomatedPackData = {packs: packDataArray}

    leaguePackAdapter.create(fomatedPackData)
    .then(this.createLeaguePlayersRequest)
  }

  createLeaguePlayersRequest = (entireLeagueData) => {
    const formated_data = {users: this.state.players, league_id: entireLeagueData.id}
    const token = localStorage.getItem('jwt')
    
    userTeamAdapter.randomize(formated_data, token)
    .then(this.updateUserDefaultTeam)
    // .then(this.setLeagues)
  }

  updateUserDefaultTeam = (league) => {
    const token = localStorage.getItem('jwt')
    const userId = this.props.user.id
    const leagueId = {default_league_id: league.id}

    userAdapter.update(leagueId, token, userId)
    .then(res => this.props.history.push('/dashboard'))

   }

  // setLeagues = (league) => {
  //   this.props.addLeague(league)
  //   this.props.setCurrentLeague(league)

  //   this.setTeams(league)
  // }

  // setTeams = (newCurrentLeague) => {
  //   let allTeams = newCurrentLeague.teams
  //   let newCurrentTeam = this.props.allTeams.find(team => team.teammates.find(teammate => teammate.id === parseInt(this.props.user.id)))
    
  //   this.props.setCurrentTeam(newCurrentTeam)
  //   this.props.setAllTeams(allTeams)

  //   this.props.history.push('/dashboard')
  // }


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
        selectionComplete={this.state.selectionComplete}
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

        <div class="creation-container" >
          {this.displayForms()}
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allTeams: state.teams.allTeams,
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps, { setPacks })(LeagueCreation))