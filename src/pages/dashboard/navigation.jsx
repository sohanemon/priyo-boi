import { NavL, NavLink, NavLinkinkNavLink } from "react-router-dom";
import { useAuth } from "../../context/auth-provider";

const Navigation = () => {
  const { user } = useAuth();
  return (
    <>
      <div className='btm-nav static'>
        {user?.typeOfUser === "buyer" && (
          <NavLink
            to={"my-orders"}
            className={({ isActive }) =>
              isActive ? "[&>button]:btn-primary" : ""
            }
          >
            <button className='btn'>My orders</button>
          </NavLink>
        )}
        {user?.typeOfUser === "seller" && (
          <>
            <NavLink
              to={"/dashboard/add-product"}
              className={({ isActive }) =>
                isActive ? "[&>button]:btn-primary" : ""
              }
            >
              <button className='btn'>Add a product</button>
            </NavLink>
            <NavLink
              to={"my-products"}
              className={({ isActive }) =>
                isActive ? "[&>button]:btn-primary" : ""
              }
            >
              <button className='btn'>My products</button>
            </NavLink>
            <NavLink
              to='my-buyers'
              className={({ isActive }) =>
                isActive ? "[&>button]:btn-primary" : ""
              }
            >
              <button className='btn'>My Buyers</button>
            </NavLink>
          </>
        )}
        {user?.typeOfUser === "admin" && (
          <>
            <NavLink
              to={"all-sellers"}
              className={({ isActive }) =>
                isActive ? "[&>button]:btn-primary" : ""
              }
            >
              <button className='btn'>All Sellers</button>
            </NavLink>
            <NavLink
              to={"all-buyers"}
              className={({ isActive }) =>
                isActive ? "[&>button]:btn-primary" : ""
              }
            >
              <button className='btn'>All Buyers</button>
            </NavLink>
            <NavLink
              to={"reported"}
              className={({ isActive }) =>
                isActive ? "[&>button]:btn-primary" : ""
              }
            >
              <button className='btn'>Reported Items</button>
            </NavLink>
          </>
        )}
      </div>
    </>
  );
};

export default Navigation;
