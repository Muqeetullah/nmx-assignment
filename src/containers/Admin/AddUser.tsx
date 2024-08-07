import React, { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import UserFormUI from "../../components/UserFormUI";
import { useUser } from "../../context/UserContext";
import withErrorHandling from "../../HOC/ErrorHandling";

interface User {
  id?: number;
  name: string;
  email: string;
  role: string;
  education: string;
  age: number;
  gender: string;
}

const EnhancedUserFormUI = withErrorHandling(UserFormUI);

const AddUser: React.FC = () => {
  const { addUser, updateUser } = useUser();
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
  const location = useLocation();
  const [status, setStatus] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof User
  ) => {
    let value: string | number | undefined = e.target.value;

    if (fieldName === "age") {
      value = parseInt(value as string, 10);
    } else if (fieldName === "role" && value === "") {
      value = "User";
    }

    setNewUser({ ...newUser, [fieldName]: value });
  };

  const handleAddOrUpdateUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status === "Edit") {
      updateUser(newUser);
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
    <EnhancedUserFormUI
      newUser={newUser}
      handleInputChange={handleInputChange}
      handleAddOrUpdateUser={handleAddOrUpdateUser}
      status={status}
    />
  );
};

export default AddUser;
