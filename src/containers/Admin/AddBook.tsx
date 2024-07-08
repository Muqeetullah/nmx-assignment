import React, { useEffect, useState } from "react";
import { useBook } from "../../context/BookContext";
import { useLocation, useNavigate } from "react-router-dom";

interface Book {
  id?: number;
  name: string;
  author: string;
  genre: string;
  price: number;
}

const AddBook: React.FC = () => {
  const [newBook, setNewBook] = useState<Book>({
    id: undefined,
    name: "",
    author: "",
    genre: "",
    price: 0,
  });
  const [status, setStatus] = useState<string>("");
  const { addBook, updateBook } = useBook();
  const navigate = useNavigate();
  const location = useLocation();
  const [errors, setErrors] = useState<string[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof Book
  ) => {
    const value =
      fieldName === "price" ? parseFloat(e.target.value) : e.target.value;
    setNewBook({ ...newBook, [fieldName]: value });
  };

  const handleAddOrUpdateBook = () => {
    let currentErrors = [];

    if (!newBook.name) {
      currentErrors.push("Book title is required.");
    }

    if (!newBook.author) {
      currentErrors.push("Author is required.");
    }

    if (!newBook.genre) {
      currentErrors.push("Genre is required.");
    }

    if (newBook.price <= 0 || isNaN(newBook.price)) {
      currentErrors.push("Price must be a positive number.");
    }

    if (currentErrors.length > 0) {
      setErrors(currentErrors);
      return;
    }

    if (status === "Edit") {
      updateBook(newBook);
    } else {
      addBook(newBook);
    }

    navigate("/admin/view-book-list");
    setNewBook({
      name: "",
      author: "",
      genre: "",
      price: 0,
    });
    setErrors([]);
  };

  useEffect(() => {
    if (location.state) {
      setStatus(location.state.status);
      setNewBook(location.state.book as Book);
    }
  }, [location.state]);

  return (
    <div className="flex w-full items-center justify-center mt-10">
      <div className="mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-xl font-bold text-gray-900 mb-6">Add a New Book</h1>
        {errors.length > 0 && (
          <div className="mb-4">
            {errors.map((error, index) => (
              <div key={index} className="text-red-600">
                {error}
              </div>
            ))}
          </div>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddOrUpdateBook();
          }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Book Title
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newBook.name}
              onChange={(e) => handleInputChange(e, "name")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="author"
              className="block text-sm font-medium text-gray-700"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={newBook.author}
              onChange={(e) => handleInputChange(e, "author")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="genre"
              className="block text-sm font-medium text-gray-700"
            >
              Genre
            </label>
            <input
              type="text"
              id="genre"
              name="genre"
              value={newBook.genre}
              onChange={(e) => handleInputChange(e, "genre")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={newBook.price}
              onChange={(e) => handleInputChange(e, "price")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="col-span-2 mt-6 flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              {status === "Edit" ? "Update Book" : "Add Book"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
