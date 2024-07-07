import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  pb-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-2 text-sm text-gray-500">
            Welcome to the Admin Dashboard. Here you can manage the application.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Manage Users</h2>
            <div className="flex flex-col space-y-2">
              <Link to="/admin/add-user" className="btn-blue">
                Add User
              </Link>
              <Link to="/admin/view-user-list" className="btn-blue">
                View User List
              </Link>
              <Link to="/view-user-profile" className="btn-blue">
                View User Profile With Issued Books
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Manage Books</h2>
            <div className="flex flex-col space-y-2">
              <Link to="/admin/add-book" className="btn-blue">
                Add Book
              </Link>
              <Link to="/admin/view-book-list" className="btn-blue">
                View Book List
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">View Profile</h2>
            <div className="flex flex-col space-y-2">
              <Link to="/admin/view-profile" className="btn-blue">
                View Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
