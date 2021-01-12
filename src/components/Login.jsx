import React from 'react'
// import {connect} from 'react-redux'

// import sessionAdapter from '../adapters/sessionAdapter'
// import {setUser} from '../actions/userActions'
// import {setLogin, setInitialState} from '../actions/sessionActions'


const Login = ({handleSubmit, handleChange, userInfo, error}) => {    
  return (
    <div className="user_forms-login">
      <h2 className="forms_title">Login</h2>
      <h4 className="form_error">{error}</h4>
      <form className="forms_form" onSubmit={handleSubmit}>
        <fieldset className="forms_fieldset">
          <div className="forms_field">
            <input type="text" placeholder="Username" className="forms_field-input" name="username" required autoFocus value={userInfo.username} onChange={handleChange} />
          </div>
          <div className="forms_field">
            <input type="password" placeholder="Password" className="forms_field-input" name="password" required value={userInfo.password} onChange={handleChange}/>
          </div>
        </fieldset>
        <div className="forms_buttons">
          <button type="button" className="forms_buttons-forgot">Forgot password?</button>
          <input type="submit" value="Log In" className="forms_buttons-action" />
        </div>
      </form>
    </div>
  )
}


// const mapStateToProps = state => {
//   return { loggedIn: state.session.loggedIn }
// }

export default Login
