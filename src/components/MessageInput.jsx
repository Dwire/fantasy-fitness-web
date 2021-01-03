import React, {Component} from 'react'
import {connect} from 'react-redux'

import teamMessageAdapter from '../adapters/teamMessageAdapter'
import leagueMessageAdapter from '../adapters/leagueMessageAdapter'

import {createTeamMessage} from '../actions/teamActions'
import {createLeagueMessage} from '../actions/leagueActions'


class MessageInput extends Component  {
  state = {
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  clearMessage = () => {
    this.setState({content: ''})
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
    const token = localStorage.getItem('jwt')

      teamMessageAdapter.create(teamMessageData, token)
      .then(this.props.createTeamMessage)
      .then(this.clearMessage)
  }

  createLeagueMessage = () => {
    const leagueMessageData = {...this.state, league_id: this.props.currentLeague.id}
    const token = localStorage.getItem('jwt')

    leagueMessageAdapter.create(leagueMessageData, token)
    .then(this.props.createLeagueMessage)
    .then(this.clearMessage)
  }

  render() {
    return (
      <div className="message-board-input">
        <form className='message-input-form' onSubmit={this.handleSubmit}>
          <input className='message-input-box' type='text' name='content' value={this.state.content} onChange={this.handleChange} />

          <input className="message-input-button" type='submit' value="Send"/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentTeam: state.teams.currentTeam,
    currentLeague: state.leagues.currentLeague
  }
}

export default connect(mapStateToProps, {createTeamMessage, createLeagueMessage} )(MessageInput)