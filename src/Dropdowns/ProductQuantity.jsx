import "bootstrap/dist/css/bootstrap.css";
import { React, useState } from "react";
function ProductQuantity(props) {
  const [counter, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    let maxCount = props.quantity;
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