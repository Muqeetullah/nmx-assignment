import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookListing() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([
    {
      name: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction",
      price: "$10",
    },
    {
      name: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Classics",
      price: "$12",
    },
    {
      name: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      genre: "Fantasy",
      price: "$15",
    },
  ]);

  const addBook = () => {
    // Example of adding a new book
    navigate("/admin/add-book");
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between   pb-10">
        <h1 className="text-xl font-bold text-gray-900 mb-8">Book Listing</h1>
        <div className="mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={addBook}
          >
            Add Book
          </button>
        </div>
      </div>
      <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Book Title
              </th>
              <th scope="col" className="px-6 py-3">
                Author
              </th>
              <th scope="col" className="px-6 py-3">
                Genre
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {book.name}
                </td>
                <td className="px-6 py-4">{book.author}</td>
                <td className="px-6 py-4">{book.genre}</td>
                <td className="px-6 py-4">{book.price}</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BookListing;
