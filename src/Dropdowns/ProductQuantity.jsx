import "bootstrap/dist/css/bootstrap.css";
import { React, useState,useEffect } from "react";
import { useCart } from "react-use-cart";

function ProductQuantity(props) {
  const [counter, setCounter] = useState(0);
  const {items,updateItemQuantity } = useCart();

  //increase counter
  const increase = () => {
    let maxCount = props.quantity;
    if (counter < maxCount) {
      setCounter((count) => count + 1);
      props.quantityHandle(counter+1)
    }
    if(props.bookId !== ""){
      items.map((book,i)=>{
        updateItemQuantity(props.bookId,counter+1)
      })
    }
  };

  //decrease counter
  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
      props.quantityHandle(counter-1)
      if(props.bookId !== ""){
        items.map((book,i)=>{
          updateItemQuantity(props.bookId,counter-1)
        })
      }
    }
  };

  useEffect(() => {
    setCounter(props.defQuant)
  }, [])

  return (
    <div>
      <div className="counter">
        <div className="btn__container">
          <span className="counter__output" style={{ padding: "10px" }}>
            {" "}
            {counter}
          </span>
          <button className="btn">
            {" "}
            <i class="bi bi-plus" onClick={increase}></i>
          </button>
          <button className="btn">
            {" "}
            <i class="bi bi-dash" onClick={decrease}></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductQuantity;