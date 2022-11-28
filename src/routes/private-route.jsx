import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/ui/loader";
import { useAuth } from "../context/auth-provider";
const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const { pathname } = useLocation();
  if (isLoading)
    return (
      <>
        <Loader />
      </>
    );
  if (user?.email) return children;
  return <Navigate to={"/login"} state={pathname} replace></Navigate>;
};

export default PrivateRoute;
