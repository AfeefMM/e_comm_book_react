import ProductTitle from "./DescriptionPage/ProductTitle";
import ProductDesc from "./DescriptionPage/ProductDesc";
import ProductPrice from "./DescriptionPage/ProductPrice";
import StarRating from "./DescriptionPage/StarRating";
import ProductQuantity from "./Dropdowns/ProductQuantity";
import AddCartBtn from "./DescriptionPage/AddToCartBtn";

function ProductDescPage(){

    return(
        <div>
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-lg-6 ">
          <ProductTitle/>
          <ProductPrice/>
          <StarRating/>
          <ProductDesc/>
          <ProductQuantity/>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">

            
            <AddCartBtn/>
            
          </div>
        </div>
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=990&q=80"
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            loading="lazy"
            width="400"
            height="300"
          />
        </div>
      </div>
        </div>
    );
}

export default ProductDescPage;