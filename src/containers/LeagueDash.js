import React from 'react'

import LeagueStandings from './LeagueStandings'
import LeagueHighlights from './LeagueHighlights'
import Team from './Team'
import ChallengeCenter from './ChalengeCenter'
import MessageBoard from './MessageBoard'


const LeagueDash = () => {
  return (
    <div class="league-dash-container">
      <LeagueStandings />
      <LeagueHighlights />
      <Team />
      <ChallengeCenter />
      <MessageBoard />
    </div>
  )
}

export default LeagueDash