import React, { useEffect, useState } from "react";
import { Contests, Home, ProblemSet, Signin, Signup, Workspace } from "./pages";

import Layout from "./Layouts/layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/problems",
          element: <ProblemSet />,
        },
        {
          path: "/contests",
          element: <Contests />,
        },
      ],
    },
    {
      path: "/problems/:problemId",
      element: <Workspace />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
