function ProductTypeCard(props) {
  const toggleCard = () => {
    props.isPrice("p");
    props.toggleClass("p");
  };
  return (
    <div
      className="card m-2"
      onClick={() => toggleCard()}
      style={{ maxWidth: "150px", height: "125px", color:props.isSelectedPhy?'#e4dccf':'black' , backgroundColor:props.isSelectedPhy?'#576f72':'#e4dccf'}}
    >
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
