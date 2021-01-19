import React, {Component} from 'react'

import withAuth from '../hocs/withAuth';

import LeagueStandings from './LeagueStandings'
import LeagueHighlights from './LeagueHighlights'
import Team from './Team'
import ChallengeCenter from './ChallengeCenter'
import MessageBoard from './MessageBoard'

import SideNav from '../components/SideNav'

class LeagueDash extends Component {

  // componentDidMount(){
    
  // }

  render() {
    return (
      <div>
          <SideNav />
        <div className="league-dash-container main-container">
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