import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useStudent from "../hooks/useStudent";

const StudentRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isStudent, isStudentLoading] = useStudent();
  const location = useLocation();

  if (loading || isStudentLoading) {
    return <div>Loading....</div>;
  }
  if (user && isStudent) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }}></Navigate>;
};

export default StudentRoute;
