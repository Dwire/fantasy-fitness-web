import React from 'react'
import {connect} from 'react-redux'
import MessageInput from '../components/MessageInput'
import Message from '../components/Message'

class MessageBoard extends React.Component {
  state = {
    messages: "teamMessages",
  }

  changeBoard = () => {
    let newMessages = ''
    if (this.state.messages === "teamMessages"){
      newMessages = 'leagueMessages'
    }else{
      newMessages = 'teamMessages'
    }

    this.setState({
      messages: newMessages
    })
  }

  renderMessages = () => {
    if (this.props.teamMessages){
      return this.props[this.state.messages].map(message => {
        return <Message message={message}/>
      })
    }
  }

  render () {
    console.log("STATE", this.state)
    return (
      <div className='column col-4'>
        <h1>{this.state.messages === 'teamMessages' ? "Team Message Board" : "League Message Board"}</h1>
        <button onClick={this.changeBoard}>Switch</button>
        <div className="message-container">
          {this.renderMessages()}
        </div>
        <MessageInput messages={this.state.messages}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    teamMessages: state.teams.currentTeam.messages,
    leagueMessages: state.leagues.currentLeague.messages
  }
}

export default connect(mapStateToProps, null)(MessageBoard)