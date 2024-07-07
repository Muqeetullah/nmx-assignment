import React, { useState } from "react";

interface Book {
  name: string;
  author: string;
  genre: string;
  price: string;
}

const initialBooks: Book[] = [
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
];

const AddBook: React.FC = () => {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [newBook, setNewBook] = useState<Book>({
    name: "",
    author: "",
    genre: "",
    price: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof Book
  ) => {
    setNewBook({ ...newBook, [fieldName]: e.target.value });
  };

  const addBook = () => {
    if (!newBook.name || !newBook.author || !newBook.genre || !newBook.price) {
      alert("Please fill in all fields.");
      return;
    }

    const bookToAdd: Book = {
      name: newBook.name,
      author: newBook.author,
      genre: newBook.genre,
      price: `$${newBook.price}`,
    };

    setBooks([...books, bookToAdd]);
    setNewBook({
      name: "",
      author: "",
      genre: "",
      price: "",
    });
  };

  return (
    <div className="w-full  lg:max-w-xl  mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold text-gray-900 mb-6">Add a New Book</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addBook();
        }}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
              type="text"
              id="price"
              name="price"
              value={newBook.price}
              onChange={(e) => handleInputChange(e, "price")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
