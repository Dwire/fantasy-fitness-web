import React from 'react'
import {connect} from 'react-redux'
import {Navigate} from 'react-router-dom'

import Login from './Login'
import Signup from './Signup'
import sessionAdapter from '../adapters/sessionAdapter'
import userAdapter from '../adapters/userAdapter'
import {setLogin, setInitialState} from '../actions/sessionActions'
import {setUser} from '../actions/userActions'

class Auth extends React.Component {
  state = {
    login: true,
    user: {
      username: '',
      password: '',
      bio: '',
      tagline: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      user: {...this.state.user, [e.target.name]: e.target.value}
    })
  }

  handleFormSelection = () => {
    this.setState({
      login: !this.state.login
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.login){
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
  }

  handleAuthRender = () => {
    if (this.state.login){
      return <Login handleChange={this.handleChange} handleSubmit={this.handleSubmit} user={this.state.user} handleFormSelection={this.handleFormSelection} />
    }else{
      return <Signup handleChange={this.handleChange} handleSubmit={this.handleSubmit} user={this.state.user} handleFormSelection={this.handleFormSelection} />
    }

  }

  render() {
    console.log(this.state);
    console.log("LogIn", this.props.loggedIn);

    return (
      <React.Fragment >
        {localStorage.getItem('jwt') || this.props.loggedIn ?
          <Navigate to="/dashboard" replace />
        :
          this.handleAuthRender()
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {loggedIn: state.session.loggedIn}
}

export default connect(mapStateToProps, {setUser, setLogin, setInitialState})(Auth)