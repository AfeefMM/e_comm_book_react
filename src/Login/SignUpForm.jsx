import React, { useState, useContext } from "react";

function SignUpForm() {
  return (
    <div className="container signUpContainer ps-3 pe-3">
      <h1 className="py-5" style={{ textAlign: "center" }}>
        Register
      </h1>

      <label>Enter your firstname *</label>
      <input className="field form-control" name="firstName" type="text" />

      <label>Enter your lastname *</label>
      <input className="field form-control" name="lastName" type="text" />

      <label>Enter your email *</label>
      <input className="field form-control" name="email" type="text" />

      <label>Enter a password *</label>
      <input
        className="field form-control"
        name="password"
        autocomplete="off"
        type="password"
      />
      <button className="btn submitBtn mb-3 " type="button">
        Submit
      </button>
      <br/>
      <label>Already registered? </label>

      <a href="#"style={{color:"rgb(87, 111, 114)",textDecoration:"none"}}> Login</a>

      
    </div>
  );
}

export default SignUpForm;
