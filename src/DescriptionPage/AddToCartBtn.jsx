import { useContext, useState } from "react";

import { useCart } from "react-use-cart";


function AddCartBtn(props){

    const { addItem } = useCart();

    const addtoC = () =>{
        addItem(bookItem,props.prodQuantity)
        console.log(bookItem)
    }
    const bookItem = {
        id:props.book_title,
        name: props.book_title,
        price: props.selectedPrice,
        prodQuantity: props.prodQuantity
      };
    return(
        <div>
            <button type="button "className="btn addCartBtn" onClick={addtoC}>Add to Cart</button>
        </div>
    );
}

export default AddCartBtn;