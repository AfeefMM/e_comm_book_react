import ProductQuantity from "./ProductQuantity";
import { useState } from "react";
import { useCart } from "react-use-cart";


function CartDropDown(props) {

    const {items,updateItemQuantity } = useCart();

    //quantity values
  const [prodQuantity, setprodQuantity] = useState(1);
  const quantityHandle = num => {
    // 👇️ take the parameter passed from the Child component
    setprodQuantity(num);

    //console.log('quantity Child: ', num);
  };

//   const modQuantity= () =>{
//     items.map((book,i)=>{
//         if(props.title === book.name){
//             updateItemQuantity(props.title,prodQuantity)
//         }
//     })
//   }

    return (
      <div
        className="card m-2"

        style={{ maxWidth: "350px",color:'black' , backgroundColor:'#e4dccf'}}
      >
        <div className="card-body" style={{ fontSize: "16px" }}>
          <span className="card-text" style={{ fontWeight: "400" }}>
            {props.title}
          </span>{" "}
          <span className="card-text" style={{ fontWeight: "400"}}>
            {/* QTY: {props.quantity} */}
          </span>
          <br />
          Qty: <ProductQuantity bookId={props.title} quantity={props.quantity} quantityHandle={quantityHandle} defQuant={props.quantity}/>


        </div>
      </div>
    );
  }
  
  export default CartDropDown;
  