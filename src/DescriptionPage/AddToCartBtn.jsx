import { useContext, useState } from "react";

import { useCart } from "react-use-cart";


function AddCartBtn(props){



    return(
        <div>
            <button type="button "className="btn addCartBtn">Add to Cart</button>
        </div>
    );
}

export default AddCartBtn;