import React, { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import { useLocation, useNavigate } from "react-router-dom";

interface User {
  id?: number; // Ensure id is optional for new user
  name: string;
  email: string;
  role: string;
  education: string;
  age: number;
  gender: string;
}

const AddUser: React.FC = () => {
  const { addUser, updateUser } = useUser(); // Use updateUser from useUser hook
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState<User>({
    name: "",
    email: "",
    role: "User",
    education: "",
    age: 0,
    gender: "",
  });
  const [errors, setErrors] = useState<string[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof User
  ) => {
    let value: string | number | undefined = e.target.value;

    if (fieldName === "age") {
      value = parseInt(value as string, 10);
    } else if (fieldName === "role" && value === "") {
      value = "User"; // Set default value to "User" if role is empty
    }

    setNewUser({ ...newUser, [fieldName]: value });
  };

  const location = useLocation();
  const [status, setStatus] = useState<string>("");

  const AddUser = () => {
    let currentErrors = [];

    if (!newUser.name) {
      currentErrors.push("Name is required.");
    }

    if (!newUser.email) {
      currentErrors.push("Email is required.");
    }

    if (!newUser.role) {
      currentErrors.push("Role is required.");
    }

    if (!newUser.education) {
      currentErrors.push("Education is required.");
    }

    if (newUser.age <= 0 || isNaN(newUser.age)) {
      currentErrors.push("Age must be a positive number.");
    }

    if (!newUser.gender) {
      currentErrors.push("Gender is required.");
    }

    if (currentErrors.length > 0) {
      setErrors(currentErrors);
      return;
    }

    if (status === "Edit") {
      updateUser(newUser); // Call updateUser instead of addNewUser for editing
    } else {
      addUser(newUser);
    }

    setNewUser({
      name: "",
      email: "",
      role: "User",
      education: "",
      age: 0,
      gender: "",
    });

    navigate("/admin/view-user-list");
    setErrors([]);
  };

  useEffect(() => {
    if (location.state) {
      setStatus(location.state.status);
      setNewUser(location.state.user as User);
    }
  }, [location.state]);

  return (
    <div className="flex w-full items-center justify-center mt-10">
      <div className="mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-xl font-bold text-gray-900 mb-6">Add a New User</h1>
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
          onSubmit={(e) => {
            e.preventDefault();
            AddUser();
          }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newUser.name}
              onChange={(e) => handleInputChange(e, "name")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={newUser.email}
              onChange={(e) => handleInputChange(e, "email")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Role
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={newUser.role}
              onChange={(e) => handleInputChange(e, "role")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="education"
              className="block text-sm font-medium text-gray-700"
            >
              Education
            </label>
            <input
              type="text"
              id="education"
              name="education"
              value={newUser.education}
              onChange={(e) => handleInputChange(e, "education")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={newUser.age}
              onChange={(e) => handleInputChange(e, "age")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700"
            >
              Gender
            </label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={newUser.gender}
              onChange={(e) => handleInputChange(e, "gender")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="col-span-2 mt-6 flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              {status === "Edit" ? "Update User" : "Add User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
