import ProductTypeCard from "./ProductTypeCard";

function ProdTypeGroup() {
  return (
    <div className="container" style={{maxWidth:"300px",alignContent:"start"}}>
        <div className="row" xs={1} md={2}>
            <div className="col">
            <ProductTypeCard />
            </div>
            <div className="col">
            <ProductTypeCard />
            </div>
        

        </div>
      
    </div>
  );
}

export default ProdTypeGroup;
