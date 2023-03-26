

function CartDropDown(props) {
    const toggleCard = () => {
      props.isPrice("p");
      props.toggleClass("p");
    };
    return (
      <div
        className="card m-2"
        onClick={() => toggleCard()}
        style={{ maxWidth: "150px", height: "10px", color:'black' , backgroundColor:'#e4dccf'}}
      >
        <div className="card-body" style={{ fontSize: "16px" }}>
          <span className="card-text" style={{ fontWeight: "400" }}>
            {props.title}
          </span>{" "}
          <span className="card-text" style={{ fontWeight: "300" }}>
            ${props.quantity}
          </span>{" "}
          <br />
        </div>
      </div>
    );
  }
  
  export default CartDropDown;
  