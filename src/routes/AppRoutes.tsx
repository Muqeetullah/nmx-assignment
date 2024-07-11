import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
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

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PrivateRoute>
          <Layout>
            <Outlet />
          </Layout>
        </PrivateRoute>
      ),
      children: [
        {
          index: true,
          element: role === "admin" ? <AdminDashboard /> : <UserDashboard />,
        },
        {
          path: "admin",
          children: [
            { path: "view-user-list", element: <UserLisitng /> },
            { path: "view-book-list", element: <BookLisitng /> },
            { path: "add-user", element: <AddUser /> },
            { path: "add-book", element: <AddBook /> },
            {
              path: "profile",
              element: (
                <ViewProfile
                  fullName={jsonObject.name}
                  email={jsonObject.email}
                  phoneNumber="1234567890"
                  address="123 Main St, Anytown USA"
                />
              ),
            },
          ],
        },

        {
          path: "view-issued-book-list",
          children: [
            { index: true, element: <UsersWithBooksLisitng /> },
            { path: "issue-book", element: <IssueBook /> },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: (
        <PublicRoutes>
          <SignIn />
        </PublicRoutes>
      ),
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
