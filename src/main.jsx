import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./routes/homepage";
import Book from "./routes/book/[id]";
import Page404 from "./routes/page404";
import Copyright from "./routes/copyright";
import User from "./routes/user";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Page404 />,
  },
  {
    path: "book/:bookId",
    element: <Book />,
  },
  {
    path: "copyright",
    element: <Copyright />,
  },
  {
    path: "user",
    element: <User />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
