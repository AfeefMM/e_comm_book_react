import ProductTypeCard from "./ProductTypeCard";
import ProductTypeECard from "./ProductTypeECard";
import { useState, useEffect } from "react";

function ProdTypeGroup(props) {


   const [isE, setisE] = useState("")


  const isPrice = price =>{
    // console.log(price)
    if(price === "e"){
      setisE("e")
      props.selectPrice(props.e_book_price)
     
    }
    else if(price === "p"){
      setisE("p")
      props.selectPrice(props.physical_price)
    }
  }
  return (
    <div className="container" style={{maxWidth:"300px",alignContent:"start"}}>
        <div className="row" xs={1} md={2}>
            <div className="col">
            <ProductTypeCard isPrice={isPrice} physical_price={props.physical_price }/>
            </div>
            <div className="col">
            <ProductTypeECard isPrice={isPrice} e_book_price={props.e_book_price}/>
            </div>
        

        </div>
      
    </div>
  );
}

export default ProdTypeGroup;
