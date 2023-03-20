function ProductTypeCard(props) {


  return (
    <div className="card m-2" onClick={()=>props.isPrice("p")} style={{ maxWidth: "150px" ,height:"125px" }}>
      <div className="card-body" style={{ fontSize: "16px" }}>
        <span className="card-text" style={{ fontWeight: "400" }}>
          Physical book price
        </span>{" "}
        <br />
        <span className="card-text" style={{ fontWeight: "300" }}>
          ${props.physical_price}
        </span>{" "}
        <br />
      </div>
    </div>
  );
}

export default ProductTypeCard;
