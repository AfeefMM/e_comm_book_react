import React, { Component, useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useCart } from "react-use-cart";

function Cart() {
  //call this in TopBar
  //values to get: item name and price

  const { items } = useCart();

  const [bookItems, setbookItems] = useState("");

  const getItems = () => {
    setbookItems(items);
    console.log(bookItems);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div class="dropdown">
  <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i className="bi bi-basket2-fill"></i>
  </button>
  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
  {
              items.map((book,i)=>{
                return(
                  <div>
                    {book.id}
                  </div>
                );
              })
            }
  </div>
</div>
    // <div className="btn-group dropstart">
    //   <button
    //     className="navbar-toggler dropstart"
    //     type="button"
    //     data-bs-toggle="collapse"
    //     data-bs-target="#navbarNavDarkDropdown"
    //     aria-controls="navbarNavDarkDropdown"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse dropdown" id="navbarNavDarkDropdown">
    //         <button
    //           className="btn navCart iconClr dropdown-toggle"
    //           data-bs-toggle="dropdown"
    //           aria-expanded="false"
    //           id="dropdownMenuButton"
    //         >
    //           <i className="bi bi-basket2-fill"></i>
    //         </button>
    //         {
    //           items.map((book,i)=>{
    //             return(
    //               <div>
    //                 {book.id}
    //               </div>
    //             );
    //           })
    //         }
            

    //   </div>
    // </div>
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
