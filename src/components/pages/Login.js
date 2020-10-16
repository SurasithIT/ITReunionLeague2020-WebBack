import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { trackPromise } from "react-promise-tracker";

class Login extends Component {
  state = {
    username: "",
    password: "",
    haveuser: false,
  };

  hanDleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  hanDleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
    };
    trackPromise(
      axios
        .post("https://itreuionapi.herokuapp.com/user/login", user)
        .then((res) => {
          const { token } = res.data;
          localStorage.setItem("token", token);
          this.setState({
            haveuser: true,
          });
        })
        .catch((err) => console.log(err))
    );
  };

  render() {
    if (this.state.haveuser) window.location.reload();
    return (
      <div className="container login-container">
        <div className="d-flex d-flex justify-content-center">
          <div className="col-md-6 login-form-1">
            <h3>Login</h3>
            <form onSubmit={this.hanDleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  id="username"
                  onChange={this.hanDleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={this.hanDleChange}
                  required
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary float-right">Log in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
