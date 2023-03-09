import React, { useState, useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword,sendEmailVerification } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase';
   
import { useForm } from "react-hook-form";

function SignUpForm() {
  // RegistrationForm can go through 5 states
  // states: (1) initial, (2) loading, (3) validationFailed, (4) successful, (5) unsucessful
  // const [state, setState] = useState("initial");

  // errorsState is for tracking the validation errors
  //const [errorsState, setErrorsState] = useState([]);

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [dob, setDob] = useState("");
  const [nationality, setNationality] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const addTodo = async (e) => {
    e.preventDefault();  
   
    try {
        const docRef = await addDoc(collection(db, "book-users"), {
          firstName: firstName,    
          lastName: lastName,    
          email: email,    
          DOB: dob,    
          nationality: nationality,    
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}
  
  const register = (e) => {
    e.preventDefault();
    setError("");
    if (validatePassword()) {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        sendEmailVerification(auth.currentUser)
        .then(() => {
          navigate('/verify-email')
        }).catch((err) => alert(err.message))
      })
        .then((res) => {
          console.log(res.user);
        })
        .then(addTodo())
        .catch((err) => setError(err.message));
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        return "Passwords does not match";
      }
    }
    return isValid;
  };

  return (
    <div>
    <div className="center">
      <div className="auth container signUpContainer ps-3 pe-3">
      <h1 className="py-5" style={{ textAlign: "center" }}>
         Register
       </h1>
        {error && <div className="auth__error">{error}</div>}
        <form onSubmit={register} name="registration_form">
          <label>Enter your firstname *</label>
          <input
            value={firstName}
            required
            className="field form-control"
            name="firstName"
            type="text"
            onChange={(e) => setfirstName(e.target.value)}
          />

          <label>Enter your lastname *</label>
          <input
            value={lastName}
            required
            className="field form-control"
            name="lastName"
            type="text"
            onChange={(e) => setlastName(e.target.value)}
          />
          <label>Enter your DOB *</label>
          <input
            value={dob}
            required
            className="field form-control"
            name="dob"
            type="text"
            onChange={(e) => setDob(e.target.value)}
          />
          <label>Enter your nationality *</label>
          <input
            value={nationality}
            required
            className="field form-control"
            name="nationality"
            type="text"
            onChange={(e) => setNationality(e.target.value)}
          />

          <label>Enter your email *</label>
          <input
            value={email}
            required
            className="field form-control"
            name="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Enter a password *</label>
          <input
            value={password}
            required
            className="field form-control"
            name="password"
            autocomplete="off"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Reenter password *</label>
          <input
            value={confirmPassword}
            required
            className="field form-control"
            name="password"
            autocomplete="off"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="btn submitBtn mb-3 " type="submit">
            Submit
          </button>
          <br />
          <span style={{ marginLeft: "12em" }}>
            Already registered?
            <Link
              to="/login"
              style={{ color: "rgb(87, 111, 114)", textDecoration: "none" }}
            >
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
    </div>
  );
}

export default SignUpForm;
