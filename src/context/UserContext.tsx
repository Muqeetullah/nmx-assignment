import React, { createContext, useContext, useRef, useState } from "react";

// Import User interface with id
import { User } from "./User";

// Define User context type with users, addUser, updateUser functions
interface UserContextType {
  users: User[];
  addUser: (newUser: User) => void;
  updateUser: (updatedUser: User) => void;
}

// Initial list of users with id
const initialUsers: User[] = [
  {
    id: 1,
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    role: "User",
    education: "Ph.D. in Economics",
    age: 40,
    gender: "Male",
  },
  {
    id: 2,
    name: "Emily Smith",
    email: "emily.smith@example.com",
    role: "User",
    education: "M.Sc. in Computer Science",
    age: 35,
    gender: "Female",
  },
];

// Create context with initial values
const UserContext = createContext<UserContextType>({
  users: initialUsers,
  addUser: () => {},
  updateUser: () => {},
});

// Custom hook to use User context
export const useUser = (): UserContextType => useContext(UserContext);

// User provider component
export const UserProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const nextId = useRef<number>(3); // Start with the next available id

  // Function to add a new user
  const addUser = (newUser: User) => {
    const userWithId = { ...newUser, id: nextId.current };
    setUsers([...users, userWithId]);
    nextId.current++;
  };

  // Function to update an existing user based on id
  const updateUser = (updatedUser: User) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
  };

  return (
    <UserContext.Provider value={{ users, addUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
