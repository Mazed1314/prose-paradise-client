import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./Pages/ErrorPage";
import Root from "./Layout/Root";
import Home from "./Pages/Home";
import AuthProvider from "./Providers/AuthProvider";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import EditProfile from "./Pages/EditProfile";
import { HelmetProvider } from "react-helmet-async";
import PrivateRoute from "./Components/PrivateRoute";
import AddBlog from "./Components/AddBlog";
import WishList from "./Pages/WishList";
import FeaturedBlog from "./Pages/FeaturedBlog";
import AllBlog from "./Pages/AllBlog";
import ViewDetails from "./Pages/ViewDetails";
import MyBlog from "./Pages/MyBlog";
import EditBlog from "./Pages/EditBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://prose-paradise-server.vercel.app/blog"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-user",
        element: (
          <PrivateRoute>
            <EditProfile></EditProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-blog",
        element: (
          <PrivateRoute>
            <AddBlog></AddBlog>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-blogs",
        element: <AllBlog></AllBlog>,
      },
      {
        path: "/featured-blogs",
        element: (
          <PrivateRoute>
            <FeaturedBlog></FeaturedBlog>
          </PrivateRoute>
        ),
      },
      {
        path: "/wish-list",
        element: (
          <PrivateRoute>
            <WishList></WishList>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-blogs",
        element: (
          <PrivateRoute>
            <MyBlog></MyBlog>
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-blog/:id",
        element: (
          <PrivateRoute>
            <EditBlog></EditBlog>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://prose-paradise-server.vercel.app/blog/${params.id}`),
      },
      {
        path: "/view-details/:_id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("https://prose-paradise-server.vercel.app/blog"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
