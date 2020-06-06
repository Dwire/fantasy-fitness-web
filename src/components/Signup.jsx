import React from 'react'

// import userAdapter from '../adapters/userAdapter'


const Signup = ({handleSubmit, handleChange}) => {
    return (
      <div className="user_forms-signup">
        <h2 className="forms_title">Sign Up</h2>
        <form className="forms_form" onSubmit={handleSubmit}>
          <fieldset className="forms_fieldset">
            <div className="forms_field">
              <input type="text" placeholder="Full Name" className="forms_field-input" required onChange={handleChange} />
            </div>
            <div className="forms_field">
              <input type="email" placeholder="Email" className="forms_field-input" required onChange={handleChange} />
            </div>
            <div className="forms_field">
              <input type="password" placeholder="Password" className="forms_field-input" required onChange={handleChange}/>
            </div>
          </fieldset>
          <div className="forms_buttons">
            <input type="submit" value="Sign up" className="forms_buttons-action" />
          </div>
        </form>
      </div>
    )
  // }
}

export default Signup