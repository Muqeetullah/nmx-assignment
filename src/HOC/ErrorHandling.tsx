// withErrorHandling.jsx
import React, { useState } from "react";

const withErrorHandling = (WrappedComponent) => {
  return (props) => {
    const [errors, setErrors] = useState({});

    const validateField = (name, value) => {
      let error = "";
      if (!value) {
        error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
      } else if (name === "price" && (value <= 0 || isNaN(value))) {
        error = "Price must be a positive number.";
      }
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      validateField(name, value);
      props.handleInputChange(e, name); // Assuming handleInputChange is a prop function
    };

    const handleAddOrUpdateBook = (e) => {
      e.preventDefault();
      const { newBook, handleAddOrUpdateBook } = props;
      let errors = [];

      // Validation checks
      if (newBook.name.trim() === "") {
        errors.push({ name: "name", error: "Title is required" });
      }
      if (newBook.author.trim() === "") {
        errors.push({ name: "author", error: "Author is required" });
      }
      if (newBook.genre.trim() === "") {
        errors.push({ name: "genre", error: "Genre is required" });
      }
      if (newBook.price <= 0 || isNaN(newBook.price)) {
        errors.push({
          name: "price",
          error: "Price must be a positive number",
        });
      }

      // Update errors state
      setErrors(errors);

      // Proceed with adding or updating the book if no errors
      if (Object.keys(errors).length === 0) {
        handleAddOrUpdateBook(newBook);
      }
    };

    const handleAddOrUpdateUser = (e) => {
      e.preventDefault();
      const { newUser, handleAddOrUpdateUser } = props;
      let errors = [];

      // Validation checks
      if (newUser.name.trim() === "") {
        errors.push({ name: "name", error: "Name is required" });
      }
      if (newUser.email.trim() === "") {
        errors.push({ name: "email", error: "Email is required" });
      }
      if (newUser.role.trim() === "") {
        errors.push({ name: "role", error: "Role is required" });
      }
      if (newUser.education.trim() === "") {
        errors.push({ name: "education", error: "Education is required" });
      }
      if (newUser.age <= 0 || isNaN(newUser.age)) {
        errors.push({ name: "age", error: "Age must be a positive number" });
      }
      if (newUser.gender.trim() === "") {
        errors.push({ name: "gender", error: "Gender is required" });
      }

      // Update errors state
      setErrors(errors);

      // Proceed with adding or updating the book if no errors
      if (Object.keys(errors).length === 0) {
        handleAddOrUpdateUser(newUser);
      }
    };

    return (
      <WrappedComponent
        {...props}
        errors={errors}
        handleChange={handleChange}
        handleAddOrUpdateBook={handleAddOrUpdateBook}
        handleAddOrUpdateUser={handleAddOrUpdateUser}
      />
    );
  };
};

export default withErrorHandling;
