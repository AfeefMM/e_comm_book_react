import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const StarRating = () => {  
  return (
    //array value as variable
    <div style={{display:'inline-block'}}>
    <div className="star-rating">
      {[...Array(5)].map((star,i) => {        
        return (         
          <span key= {i}className="star">&#9733;</span>        
        );
      })}
      <div>
        <p style={{fontWeight:'300'}}>10 reviews</p>
      </div>
    </div>
    </div>
  );
};

export default StarRating;


