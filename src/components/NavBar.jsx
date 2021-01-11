import React from 'react'
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <ul className='nav-bar'>
      {/* <li>home</li>
      <li>dashboard</li> */}
      <li><Link to="/auth">Login/Register</Link></li>
    </ul>
  )
}

export default NavBar