import React, { Component, useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useCart } from "react-use-cart";
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartDropDown from "./CartDropdown";

function Cart() {
  //call this in TopBar
  //values to get: item name and price

  const { items } = useCart();

  const [bookItems, setbookItems] = useState("");

  const getItems = () => {
    setbookItems(items);
    
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <button onClick={handleShow} className="btn" style={{color:'rgb(228, 220, 207)'}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
<i className="bi bi-basket2-fill"></i>
</button>

<Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Book Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {
              items.map((book,i)=>{
                console.log(book);
                return(
                  <div>
                    <CartDropDown title={book.name} quantity={book.quantity}/>
                    {/* <a class="dropdown-item">{book.name}  {book.quantity}</a> */}
                  </div>
                );
              })
            }
        </Offcanvas.Body>
      </Offcanvas>
    </>
//     <div class="dropdown btn-group">
//   <button style={{color:'rgb(228, 220, 207)'}} class="btn dropdown-toggle dropleft" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//   <i className="bi bi-basket2-fill"></i>
//   </button>
//     <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    
//   {
//               items.map((book,i)=>{
//                 console.log(book);
//                 return(
//                   <div>
//                     {/* <CartDropDown title={book.name} quantity={book.prodQuantity}/> */}
//                     <a class="dropdown-item">{book.name}  {book.quantity}</a>
//                   </div>
//                 );
//               })
//             }

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
