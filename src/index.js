import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import ExperiencePage from "./pages/ExperiencePage";
import BlogsPage from "./pages/BlogsPage";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/resume",
    element: <ResumePage />,
  },
  {
    path: "/experience",
    element: <ExperiencePage />,
  },
  {
    path: "/blogs",
    element: <BlogsPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
