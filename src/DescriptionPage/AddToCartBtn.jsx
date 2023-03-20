import { useContext, useState } from "react";
import CartContext from "../Context/Cart/CartContext";


function AddCartBtn(props){

    const {addToCart} = useContext(CartContext);
    const addItem  = ()=>{
        localStorage.setItem('books',props.book);
        console.log(localStorage.getItem('books'))
    }
    return(
        <div>
            <button type="button "className="btn addCartBtn" onClick={()=>addToCart(props.book)}>Add to Cart</button>
        </div>
    );
}

export default AddCartBtn;