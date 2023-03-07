import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Cart from "./Cart";
import ProfileBtn from "./ProfileBtn";

class Topbar extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar navBackground" data-bs-theme="dark" >
          <div className="container-fluid">
            <a className="navbar-brand topbar" href="#">
              Book Store
            </a>
            <form class="d-flex ms-auto" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-light" type="submit">
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
              <a className="nav-link topbar" href="#">
                Pricing
              </a>
              <Cart/>
              <ProfileBtn/>
            </div>
            
          </div>

          
        </Navbar>
        
      </div>
    );
  }
}

export default Topbar;
