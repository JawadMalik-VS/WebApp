import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();
  return auth ? <Navigate to="/home" /> : children;
};

export default ProtectedRoute;
