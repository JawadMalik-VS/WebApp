import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  console.log("auth", auth);
  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
