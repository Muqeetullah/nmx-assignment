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
  const issueBook = () => {
    console.log("Issue book");
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mt-10">
      <div className="flex flex-col sm:flex-row items-center justify-between pb-6 sm:pb-10">
        <h1 className="text-xl font-bold text-gray-900 mb-4 sm:mb-0">
          Users with Books
        </h1>
        {/* <div>
          <button
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={issueBook}
          >
            Issue Book
          </button>
        </div> */}
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
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
