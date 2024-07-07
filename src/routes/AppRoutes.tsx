import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AdminDashboard from "../containers/Auth/Admin/AdminDashboard";
import SignIn from "../containers/Auth/SignIn";
import UserLisitng from "../containers/Auth/Admin/UserLisitng";
import BookLisitng from "../containers/Auth/Admin/BookLisitng";
import AddUser from "../containers/Auth/Admin/AddUser";
import AddBook from "../containers/Auth/Admin/AddBook";
import PrivateRoute from "./PrivateRoutes";
import ViewProfile from "../containers/Auth/Admin/ViewProfile";
import UsersWithBooksLisitng from "../containers/Shared/UsersWithBooksLisitng";
import Sidebar from "../components/Sidebar";
import Layout from "../containers/Shared/Layout";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <Layout>
              <AdminDashboard />
            </Layout>
          }
        />
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/admin/view-user-list"
          element={
            <Layout>
              <UserLisitng />
            </Layout>
          }
        />
        <Route
          path="/admin/view-book-list"
          element={
            <Layout>
              <BookLisitng />
            </Layout>
          }
        />
        <Route
          path="/admin/add-user"
          element={
            <Layout>
              <AddUser />{" "}
            </Layout>
          }
        />
        <Route
          path="/admin/add-book"
          element={
            <Layout>
              <AddBook />{" "}
            </Layout>
          }
        />
        <Route
          path="/view-issued-book-list"
          element={<UsersWithBooksLisitng />}
        />
        <Route
          path="/admin/profile"
          element={
            <PrivateRoute>
              <ViewProfile />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
