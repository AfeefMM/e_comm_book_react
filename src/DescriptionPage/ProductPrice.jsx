
function ProductPrice(props){

    return(
        <p className="lead landingPgsubTitle" style={{fontWeight:'400', lineHeight:'150%'}}>
            {props.physical_price}
          </p>
    );
}

export default ProductPrice;