import React, {Component} from 'react'
import {connect} from 'react-redux'

import teamMessageAdapter from '../adapters/teamMessageAdapter'
import leagueMessageAdapter from '../adapters/leagueMessageAdapter'

import {createTeamMessage} from '../actions/teamActions'
// import {leagueTeamMessage} from '../actions/leagueActions'


class MessageInput extends Component  {
  state = {
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.messages === "teamMessages") {
      this.createTeamMessage()
    } else if (this.props.messages === "leagueMessages") {
      this.createLeagueMessage()
    }
  }

  createTeamMessage = () => {
    const teamMessageData = {...this.state, team_id: this.props.currentTeam.id}
      teamMessageAdapter.create(teamMessageData)
      .then(this.props.createTeamMessage)
  }

  createLeagueMessage = () => {
    const leagueMessageData = {...this.state, league_id: this.props.currentLeague.id}
    leagueMessageAdapter.create(leagueMessageData)
    // .then(send to reducer)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='content' value={this.state.content} onChange={this.handleChange} />

          <input type='submit'/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentTeam: state.teams.currentTeam,
    currentLeague: state.leagues.currentLeage
  }
}

export default connect(mapStateToProps, {createTeamMessage} )(MessageInput)