import React from "react";

interface Book {
  id: number;
  title: string;
  issued: boolean;
}

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  const handleIssueBook = (bookId: number) => {
    // Handle book issuing logic here
    console.log(`Issuing book with ID: ${bookId}`);
  };

  return (
    <ul className="space-y-4">
      {books.map((book) => (
        <li
          key={book.id}
          className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow"
        >
          <span>
            {book.title} - {book.issued ? "Issued" : "Available"}
          </span>
          {!book.issued && (
            <button
              onClick={() => handleIssueBook(book.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Issue Book
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default BookList;
