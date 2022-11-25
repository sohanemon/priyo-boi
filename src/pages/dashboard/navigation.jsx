import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-provider";

const Navigation = () => {
  const { user } = useAuth();
  return (
    <>
      <div className='btm-nav static'>
        {user?.typeOfUser === "buyer" && (
          <Link className='border-red-300 m-3'>My orders</Link>
        )}
        {user?.typeOfUser === "seller" && (
          <>
            <Link to={"/dashboard/add-product"} className='border-red-300 m-3'>
              Add a product
            </Link>
            <Link className='border-red-300 m-3'>My products</Link>
            <Link className='border-red-300 m-3'>My Buyers</Link>
          </>
        )}
        {user?.typeOfUser === "admin" && (
          <>
            <Link className='border-red-300 m-3'>All Sellers</Link>
            <Link className='border-red-300 m-3'>All Buyers</Link>
            <Link className='border-red-300 m-3'>Reported Items</Link>
          </>
        )}
      </div>
    </>
  );
};

export default Navigation;
