import React from 'react'

import SideNav from '../components/SideNav'

const LandingPage = () => {
  return (
    <div className="dev-list"> 
         <SideNav />
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Added Since Launch</h1>
        <ul>
            <li>Made completed status display more prominent</li>
            <li>Fixed a login bug that occured if you loged in with the wrong credientials</li>
            <li>Clicking on the Graph changes the visible team </li>
            <li>Filters for challenges - filter by: category, status, owner </li>
        </ul>

        <h1>Upcomming Changes</h1>
        <ul>
            <li>Change Switch button for navigating between message boards </li>
            <li>Challenges update automatically everytime someone on your team makes a status change </li>
            <li>add a list view for challenges</li>
            <li>Create player profile pages - Edit personal info/see historical data</li>
            <li>Upload profil images</li>
            <li>Change message board to be live messaging</li>

            <li>export workouts to excel spredsheet printable</li>
        </ul>
    </div>
  )
}

export default LandingPage