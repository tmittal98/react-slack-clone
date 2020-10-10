import React, { Component } from 'react';
import { signInWithGoogle } from '../firebase';

class SignIn extends Component {
  render() {
    return (
      <div className="signin-form">
        <h1>Sign In/ Sign Up</h1>
        <button className="btn basic-btn" onClick={signInWithGoogle}>
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png"
            alt="google-logo"
          />
          Sign In with Google
        </button>
        <div className="signin-divider">OR</div>
        <button className="btn basic-btn" onClick={signInWithGoogle}>
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png"
            alt="google-logo"
          />
          Sign Up with Google
        </button>
      </div>
    );
  }
}

export default SignIn;
