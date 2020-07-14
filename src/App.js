import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      formValues: { username: "", name: "", email: "", password: "" },
      user: null,
      loggedIn: false,
      logInError: false,
      signUpError: false,
    };
  }

  componentDidUpdate() {
    setTimeout(this.checkErrors, 3000);
  }

  checkErrors = () => {
    if (this.state.logInError === true) {
      this.setState({ logInError: false });
    }
    if (this.state.signUpError === true) {
      this.setState({ signUpError: false });
    }
  };

  checkValues = (type) => {
    if (type === "sign up") {
      this.sendSignUp();
    } else {
      this.sendLogIn();
    }
  };

  handleChange = (e) => {
    this.setState({
      formValues: { ...this.state.formValues, [e.target.name]: e.target.value },
    });
  };

  sendSignUp = () => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(this.state.formValues),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          this.setState({ signUpError: true });
        } else {
          this.setState({ user: data, loggedIn: true });
        }
      });
  };

  signUp = () => {
    this.checkValues("sign up");
  };

  sendLogIn = () => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.formValues.username,
        password: this.state.formValues.password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.error) {
          this.setState({ logInError: true });
        } else {
          this.setState({ user: data, loggedIn: true });
        }
      });
  };

  logIn = () => {
    this.checkValues("log in");
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/">
              {this.state.loggedIn === true ? (
                <Home />
              ) : (
                <Login
                  handleChange={this.handleChange}
                  signUp={this.signUp}
                  logIn={this.logIn}
                  logInError={this.state.logInError}
                  signUpError={this.state.signUpError}
                />
              )}
            </Route>
          </Switch>
        </Router>
        <footer>Link 2020 || Ben Taylor Engineering</footer>
      </div>
    );
  }
}

export default App;
