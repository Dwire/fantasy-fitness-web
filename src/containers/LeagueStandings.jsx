import React from 'react'
import {connect} from 'react-redux'
import {setChartView} from '../actions/sessionActions'
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts'




const LeagueStandings = ({teams, chartView, setChartView}) => {
  
  const team_total_completions = () => {
    return teams.map(team => completion_info(team))
  }

  const completion_info = (team) => {
    // SHOULD NOW HAVE ACCESS TO team.week_completions
    // NEED TO DOUBLE CHECK THAT IS SENDING BACK THE RIGHT INFO

    if (chartView === "allTime") {
      return {
        name: team.name,
        claimed: team.completions.filter(comp => comp.status === 'claimed').length,
        completed: team.completions.filter(comp => comp.status === 'completed').length,
      }
    }else{
      return {
        name: team.name,
        claimed: team.week_completions.filter(comp => comp.status === 'claimed').length,
        completed: team.week_completions.filter(comp => comp.status === 'completed').length,
      }
    }
  } 

  const change_chart_view = () => {
    chartView === "allTime" ? setChartView("week") : setChartView("allTime")
  }

  return (
    <div className='column col-1 league-charts'>
      <div>
       <p className='chart-header-right' onClick={change_chart_view}>▶</p>
      </div>
      <div className="chart-header">
        <h1>Standings ({chartView === "allTime" ? "All Time" : "Week"})</h1>
      </div>
      <p className='chart-header-left' onClick={change_chart_view}>◀</p>
        <ResponsiveContainer className={'chart-graph'}>
          <BarChart 
            className='bar-chart' 
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }} 
            data={team_total_completions()}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {/* <Bar dataKey="completed"  fill="#8884d8" /> */}
            {/* <Bar dataKey="completed"  fill="rgba(54, 182, 252, 0.8)" /> */}
            <Bar dataKey="completed"  fill="rgba(113, 33, 242, 0.6)" />
            {/* <Bar dataKey="claimed"  fill="#82ca9d" /> */}
          </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log("STATE", state);
  
  return {
    teams: state.teams.allTeams,
    chartView: state.session.chartView
  }
}

export default connect(mapStateToProps, {setChartView})(LeagueStandings)