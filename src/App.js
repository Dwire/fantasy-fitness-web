import React from 'react';
import {connect} from 'react-redux'
// import logo from './logo.svg';

import './styles/App.css';
import './styles/leagueDash.css';
import './styles/team.css';
import './styles/challenge.css';
import './styles/league.css';
import './styles/index.css';
import './styles/message.css';
import './styles/landingPage.css';
import './styles/leagueChart.css';

import './styles/sideNav.css';
import './styles/leagueCreation.css';
import './styles/loginSignup.css';


import Routes from './routes/routes'

function App({darkMode}) {
  return (
    <div className={`App ${darkMode ? "dark-mode" : ''}`}>
      <Routes />
    </div>
  );
}

const mapStateToProps = state => {
  return {darkMode: state.settings.darkMode}
}

export default connect(mapStateToProps, null)(App)



// export default App;
