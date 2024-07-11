// withErrorHandling.tsx
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
      props.handleInputChange(e, name);
    };

    const handleAddOrUpdateBook = (e) => {
      e.preventDefault();
      let currentErrors = {};

      Object.keys(props.newBook).forEach((key) => {
        const value = props.newBook[key];
        validateField(key, value);
        if (!value || (key === "price" && (value <= 0 || isNaN(value)))) {
          currentErrors[key] = errors[key];
        }
      });

      if (Object.keys(currentErrors).length > 0) {
        setErrors(currentErrors);
        return;
      }

      props.handleAddOrUpdateBook(e);
    };

    return (
      <WrappedComponent
        {...props}
        errors={errors}
        handleChange={handleChange}
        handleAddOrUpdateBook={handleAddOrUpdateBook}
      />
    );
  };
};

export default withErrorHandling;
