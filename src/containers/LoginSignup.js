import React, {Component} from 'react'

import Signup from '../components/Signup'
import Login from '../components/Login'


class LoginSignup extends Component {


  render() {
    return (
      <div className='login'>
        <Signup />
        <Login />
      </div>
    )
  }
}

export default LoginSignup