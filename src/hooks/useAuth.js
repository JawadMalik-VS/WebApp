// import { useContext } from "react";
// import AuthContext from "../context/AuthProvider";

const useAuth = () => {
  const user = localStorage.getItem("token");
  if (user) {
    return true;
  } else {
    return false;
  }
};
export default useAuth;
