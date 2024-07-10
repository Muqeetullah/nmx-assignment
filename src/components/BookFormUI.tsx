import React from "react";

interface Book {
  id?: number;
  name: string;
  author: string;
  genre: string;
  price: number;
}

interface BookFormUIProps {
  newBook: Book;
  status: string;
  errors: string[];
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof Book
  ) => void;
  handleAddOrUpdateBook: (e: React.FormEvent<HTMLFormElement>) => void;
}

const BookFormUI: React.FC<BookFormUIProps> = ({
  newBook,
  status,
  errors,
  handleInputChange,
  handleAddOrUpdateBook,
}) => {
  return (
    <div className="flex w-full items-center justify-center mt-10">
      <div className="mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-xl font-bold text-gray-900 mb-6">
          {status === "Edit" ? "Edit Book" : "Add a New Book"}
        </h1>
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
          onSubmit={handleAddOrUpdateBook}
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

export default BookFormUI;
