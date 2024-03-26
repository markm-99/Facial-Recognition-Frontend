import React from 'react';
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  
  // Function to update the 'name' state based on input value
  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  // Function to update the 'email' state based on input value
  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  // Function to update the 'password' state based on input value
  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  // Function to handle user registration submission
  onSubmitSignIn = () => {
    // Send a POST request to register a new user
    fetch('http://localhost:3001/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
    
      .then(response => response.json())
      .then(user => {
        // If user registration is successful, load the user and change the route to 'home'
        if (user) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f3" htmlFor="name">Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f3" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f3" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;