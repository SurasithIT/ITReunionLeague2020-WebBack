import React, { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const login = (event) => {
    // event.preventDefault();
    console.log("login");
  };

  return (
    <div className="container login-container">
      <div className="d-flex d-flex justify-content-center">
        <div className="col-md-6 login-form-1">
          <h3>Login</h3>
          <form
            onSubmit={(event) => {
              login(event);
            }}
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <button
                className="btn btn-primary float-right"
                onClick={(event) => {
                  login(event);
                }}
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
