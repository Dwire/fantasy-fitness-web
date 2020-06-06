import React from 'react';
// import logo from './logo.svg';

import './styles/App.css';
import './styles/leagueDash.css';
import './styles/team.css';
import './styles/challenge.css';
import './styles/league.css';
import './styles/index.css';
import './styles/message.css';
import './styles/landingPage.css';

import './styles/sideNav.css';
import './styles/leagueCreation.css';
import './styles/loginSignup.css';


import Routes from './routes/routes'

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
