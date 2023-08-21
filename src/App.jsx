import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import Attorneys from "./pages/Attorneys";
import Login from "./pages/Login";
import { Register } from "./pages/Register";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
