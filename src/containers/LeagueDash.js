import React, {Component} from 'react'

import withAuth from '../hocs/withAuth';

import LeagueStandings from './LeagueStandings'
import LeagueHighlights from './LeagueHighlights'
import Team from './Team'
import ChallengeCenter from './ChalengeCenter'
import MessageBoard from './MessageBoard'


class LeagueDash extends Component {

  // componentDidMount(){
    
  // }

  render() {
    return (
      <div>
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

export default withAuth(LeagueDash)