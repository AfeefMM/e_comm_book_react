import React, { useState, useEffect } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ID from "./Id";
import { collection,getDocs } from "firebase/firestore";
import { db } from "./firebase";
import Cart from "./Dropdowns/Cart";
var columnsPerRow = 4;







// const state = {
//     ids: [
//       {
//         id: 1,
//         first_name: "Lana",
//         last_name: "Hadwick",
//         email: "lhadwick0@weibo.com",
//         gender: "Female",
//         photo: "https://picsum.photos/id/15/2500/1667",
//       },
//       {
//         id: 2,
//         first_name: "Allistir",
//         last_name: "McMurdo",
//         email: "amcmurdo1@engadget.com",
//         gender: "Male",
//         photo: "https://picsum.photos/id/16/2500/1667",
//       },
//       {
//         id: 3,
//         first_name: "Marylee",
//         last_name: "Pymer",
//         email: "mpymer2@deliciousdays.com",
//         gender: "Female",
//         photo: "https://picsum.photos/id/14/2500/1667",
//       },
//       {
//         id: 4,
//         first_name: "Elwira",
//         last_name: "Camois",
//         email: "ecamois3@hhs.gov",
//         gender: "Female",
//         photo: "https://picsum.photos/id/13/2500/1667",
//       },
//       {
//         id: 5,
//         first_name: "Zebulen",
//         last_name: "Bockings",
//         email: "zbockings4@mashable.com",
//         gender: "Male",
//         photo: "https://picsum.photos/id/12/2500/1667",
//       },
//       {
//         id: 6,
//         first_name: "Blair",
//         last_name: "Oliver",
//         email: "boliver5@walmart.com",
//         gender: "Female",
//         photo: "https://picsum.photos/id/11/2500/1667",
//       },
//       {
//         id: 7,
//         first_name: "Charmine",
//         last_name: "Nevinson",
//         email: "cnevinson6@vimeo.com",
//         gender: "Female",
//         photo: "https://picsum.photos/id/10/2500/1667",
//       },
//       {
//         id: 8,
//         first_name: "Nariko",
//         last_name: "Losemann",
//         email: "nlosemann7@homestead.com",
//         gender: "Female",
//         photo: "https://picsum.photos/id/9/2500/1667",
//       },
//       {
//         id: 9,
//         first_name: "Farrell",
//         last_name: "Bondley",
//         email: "fbondley8@aboutads.info",
//         gender: "Male",
//         photo: "https://picsum.photos/id/8/2500/1667",
//       },
//     ],
//   };

function IdCards (){
    const [books,setBooks] = useState([]);
const fetchBooks = async () =>{

    await getDocs(collection(db, "books"))
    .then((querySnapshot)=>{               
        const newData = querySnapshot.docs
            .map((doc) => ({...doc.data(), id:doc.id }));
            setBooks(newData);                
        console.log(books, newData);
    })
}

    useEffect(()=>{
        fetchBooks();
    }, [])
    console.log("books");
    return (
      <div>

        <div className="gap-0 row-gap-3">
          <Row xs={1} md={columnsPerRow} className="pt-2">
            {books.map((book,i) => {
            //   console.log("b")
              return (
                <Col>
                  <ID
                    key={i}
                    id={book.book_id}
                    first_name={book.book_author}
                    last_name={book.book_desc}
                    email={book.book_title}
                    photo={book.book_img}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );

 
}




export default IdCards;
