import ProductTypeCard from "./ProductTypeCard";
import ProductTypeECard from "./ProductTypeECard";

function ProdTypeGroup(props) {
  return (
    <div className="container" style={{maxWidth:"300px",alignContent:"start"}}>
        <div className="row" xs={1} md={2}>
            <div className="col">
            <ProductTypeCard physical_price={props.physical_price}/>
            </div>
            <div className="col">
            <ProductTypeECard e_book_price={props.e_book_price}/>
            </div>
        

        </div>
      
    </div>
  );
}

export default ProdTypeGroup;
