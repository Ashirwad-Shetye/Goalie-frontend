import { Navigate } from "react-router-dom";
import { getItemFromStorage } from "../services/storage";
const Protected = ({ fallBackRoute, isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to={fallBackRoute} replace />;
  }
  return children;
};
export default Protected;
