import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

// Define Book interface with id property
export interface Book {
  id: number; // Add id property
  name: string;
  author: string;
  genre: string;
  price: number;
  issued: boolean;
}

interface User {
  name: string;
  email: string;
}

// Define Book context type with addBook and updateBook functions
interface BookContextType {
  books: Book[];
  addBook: (newBook: Book) => void;
  updateBook: (updatedBook: Book) => void;
  issueBook: (bookId: number, user: User) => void;
}

// Initial list of books with ids
const initialBooks: Book[] = [
  {
    id: 1,
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    price: 10,
    issued: false,
  },
  {
    id: 2,
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classics",
    price: 12,
    issued: false,
  },
  {
    id: 3,
    name: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    price: 15,
    issued: false,
  },
];

// Create context with initial values
const BookContext = createContext<BookContextType>({
  books: initialBooks,
  addBook: () => {},
  updateBook: () => {},
  issueBook: () => {},
});

// Custom hook to use Book context
export const useBook = (): BookContextType => useContext(BookContext);

// Book provider component
export const BookProvider: React.FC = ({ children }) => {
  const [books, setBooks] = useState<Book[]>(initialBooks);

  // Function to generate a unique id
  const generateId = () => {
    return books.length > 0 ? Math.max(...books.map((book) => book.id)) + 1 : 1;
  };

  // Function to add a new book
  const addNewBook = (newBook: Book) => {
    const id = generateId(); // Generate a new id
    const bookWithId = { ...newBook, id };
    setBooks([...books, bookWithId]);
  };

  // Function to update an existing book based on id
  const updateBook = (updatedBook: Book) => {
    const updatedBooks = books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setBooks(updatedBooks);
  };
  const issueBook = (bookId: number, user: User) => {
    setBooks((prevBooks) => {
      const book = prevBooks.find((book) => book.id === bookId);
      if (book) {
        toast.success(`Book titled "${book.name}" issued to ${user.name}`);
        return prevBooks.map((book) =>
          book.id === bookId ? { ...book, issued: true } : book
        );
      }
      return prevBooks;
    });
  };

  return (
    <BookContext.Provider
      value={{ books, addBook: addNewBook, updateBook, issueBook }}
    >
      {children}
    </BookContext.Provider>
  );
};
