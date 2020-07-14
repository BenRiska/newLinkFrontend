import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="login">
        <nav className="login-nav">
          <div className="login-container">
            <h3>Link</h3>
            <form className="login-form">
              <div>
                <label>Username</label>
                <input
                  onChange={(e) => this.props.handleChange(e)}
                  name="username"
                  type="text"
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  onChange={(e) => this.props.handleChange(e)}
                  name="password"
                  type="text"
                />
              </div>
              <Link
                to="/"
                onClick={() => {
                  this.props.logIn();
                }}
              >
                Log In
              </Link>
              <div className="log-in-error">
                {this.props.logInError ? "this works" : ""}
              </div>
            </form>
          </div>
        </nav>
        <div className="signup">
          <div className="signup-banner"></div>
          <form className="signup-form">
            <h2>Create An Account</h2>
            <p>It's quick and easy.</p>
            <div>
              <label>Username</label>
              <input
                onChange={(e) => this.props.handleChange(e)}
                name="username"
                type="text"
              />
            </div>
            <div>
              <label>Full Name</label>
              <input
                onChange={(e) => this.props.handleChange(e)}
                name="name"
                type="text"
              />
            </div>

            <div>
              <label>Email</label>
              <input
                onChange={(e) => this.props.handleChange(e)}
                name="email"
                type="email"
              />
            </div>
            <div>
              <label>Password</label>
              <input
                onChange={(e) => this.props.handleChange(e)}
                name="password"
                type="text"
              />
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                this.props.signUp();
              }}
            >
              Sign Up
            </button>
            <div className="sign-up-error">
              {this.props.signUpError ? "this works" : ""}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
