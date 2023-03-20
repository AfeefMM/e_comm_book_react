import "bootstrap/dist/css/bootstrap.css";
import { React, useContext, useState } from "react";
import CartContext from "../Context/Cart/CartContext";
function ProductQuantity(props) {
  const [counter, setCounter] = useState(0);

  const {increase} = useContext(CartContext);

  //increase counter
  const increaseC = () => {
    let maxCount = props.quantity;
    //cartContext increase
    increase(props.book)

    if (counter < maxCount) {
      setCounter((count) => count + 1);
    }
  };

  //decrease counter
  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };

  return (
    <div>
      <div className="counter">
        <div className="btn__container">
          <span className="counter__output" style={{ padding: "10px" }}>
            {" "}
            Quantity: {counter}
          </span>
          <button className="btn">
            {" "}
            <i class="bi bi-plus" onClick={increaseC}></i>
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
