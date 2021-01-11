import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import Signup from '../components/Signup'
import Login from '../components/Login'

import sessionAdapter from '../adapters/sessionAdapter'
import userAdapter from '../adapters/userAdapter'

import {setLogin, setInitialState} from '../actions/sessionActions'
import {setUser} from '../actions/userActions'


class LoginSignup extends Component {
  state = {
    bounce: 'bounceRight',
    user: {
      username: '',
      password: '',
      bio: '',
      tagline: ''
    }
  }

  handleBounce = (bounceDirection) => {
    this.setState({
      bounce: bounceDirection
    })
  }

  handleChange = (e) => {
    this.setState({
      user: {...this.state.user, [e.target.name]: e.target.value}
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.bounce === 'bounceRight'){
      sessionAdapter.login(this.state.user)
      .then(this.setLocalStorage)
    }else{
      userAdapter.create(this.state.user)
      .then(this.setLocalStorage)
    }
  }

  setLocalStorage = (res) => {
    window.localStorage.setItem('jwt', res.jwt)
    // this.props.setLogin()
    // this.props.setUser(res.user)
    this.props.setInitialState(res.user)
    //? should above be set in the dashboard?
  }

  render() {
    console.log(this.state.user);
    
    return (
      <section className="user">
        <div className="user_options-container">
          <div className="user_options-text">
            <div className="user_options-unregistered">
              <h2 className="user_unregistered-title">Don't have an account?</h2>
              <p className="user_unregistered-text">You all have accounts and should be Loging In. DO not 'Sign Up'</p>
              <button className="user_unregistered-signup" id="signup-button" onClick={() => this.handleBounce('bounceLeft')}>Sign up</button>
            </div>

            <div className="user_options-registered">
              <h2 className="user_registered-title">Have an account?</h2>
              <p className="user_registered-text">YES! You all have accounts. Click the button below and Log In.</p>
              <button className="user_registered-login" id="login-button" onClick={() => this.handleBounce('bounceRight')}>Login</button>
            </div>
          </div>
          
          <div className={`user_options-forms ${this.state.bounce}`} id="user_options-forms">

          {localStorage.getItem('jwt') || this.props.loggedIn ? 
            <Redirect to="/dashboard" />  
            :
            <React.Fragment>
              <Signup 
                handleSubmit={this.handleSubmit} 
                handleChange={this.handleChange} 
                userInfo={this.state.user} />
              <Login 
                handleSubmit={this.handleSubmit} 
                handleChange={this.handleChange}
                userInfo={this.state.user} />
            </React.Fragment>
          } 
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {loggedIn: state.session.loggedIn}
}

export default connect(mapStateToProps, {setUser, setInitialState, setLogin})(LoginSignup)


