import { useState } from "react";

function ProductTypeECard(props) {
  

const toggleCard = () =>{
  props.isPrice("e");
  props.toggleClass("e");
  console.log(props.isSelectedE)
}
//+ props.isSelected?'cardSelector':''
  return (
    <div
      className='card m-2'
      onClick={() => toggleCard()}
      style={{ maxWidth: "150px", height: "125px", color:props.isSelectedE?'#e4dccf':'black' , backgroundColor:props.isSelectedE?'#576f72':'#e4dccf'}}
    >
      <div className={'card-body '} style={{ fontSize: "16px" }}>
        <span className="card-text" style={{ fontWeight: "400" }}>
          E-book price
        </span>{" "}
        <br />
        <span className="card-text" style={{ fontWeight: "300" }}>
          ${props.e_book_price}
        </span>{" "}
        <br />
      </div>
    </div>
  );
}

export default ProductTypeECard;
