import { Navigate } from "react-router";
import secureLocalStorage from "react-secure-storage";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = secureLocalStorage.getItem("user");
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
