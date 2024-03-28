import React from 'react';

// turn into smart component so it keeps state (turn into class)
class Signin extends React.Component {
  constructor(props)
  {
      super(props); //used to access parent class properties/methods
      this.state = { //initialize component state in constructor
          signInEmail: '',
          signInPassword: ''
      }
  }

  // listen to onChange event of email
  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value});
  }
  
  // listen to onChange event of password 
  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value});
  } 
  
  // when user signs in, display their username and password in the console for verification
  // send signin data to server using fetch() function
  onSubmitSignIn = () => {
    fetch('http://localhost:3001/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response=>response.json())
      .then(user => {
        if (user)
        {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      })
    console.log(this.state);
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
          className=" pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
          type="email" 
          name="email-address"  
          id="email-address"
          // apply email event handler
          onChange={this.onEmailChange}
          />
        </div>
        
        <div className="mv3">
          <label className="db fw6 lh-copy f3" htmlFor="password">Password</label>
          <input 
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="password" 
          name="password"  
          id="password"
          // apply password event handler
          onChange={this.onPasswordChange}/>
        </div>
      </fieldset>
     
     <div className="">
        <input 
        // defining function to get called on signin
        onClick={this.onSubmitSignIn}      
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
        type="submit" 
        value="Sign in"
        />
      </div>
      <div className="lh-copy mt3">
        <p onClick={() => onRouteChange('register')} 
        className="b ph3 pv2 input-reset ba b--black grow pointer f6 dib">Register </p>
      </div>
    </div>
  </main>
  </article>
  );
  }
}

export default Signin;