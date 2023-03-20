import React, { Component, useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";


function Cart() {
  //call this in TopBar
  //values to get: item name and price



  return (
    <div className="btn-group dropstart">
      <button
        className="navbar-toggler dropstart"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDarkDropdown"
        aria-controls="navbarNavDarkDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <button
              className="btn navCart iconClr"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >

              
            </button>

            <ul className="dropdown-menu cardItem">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                  <button className="btn ">
                    <i
                      className="bi bi-trash3-fill"
                      style={{ color: "rgb(255, 3, 3)" }}
                    ></i>
                  </button>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
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

export default Cart;

/* 

<i className="ellipsis vertical icon" />
              {this.state.open ? (
                <div className="menu" style={{ display: `${this.state.open ? 'block' : 'none'}`}}>
                  <div className="item">
                    <i className="edit icon" /> Edit Post
                  </div>
                  <div className="item">
                    <i className="delete icon" /> Remove Post
                  </div>
                  <div className="item">
                    <i className="hide icon" /> Hide Post
                  </div>
                </div>
              ) : null}



              

<ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"> <span class="glyphicon glyphicon-shopping-cart"></span> 7 - Items<span class="caret"></span></a>
                <ul className="dropdown-menu dropdown-cart" role="menu">
              <li>
                  <span className="item">
                    <span className="item-left">
                        <img src="http://lorempixel.com/50/50/" alt="" />
                        <span className="item-info">
                            <span>Item name</span>
                            <span>23$</span>
                        </span>
                    </span>
                    <span className="item-right">
                        <button className="btn btn-xs btn-danger pull-right">x</button>
                    </span>
                </span>
              </li>
              </ul>
            </li>
            </ul>

*/
