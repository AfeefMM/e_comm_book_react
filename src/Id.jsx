import React from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

function ID(props) {
  let navigate = useNavigate();


  return (
    <div className="card m-2" style={{ minHeight: "250px" }} key={props.key}>
      <img
        src={props.photo}
        className="card-img-top"
        alt="..."
        style={{ maxHeight: "100px" }}
      />
      <div className="card-body">
        <h4 className="card-title">
          <Link
            to={`/description/${props.book_id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            {props.book_title}
          </Link>
        </h4>
        <h5>{props.book_author}</h5>
        <span className="card-text">Price: {props.physical_price} </span> <br />
      </div>
    </div>
  );
}

export default ID;

/*

<div class="col-md-6 col-lg-4 col-xl-3">
								<div id="product-1" class="single-product">
										<div class="part-2">
												<h3 class="product-title">Here Product Title</h3>
												<h4 class="product-old-price">$79.99</h4>
												<h4 class="product-price">$49.99</h4>
										</div>
								</div>
						</div>
*/
