import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {setCurrentLeague} from '../actions/leagueActions'
import {setCurrentTeam, setAllTeams} from '../actions/teamActions'
import {setDarkMode} from '../actions/settingActions'

class SideNav extends React.Component {
  state = {
    htmlClass: "",
    myLeagues: false
  }

  // GET RID OF THIS FUNCTION AND MOVE DARK MODE TO REDUX
componentDidMount() {
  let currentMode = window.localStorage.getItem('color')
  this.setState({darkMode: !!currentMode})
}



  handleClick = () => {
    if (this.state.htmlClass === "open"){
      this.setState({htmlClass: ''})
    }else{
      this.setState({htmlClass: "open"})
    }
  }

  // this should be moved
  handleLogout = () => {
    localStorage.clear()
    window.location.reload()
  }

  displayMyLeaguesDropDown = () => {
    if (this.state.myLeagues){
      return (
        <ul >
          {this.props.allLeagues.map(league => <li onClick={this.handleSelectLeague} id={league.id}>{league.name}</li>)}
        </ul>
      ) 
    }
  }

  hanldeMyLeaguesToggle = () => {
    this.setState({
      myLeagues: !this.state.myLeagues
    })
  }

  handleSelectLeague = (e) => {
    e.preventDefault()
    let leagueId = e.target.id
    let newCurrentLeague = this.props.allLeagues.find(league => league.id === parseInt(leagueId) ) 
    // debugger
    this.props.setCurrentLeague(newCurrentLeague)
    this.setTeams(newCurrentLeague)
  }

  setTeams = (newCurrentLeague) => {
    let allTeams = newCurrentLeague.teams
    let newCurrentTeam = allTeams.find(team => team.teammates.find(teammate => teammate.id === parseInt(this.props.user.id)))
    
    this.props.setCurrentTeam(newCurrentTeam)
    this.props.setAllTeams(allTeams)
  }

  toggleDarkMode = (e) => {
    console.log(e);
    console.log(e.target.checked);
    // this.setLocalStorage() 
    if (e.target.checked) {
      window.localStorage.setItem('color', 'dark-mode')
      this.props.setDarkMode(e.target.checked)
    }else{
      window.localStorage.setItem('color', '')
      this.props.setDarkMode(e.target.checked)
    }
    
  }


  render(){
    return (
      <div className="wrapper">
      
        <header>
          <p onClick={this.handleClick} className= {"menu collapse " + this.state.htmlClass}><span></span></p>
          <div className="toggle-switch" onChange={this.toggleDarkMode}>
            <input type="checkbox"  id="toggle-dark-mode" checked={this.props.darkMode} />
            <label htmlFor="toggle-dark-mode"></label>
          </div>
        </header>
        <aside className={"slidenav " + this.state.htmlClass} >
          <nav>
            <ul>
              {/* <li><Link to='league_creation'>Create A League</Link> </li> */}
              {/* <li> League Invitations </li> */}
              {/* <li onClick={this.hanldeMyLeaguesToggle}>My Leagues  {this.state.myLeagues ? "↑" : "↓" } 
                {this.displayMyLeaguesDropDown()}
              </li> */}
              {/* <li> See All Work Out Packs </li> */}
              {/* <li> In Development </li> */}
              {/* <li> Profile </li> */}
              {/* <li> Profile </li> */}


              {/* <li><Link to="/dashboard">League Dashboard</Link></li>
              <li><Link to="/dev_list">In Development</Link></li> */}
              <li><Link to="/">Rules/Home</Link></li>
              <li onClick={this.handleLogout}>sign out</li>
            </ul>
          </nav>
        </aside>
        {/* <main class="main-container">
      
        </main> */}
      </div>
  )}
}

const mapStateToProps = state => {
  return {
    allLeagues: state.leagues.allLeagues,
    user: state.user,
    darkMode: state.settings.darkMode
  }
}

export default connect(mapStateToProps, {setCurrentLeague, setCurrentTeam, setAllTeams, setDarkMode})(SideNav)