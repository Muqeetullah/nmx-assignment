const UsersWithBooksListing = () => {
  const users = [
    {
      username: "john",
      email: "john@example.com",
      issuedBooks: [
        {
          title: "Book 1",
          returnDate: "2022-01-01",
        },
        {
          title: "Book 2",
          returnDate: "2022-01-02",
        },
      ],
    },
    {
      username: "jane",
      email: "jane@example.com",
      issuedBooks: [
        {
          title: "Book 3",
          returnDate: "2022-01-03",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-4xl w-full">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 text-left">Username</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Books Issued</th>
              <th className="py-2 px-4 text-left">Return Dates</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                <td className="py-3 px-4">{user.username}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">
                  {user.issuedBooks.map((book, bIndex) => (
                    <div key={bIndex} className="mb-1">
                      {book.title}
                    </div>
                  ))}
                </td>
                <td className="py-3 px-4">
                  {user.issuedBooks.map((book, bIndex) => (
                    <div key={bIndex} className="mb-1">
                      {book.returnDate}
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersWithBooksListing;
