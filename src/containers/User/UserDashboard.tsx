import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBook } from "../../context/BookContext";

function UserDashboard() {
  const navigate = useNavigate();
  const { books } = useBook();

  const addBook = () => {
    navigate("/admin/add-book");
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mt-10">
      <div className="flex flex-col sm:flex-row items-center justify-between pb-6 sm:pb-10">
        <h1 className="text-xl font-bold text-gray-900 mb-4 sm:mb-0">
          Books List
        </h1>
        {/* <div>
          <button
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={addBook}
          >
            Add Book
          </button>
        </div> */}
      </div>
      <div className="w-full overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-3 sm:px-6">
                Book Title
              </th>
              <th scope="col" className="px-4 py-3 sm:px-6">
                Author
              </th>
              {/* <th
                scope="col"
                className="px-4 py-3 sm:px-6 hidden sm:table-cell"
              >
                Genre
              </th>
              <th scope="col" className="px-4 py-3 sm:px-6">
                Price
              </th> */}
              <th scope="col" className="px-4 py-3 sm:px-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index} className="bg-white border-b hover:bg-gray-50">
                <td className="px-4 py-3 sm:px-6 font-medium text-gray-900">
                  {book.name}
                </td>
                <td className="px-4 py-3 sm:px-6">{book.author}</td>
                {/* <td className="px-4 py-3 sm:px-6 hidden sm:table-cell">
                  {book.genre}
                </td>
                <td className="px-4 py-3 sm:px-6">{book.price}</td> */}
                <td className="px-4 py-3 sm:px-6 text-right">
                  <button
                    className="font-medium text-blue-600 hover:underline"
                    onClick={() =>
                      navigate(`/admin/add-book`, {
                        state: { book: book, status: "Edit" },
                      })
                    }
                  >
                    Issue Book
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserDashboard;
