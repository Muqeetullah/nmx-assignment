import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import SignIn from "../containers/Auth/SignIn";
import UserLisitng from "../containers/Admin/UserLisitng";
import BookLisitng from "../containers/Admin/BookLisitng";
import AddUser from "../containers/Admin/AddUser";
import AddBook from "../containers/Admin/AddBook";

import UsersWithBooksLisitng from "../containers/Shared/UsersWithBooksLisitng";

import Layout from "../containers/Shared/Layout";
import IssueBook from "../containers/User/IssueBook";
import PrivateRoute from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import UserDashboard from "../containers/User/UserDashboard";
import AdminDashboard from "../components/AdminDashboard";
import ViewProfile from "../components/ViewProfile";

const AppRoutes: React.FC = () => {
  const jsonString = localStorage.getItem("user");
  const jsonObject = JSON.parse(jsonString || "{}");
  const role = jsonObject.role;

  console.log(role); // Output: user

  return (
    <Router>
      <Routes>
        {/* Public Routes */}

        <Route
          path="/login"
          element={
            <PublicRoutes>
              <SignIn />
            </PublicRoutes>
          }
        />

        {/* Private Routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout>
                {role === "admin" ? <AdminDashboard /> : <UserDashboard />}
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/view-user-list"
          element={
            <PrivateRoute>
              <Layout>
                <UserLisitng />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/view-book-list"
          element={
            <PrivateRoute>
              <Layout>
                <BookLisitng />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/add-user"
          element={
            <PrivateRoute>
              <Layout>
                <AddUser />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/add-book"
          element={
            <PrivateRoute>
              <Layout>
                <AddBook />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/view-issued-book-list"
          element={
            <PrivateRoute>
              <Layout>
                <UsersWithBooksLisitng />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/view-issued-book-list/issue-book"
          element={
            <PrivateRoute>
              <Layout>
                <IssueBook />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/profile"
          element={
            <PrivateRoute>
              <Layout>
                <ViewProfile
                  fullName="Muqeet Ullah"
                  email="H5t2h@example.com"
                  phoneNumber="1234567890"
                  address="123 Main St, Anytown USA"
                />
              </Layout>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
