import React, { useState, useContext } from "react";

function LoginForm() {
  return (
    <div className="container loginContainer">
      <h1 className="py-5" style={{ textAlign: "center" }}>
        Login
      </h1>

      <div className="mb-3">
        <label for="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label for="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          aria-describedby="password"
        />
      </div>
      <div>
      <button className="btn submitBtn mb-3" type="button" >
        Submit
      </button>
      </div>
      
    </div>
  );
}

export default LoginForm;
