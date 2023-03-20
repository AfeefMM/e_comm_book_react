import { useCart } from "react-use-cart";


function AddMainCartBtn(props){

    const { addItem } = useCart();

    

    return(
        <div>
            <button type="button "className="btn addCartBtn" onClick={()=>{console.log(props.book)}}>Add to Cart</button>
        </div>
    );
}

export default AddMainCartBtn;