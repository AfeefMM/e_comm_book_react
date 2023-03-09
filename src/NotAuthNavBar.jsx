import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Cart from "./Dropdowns/Cart";

import { useNavigate } from "react-router-dom";

function NotAuthTopbar () {

    const navigate = useNavigate()


      return (
        <div>
          <Navbar className="navbar navBackground" data-bs-theme="dark" >
            <div className="container-fluid">
              <a className="navbar-brand topbar" href="#">
                Book Store
              </a>
              <form className="d-flex ms-auto" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-light" type="submit">
                  Search
                </button>
              </form>
              <div className="navbar-nav ms-auto">
                <a className="nav-link topbar" aria-current="page" href="#">
                  Home
                </a>
                <a className="nav-link topbar" href="#">
                  Collections
                </a>
                <a className="nav-link topbar" onClick={() => navigate("/login")}>
                  Sign In
                </a>
                <a className="nav-link topbar" onClick={() => navigate("/signup")}>
                  Register
                </a>
                <Cart/>
              </div>
              
            </div>
  
            
          </Navbar>
          
        </div>
      );
  }
  
  export default NotAuthTopbar;
  