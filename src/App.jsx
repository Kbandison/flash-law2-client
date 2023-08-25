import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import Attorneys from "./pages/Attorneys";
import Login from "./pages/Login";
import { Register } from "./pages/Register";
import Account from "./pages/Account";
import AccountNav from "./components/Account/AccountNav";
import NotFound from "./pages/NotFound";
import ContactUs from "./pages/ContactUs";
import AttorneyPage from "./pages/AttorneyPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/attorneys", element: <Attorneys /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/contact-us", element: <ContactUs /> },
        { path: "/attorney/:id", element: <AttorneyPage /> },
        {
          element: <AccountNav />,
          children: [{ path: "/account", element: <Account /> }],
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
