import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom';

// import Login from '../containers/landing/Login'
// import Register from '../containers/landing/Register'
// import Sessions from '../containers/landing/Sessions'
// import SplashPage from '../containers/landing/SplashPage'

// import Auth from '../components/Auth'
import LoginSignup from '../containers/LoginSignup'
import LandingPage from '../containers/LandingPage'
import LeagueDash from '../containers/LeagueDash'
import LeagueCreation from '../containers/LeagueCreation'
import DevList from '../containers/DevList'


// import EditProfileForm from '../components/EditProfileForm'

class Routes extends React.Component {
  render(){
    return (
      <Switch>
        {/* <Route exact path="/" component={SplashPage} /> */}
        {/* <Route exact path="/sessions" component={Sessions} /> */}
        {/* <Route exact path="/login" component={Login} /> */}
        {/* <Route exact path="/register" component={Register} /> */}
        <Route exact path="/league_creation" component={LeagueCreation} />
        <Route path="/dashboard" component={LeagueDash} />
        <Route path="/auth" component={LoginSignup} />
        <Route path="/dev_list" component={DevList} />
        <Route path="/" component={LandingPage} />
        {/* <Route path="/auth" component={LoginSignup} /> */}
      </Switch>
    )
  }
}

export default withRouter(Routes)