import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import { auth } from "../firebase";
import { useAuthValue } from "../AuthContext";
import Topbar from "../navbar";
import NotAuthTopbar from "../NotAuthNavBar";



function LoginForm() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [error, setError] = useState('')
  const {setTimeActive} = useAuthValue()
  const navigate = useNavigate()

  const login = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      if(!auth.currentUser.emailVerified) {
        sendEmailVerification(auth.currentUser)
        .then(() => {
          setTimeActive(true)
          navigate('/verify-email')
        })
      .catch(err => alert(err.message))
    }else{
      navigate('/list')
    }
    })
    .catch(err => setError(err.message))
  }

  return (
    <div>
    <div className="container loginContainer">
      <h1 className="py-5" style={{ textAlign: "center" }}>
        Login
      </h1>
      <form onSubmit={login} name='login_form'>
      <div className="mb-3">
        <label for="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          defaultValue="email"
          aria-describedby="emailHelp"
          onChange={e => setEmail(e.target.value)}
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
          defaultValue="password"
          className="form-control"
          id="password"
          aria-describedby="password"
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div>
      <button className="btn submitBtn mb-3" type="submit" >
        Submit
      </button>
      </div>
      </form>
      <p style={{marginLeft:"3em"}}>
          Don't have and account? 
          <Link
              to="/signup"
              style={{ color: "rgb(87, 111, 114)", textDecoration: "none"}}
            >
              Create one here
            </Link>

        </p>
      
      
    </div>
    </div>
  );
}

export default LoginForm;
