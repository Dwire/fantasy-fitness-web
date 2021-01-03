import React from 'react'
import {connect} from 'react-redux'
import MessageInput from '../components/MessageInput'
import Message from '../components/Message'

import { animateScroll } from "react-scroll"

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
    if (this.props.leagueMessages && this.state.messages === "teamMessages"){
      let loggedInUsersTeam = this.props.allTeams.find(team => {
        return team.teammates.find(teammate => teammate.id === parseInt(this.props.user.id))
      })
      console.log("WTF", loggedInUsersTeam);
      let orderedMessages = loggedInUsersTeam.messages.sort((m1, m2) => m1.id - m2.id)
      console.log("order", orderedMessages)
      console.log("new")
  
      return orderedMessages.map(message => {
        return <Message message={message}/>
      })
    }else if (this.props.leagueMessages){
      return this.props[this.state.messages].map(message => {
        return <Message message={message}/>
      })
    }
  }

  scrollToBottom() {
    animateScroll.scrollToBottom({
      containerId: "messageScroll"
    });
  }
  
  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }

  render () {
    console.log("STATE", this.state)
    return (
      <div className='column col-4'>
        <h1>{this.state.messages === 'teamMessages' ? "Team Message Board" : "League Message Board"}</h1>
        <button onClick={this.changeBoard}>Switch</button>
        <div className='outer-message-container'>
          <div className="message-container" id="messageScroll"> 
            {this.renderMessages()}
          </div>
        </div>
        <MessageInput messages={this.state.messages}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    allTeams: state.teams.allTeams,
    leagueMessages: state.leagues.currentLeague.messages
  }
}

export default connect(mapStateToProps, null)(MessageBoard)