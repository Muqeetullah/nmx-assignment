import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

function UserListing() {
  const navigate = useNavigate();
  const { users } = useUser();

  const addUser = () => {
    navigate("/admin/add-user");
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mt-10">
      <div className="flex flex-col sm:flex-row items-center justify-between pb-6 sm:pb-10">
        <h1 className="text-xl font-bold text-gray-900 mb-4 sm:mb-0">
          User Listing
        </h1>
        <div>
          <button
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={addUser}
          >
            Add User
          </button>
        </div>
      </div>
      <div className="w-full overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-3 sm:px-6">
                Name
              </th>
              <th scope="col" className="px-4 py-3 sm:px-6">
                Email
              </th>
              <th scope="col" className="px-4 py-3 sm:px-6">
                Education
              </th>
              <th scope="col" className="px-4 py-3 sm:px-6">
                Age
              </th>
              <th scope="col" className="px-4 py-3 sm:px-6">
                Gender
              </th>
              <th scope="col" className="px-4 py-3 sm:px-6">
                Role
              </th>
              <th scope="col" className="px-4 py-3 sm:px-6"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="bg-white border-b hover:bg-gray-50">
                <td className="px-4 py-3 sm:px-6 font-medium text-gray-900">
                  {user.name}
                </td>
                <td className="px-4 py-3 sm:px-6">{user.email}</td>
                <td className="px-4 py-3 sm:px-6">{user.education}</td>
                <td className="px-4 py-3 sm:px-6">{user.age}</td>
                <td className="px-4 py-3 sm:px-6">{user.gender}</td>
                <td className="px-4 py-3 sm:px-6">{user.role}</td>
                <td className="px-4 py-3 sm:px-6 text-right">
                  <button
                    className="font-medium text-blue-600 hover:underline"
                    onClick={() =>
                      navigate(`/admin/add-user`, {
                        state: { user: user, status: "Edit" },
                      })
                    }
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserListing;
