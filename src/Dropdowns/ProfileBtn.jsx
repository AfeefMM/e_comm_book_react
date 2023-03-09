import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useAuthValue } from "../AuthContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function ProfileBtn() {

 const { currentUser } = useAuthValue();
const navigate = useNavigate()
  //call this in TopBar
  //values to get: item name and price
 
    return (
      <div class="btn-group dropstart">
        <button
          class="navbar-toggler dropstart"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <button
                class="btn navCart  iconClr"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-person-circle"></i>
              </button>

              <ul class="dropdown-menu">
                
                <li>
                  <a class="dropdown-item" onClick={() => navigate("/profile")}>
                    Profile

                  </a>
                  
                </li>
                <li>
                  <a class="dropdown-item" onClick={() => signOut(auth)}>
                    Log out
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                
                
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );

}

export default ProfileBtn;

