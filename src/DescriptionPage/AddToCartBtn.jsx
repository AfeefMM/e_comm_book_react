import { useContext, useState } from "react";

import { useCart } from "react-use-cart";


function AddCartBtn(props){

    const { addItem,items,updateItemQuantity } = useCart();

    const addtoC = () =>{
        //check for existing book to update
        let checkerBook=false
        let bookVal = 0;
        let itemExists = items.map((book,i)=>{
            if(book.name === bookItem.name){
                checkerBook=true;
                bookVal=book.quantity;
               // let quant = book.quantity + bookItem.prodQuantity;
               // console.log(quant)
                //updateItemQuantity(bookItem.id,quant)
            }
            
        })
        // addItem(bookItem,props.prodQuantity)
        if(checkerBook){
            let quant =  bookVal+ bookItem.prodQuantity;
            updateItemQuantity(bookItem.id,quant)
        }
        else{
            addItem(bookItem,props.prodQuantity)
        }
       
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