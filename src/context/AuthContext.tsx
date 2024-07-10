// AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";

// Define User type
export interface User {
  name: string;
  email: string;
  role: string;
  education: string;
  age: number;
  gender: string;
}

// Define Auth context type
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

// Create context with initial values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

// Custom hook to use Auth context
export const useAuth = (): AuthContextType => useContext(AuthContext);

// Auth provider component
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user; // Check if user exists

  // const history = useHistory();

  // Function to handle login
  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Function to handle logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    window.location.reload();

    // history.push("/"); // Redirect to home page after logout
  };

  useEffect(() => {
    // Check if user exists in localStorage on mount
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
