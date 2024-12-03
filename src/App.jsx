import React, { useEffect, useState } from "react";
import {
  Contests,
  CreateNewContexts,
  CreateNewProblem,
  Dashboard,
  Home,
  LeaderBoard,
  ProblemSet,
  Signin,
  Signup,
  Workspace,
} from "./pages";

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
        {
          path: "/create-contest",
          element: <CreateNewContexts />,
        },
        {
          path: "/create-problem",
          element: <CreateNewProblem />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/leaderboard",
          element: <LeaderBoard />,
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
