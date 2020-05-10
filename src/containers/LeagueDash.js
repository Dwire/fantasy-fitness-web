import React, {Component} from 'react'

import LeagueStandings from './LeagueStandings'
import LeagueHighlights from './LeagueHighlights'
import Team from './Team'
import ChallengeCenter from './ChalengeCenter'
import MessageBoard from './MessageBoard'
import LoginSignup from './LoginSignup'


class LeagueDash extends Component {

  componentDidMount(){
    
  }

  render() {
    return (
      <div>
        <LoginSignup />
        <div className="league-dash-container">
          <LeagueStandings />
          <LeagueHighlights />
          <Team />
          <MessageBoard />
          <ChallengeCenter />
        </div>
      </div>
    )
  }
}

export default LeagueDash