import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom';
import { withRouter } from '../hocs/withRouter';

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

class RoutesComponent extends React.Component {
  render(){
    return (
      <Switch>
        {/* <Route path="/" element={<SplashPage />} /> */}
        {/* <Route path="/sessions" element={<Sessions />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/league_creation" element={<LeagueCreation />} />
        <Route path="/dashboard/*" element={<LeagueDash />} />
        <Route path="/auth" element={<LoginSignup />} />
        <Route path="/dev_list" element={<DevList />} />
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/auth" element={<LoginSignup />} /> */}
      </Switch>
    )
  }
}

export default withRouter(RoutesComponent)