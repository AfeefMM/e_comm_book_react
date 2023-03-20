function ProductTypeECard(props) {
  return (
    <div className="card m-2" onClick={()=>props.isPrice("e")} style={{ maxWidth: "150px",height:"125px" }}>
      <div className="card-body" style={{ fontSize: "16px" }}>
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
