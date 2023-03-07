import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import "bootstrap/dist/css/bootstrap.min.css";

class LoginScreen extends Component {
  render() {
    return (
      <div className="loginScreen" style={{"marginTop": "5em"}}>
        <div className="col-12 col-sm-8 col-md-6 col-lg-8 col-xl-8 mx-auto">
          <SignUpForm />
        </div>
      </div>
    );
  }
}

export default LoginScreen;
