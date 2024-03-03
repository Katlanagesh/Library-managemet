import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  let loadData = async () => {
    setLoading(true);
    let books = await axios.get(
      "https://64118e936a69ae754520bddf.mockapi.io/books"
    );
    setBooks(books.data);
    setLoading(false);
  };

  let bookDelete = async (id) => {
    try {
      let ask = window.confirm(
        "Are You Sure! Do You Want To Delete This Data?"
      );
      if (ask) {
        await axios.delete(
          `https://64118e936a69ae754520bddf.mockapi.io/books/${id}`
        );
      }
      loadData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className="container books-details p-0">
        <div className="section-title">
          <h1>BOOKS DETAILS</h1>
        </div>
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            {books.map((book, index) => {
              return (
                <div>
                  <div className="card mb-3">
                    <div className="card-body p-4">
                      <img
                        src={book.img}
                        className="card-img-top mx-auto"
                        alt="Img"
                      />
                      <h5 className="card-title text-center">{book.name}</h5>
                      <hr />
                    </div>
                    <ul>
                      <li>Book ID : {book.id}</li>
                      <li>Price : ₹{book.Price}</li>
                      <li>Quantity : {book.quantity}</li>
                      <li>Available : {book.available}</li>
                    </ul>
                    <div className="d-flex justify-content-center mb-3">
                      <button className="sf-button mx-3">
                        <Link
                          className="edit-button"
                          to={`/library/edit/${book.id}`}
                        >
                          Edit
                        </Link>
                      </button>

                      <button
                        onClick={() => {
                          bookDelete(book.id);
                        }}
                        className="sf-button"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default Books;
