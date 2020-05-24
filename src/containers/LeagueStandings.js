import React from 'react'
import {connect} from 'react-redux'
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'




const LeagueStandings = ({teams}) => {
  
  const team_total_completions = () => {
    return teams.map(team => completion_info(team))
  }

  const completion_info = (team) => {
    return {
      name: team.name,
      claimed: team.completions.filter(comp => comp.status === 'claimed').length,
      completed: team.completions.filter(comp => comp.status === 'completed').length,
    }
  }

  return (
    <div className='column col-1'>
      <BarChart width={730} height={250} data={team_total_completions()}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="completed" fill="#8884d8" />
        <Bar dataKey="claimed" fill="#82ca9d" />
      </BarChart>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    teams: state.teams.allTeams
  }
}

export default connect(mapStateToProps, null)(LeagueStandings)