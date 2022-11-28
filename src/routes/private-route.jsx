import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth-provider";
const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const { pathname } = useLocation();
  if (isLoading) return <>Loading</>;
  if (user?.email) return children;
  return <Navigate to={"/login"} state={pathname} replace></Navigate>;
};

export default PrivateRoute;
