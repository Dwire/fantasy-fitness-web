import React, {Component} from 'react'

import userAdapter from '../adapters/userAdapter'


class Signup extends Component  {
  state = {
    username: '',
    bio: '',
    tagline: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    userAdapter.create(this.state).then(console.log)
  }

  render() {
    console.log(this.state);
    
    return (
      <div>
        <form>
          <label htmlFor="username">Username</label>
          <input type='text' name='username' id='username' onChange={this.handleChange} />

          <label htmlFor="password">Password</label>
          <input type='text' name='password' id='password' onChange={this.handleChange}/>

          <label htmlFor="bio">Bio</label>
          <input type='text' name='bio' id='bio' onChange={this.handleChange}/>

          <label htmlFor="tagline">Tagline</label>
          <input type='text' name='tagline' id='tagline' onChange={this.handleChange}/>

          <input type='submit' onSubmit={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}

export default Signup