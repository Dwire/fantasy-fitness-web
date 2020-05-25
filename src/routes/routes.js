import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom';

// import Login from '../containers/landing/Login'
// import Register from '../containers/landing/Register'
// import Sessions from '../containers/landing/Sessions'
// import SplashPage from '../containers/landing/SplashPage'
import Auth from '../components/Auth'
import LandingPage from '../containers/LandingPage'
import LeagueDash from '../containers/LeagueDash'


// import EditProfileForm from '../components/EditProfileForm'

class Routes extends React.Component {
  render(){
    return (
      <Switch>
        {/* <Route exact path="/" component={SplashPage} /> */}
        {/* <Route exact path="/sessions" component={Sessions} /> */}
        {/* <Route exact path="/login" component={Login} /> */}
        {/* <Route exact path="/register" component={Register} /> */}
        <Route path="/home" component={LandingPage} />
        <Route path="/dashboard" component={LeagueDash} />
        <Route path="/auth" component={Auth} />
      </Switch>
    )
  }
}

export default withRouter(Routes)