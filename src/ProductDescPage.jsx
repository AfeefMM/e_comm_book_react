import ProductTitle from "./DescriptionPage/ProductTitle";
import ProductDesc from "./DescriptionPage/ProductDesc";
import ProductPrice from "./DescriptionPage/ProductPrice";
import StarRating from "./DescriptionPage/StarRating";
import ProductQuantity from "./Dropdowns/ProductQuantity";
import AddCartBtn from "./DescriptionPage/AddToCartBtn";
import ProductTypeCard from "./DescriptionPage/ProductTypeCard";
import ProdTypeGroup from "./DescriptionPage/ProdTypeGroup";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { useState,useEffect } from "react";
import { useSearchParams,useParams } from "react-router-dom";

function ProductDescPage(props) {

   //const [id]  = useSearchParams();
    const {bookId}  = useParams();

    //to retrieve books from firestore
 const [books, setBooks] = useState([]);
 const fetchBooks = async () => {
   await getDocs(collection(db, "books")).then((querySnapshot) => {
     const newData = querySnapshot.docs.map((doc) => ({
       ...doc.data(),
       id: doc.id,
     }));
     setBooks(newData);
     //console.log(books, newData);
   });
 };

 useEffect(() => {
   fetchBooks();
   filterBySearch();
 }, []);

//implementation of searchbar
const [filteredList, setFilteredList] = useState(books);
const [bookTitle,setbookTitle] = useState('')
const [book_desc,setbook_desc] = useState('')
const [physical_price,setphysical_price] = useState('')
const [quantity,setquantity] = useState('')

const filterBySearch = () => {
  // Access input value
  
//   const query = id.get("bookId");
//   console.log("id: "+query)
  const query = bookId;

      const results = books.filter((book)=>{
        if(book.book_id.toString() === query.toString()){
            setbookTitle(book.book_title)
            console.log("book title: " + book.book_title)
            setbook_desc(book.book_desc)
            setphysical_price(book.physical_price)
            setquantity(book.quantity)
            console.log("true")
        }

          return (book.book_id.toString() === query.toString())
      });

        // console.log("book id: " + bookTitle)

      setFilteredList(results);
  

  // Trigger render with updated values
  //setFilteredList(updatedList);
};

  return (
    <div>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-lg-6 ">
          <ProductTitle 
          book_title={bookTitle}
          />
          <ProductPrice 
          physical_price = {physical_price}
          />
          <StarRating />
          <ProductDesc 
          book_desc = {book_desc}
          />
          <ProductQuantity 
          quantity = {quantity}
          />
            <ProdTypeGroup/>
          {/* <div class="float-container">
            <div class="float-child">
            <ProductTypeCard />
            </div>

            <div class="float-child">
            <ProductTypeCard />
            </div>
          </div> */}


          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <AddCartBtn />
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
