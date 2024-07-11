// AddBook.tsx
import React, { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import BookFormUI from "../../components/BookFormUI";
import { useBook } from "../../context/BookContext";
import withErrorHandling from "../../HOC/ErrorHandling";

interface Book {
  id?: number;
  name: string;
  author: string;
  genre: string;
  price: number;
}
const EnhancedBookFormUI = withErrorHandling(BookFormUI);
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
    <EnhancedBookFormUI
      newBook={newBook}
      handleInputChange={handleInputChange}
      handleAddOrUpdateBook={handleAddOrUpdateBook}
      status={status}
    />
  );
};

export default AddBook;
