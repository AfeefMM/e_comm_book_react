import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";

class ProfileBtn extends Component {
  //call this in TopBar
  //values to get: item name and price
  render() {
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
                class="btn navCart iconClr"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-person-circle"></i>
              </button>

              <ul class="dropdown-menu">
                
                <li>
                  <a class="dropdown-item" href="#">
                    Profile
                  </a>
                  
                </li>
                <li>
                  <a class="dropdown-item" href="#">
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
}

export default ProfileBtn;

