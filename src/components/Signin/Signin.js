import React from 'react';
import './Signin.css';

class Signin extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }
  // event handlers onXYZ
  // will update component state with email input field when input changes
  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value})
  }

  // update component state with password input field when input changes
  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value })
  }

  // event handler allowing password state to change when clicked
  onSubmitSignIn = () => {
    // fetch(): performs get() request
    fetch('http://localhost:3000/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data === 'success') {
        this.props.onRouteChange('home');
      }
    })
  }

  render()
  {
    const { onRouteChange } = this.props;
    return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f1 fw6 ph0 mh0">Sign In</legend>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
          <input 
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
          type="email" 
          name="email-address"  
          id="email-address"
          onChange={this.onEmailChange}
          />
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
          <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="password" 
          name="password"  
          id="password"
          onPasswordChange={this.onPasswordChange}/>
        </div>
      </fieldset>
      <div className="">
        <input 
        // defining function to get called
        onClick={this.onSubmitSignin}        
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
        type="submit" 
        value="Sign in"
        />
      </div>
        <p onClick={() => onRouteChange('register')} 
        className="b ph3 pv2 input-reset ba b--black grow pointer f6 dib">Register</p>
    </div>
  </main>
  </article>
  );
}
}

export default Signin;