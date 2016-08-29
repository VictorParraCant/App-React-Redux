import React, { Component } from 'react';
import timezones from '../data/timezones';
import map from 'lodash/map';
import cx from 'classnames';


class SignupForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error_email: null,
      error_password: null
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  validate() {

    const { email, password } = this.state;
    let newState = {};
    let hasErrors = false;

    // Validaciones
    if ( email !== "p@p.com" ) {
      hasErrors = true;
      newState.error_email = "que no va el mail";
    } else {
      newState.error_email = null;
    }

    if ( password !== "1234" ) {
      hasErrors = true;
      newState.error_password = "que no va la password";
    } else {
      newState.error_password = null;
    }

    if (hasErrors){
      this.setState(newState);
    } else {
      return true;
    }


  }

  onSubmit(e) {
    e.preventDefault();
    if( this.validate() ){
      console.log('para el backend');
      // send to back ...
    }
  }

  render() {

    const { email, password, error_email, error_password  } = this.state;
    console.log(error_email, error_password);

    const emailInputClass = cx({
      "form-group": true,
      "has-error": ( error_email !== null ) ? true : false
    });

    const passwordInputClass = cx({
      "form-group":true,
      "has-error": ( error_password !== null ) ? true : false
    })

    return (
      <form onSubmit={::this.onSubmit}>
        <h1>Join our community!</h1>

        <div className={emailInputClass}>
          <label className="control-label">Email</label>
          <input
            value={email}
            onChange={::this.onChange}
            type="email"
            name="email"
            className="form-control"
          />
        </div>

        <div className={passwordInputClass}>
          <label className="control-label">Password</label>
          <input
            value={password}
            onChange={::this.onChange}
            type="password"
            name="password"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

export default SignupForm;
