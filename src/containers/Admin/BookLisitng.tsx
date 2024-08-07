import React from "react";
import { useNavigate } from "react-router-dom";

import ListingTable from "../../components/Listings";
import { useBook } from "../../context/BookContext";

const BookLisitng = () => {
  const navigate = useNavigate();
  const { books } = useBook();

  const columns = [
    { header: "Book Title", accessor: "name" },
    { header: "Author", accessor: "author" },
    { header: "Genre", accessor: "genre" },
    { header: "Price", accessor: "price" },
  ];

  const handleAddUser = () => {
    navigate("/admin/add-book");
  };

  const handleEditUser = (book: any) => {
    navigate(`/admin/add-book`, {
      state: { book: book, status: "Edit" },
    });
  };

  return (
    <ListingTable
      title="Book Listing"
      data={books}
      columns={columns}
      onAdd={handleAddUser}
      onEdit={handleEditUser}
    />
  );
};

export default BookLisitng;
