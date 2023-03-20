

function ProductDesc(props){

    return(
        <p className="lead landingPgsubTitle" style={{fontWeight:'300', lineHeight:'150%'}}>
            {props.book_desc}
          </p>
    );
}

export default ProductDesc;