import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Classes from "../pages/Classes/Classes";
import Instructors from "../pages/Instructors/Instructors";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AllClasses from "../pages/AllClasses/AllClasses";
import Feedback from "../pages/Feedback/Feedback";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "myclasses",
        element: <MyClasses />,
      },
      {
        path: "allusers",
        element: <AllUsers />,
      },
      {
        path: "allclasses",
        element: <AllClasses />,
      },
      {
        path: "feedback",
        element: <Feedback />,
      },
    ],
  },
]);
