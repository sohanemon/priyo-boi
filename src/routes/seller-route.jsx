import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import Loader from "../components/ui/loader";
import { useAuth } from "../context/auth-provider";
const SellerRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  if (isLoading)
    return (
      <>
        <Loader />
      </>
    );
  if (user?.typeOfUser === "seller") return children;
  toast.error("Its a seller only route");
  return <Navigate to={"/"} replace></Navigate>;
};

export default SellerRoute;
