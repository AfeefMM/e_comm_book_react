import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ID from "./Id";
import { collection, getDocs } from "firebase/firestore";
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

function IdCards() {
  //implementation of searchbar
  const [query, setQuery] = useState('');
  const [searchParam] = useState(["book_title"]);
//   const handleChange = (e) => {
//     const results = books.filter((book) => {
//       if (e.target.value === "" ) return books;
//       return book.book_title
//         .toLowerCase()
//         .includes(e.target.value.toLowerCase());
//     });
//     setQuery({
//       query: e.target.value,
//       list: results,
//     });
//     //setQuery(e.target.value);
//   };

  //to retrieve books from firestore
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    await getDocs(collection(db, "books")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBooks(newData);
      console.log(books, newData);
    });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <form className="d-flex justify-content-center my-5">
        <div class="input-group searchBar">
          <input
            class="form-control border-end-0 border rounded-pill"
            type="search"
            defaultValue="Search"
            value={query}
            onChange={e => {setQuery(e.target.value)}}
          />
          <span class="input-group-append">
            <button
              class="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill"
              type="button"

            >
              <i class="bi bi-search"></i>
            </button>
          </span>
        </div>
      </form>
      <div className="gap-0 row-gap-3">
        <Row xs={1} md={columnsPerRow} className="pt-2">
          {
          query.query === '' ? books.map((book, i) => {

            return (
              <Col>
                <ID
                  key={i}
                  physical_price={book.physical_price}
                  book_title={book.book_title}
                  book_author={book.book_author}
                  photo={book.book_img}
                />
              </Col>
            );
          })
          : 
          books.filter((item)=>{
            return searchParam.some((book,i)=>{
                return (
                          <Col>
                            <ID
                              key={i}
                              physical_price={item[book].physical_price}
                              book_title={item[book].book_title}
                              book_author={item[book].book_author}
                              photo={item[book].book_img}
                            />
                          </Col>
                        );
            })
          })
        //   books.some
        //   ((book, i) => {

        //     return (
        //       <Col>
        //         <ID
        //           key={i}
        //           physical_price={book.physical_price}
        //           book_title={book.book_title}
        //           book_author={book.book_author}
        //           photo={book.book_img}
        //         />
        //       </Col>
        //     );
        //   })
          }
        </Row>
      </div>
    </div>
  );
}

export default IdCards;
