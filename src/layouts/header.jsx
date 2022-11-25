import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-provider";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <div className='navbar bg-base-100 '>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              {navItem}
            </ul>
          </div>
          <Link to={"/"} className=' normal-case text-xl'>
            Priyo Boi
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal p-0'>{navItem}</ul>
        </div>
        <div className='navbar-end'>
          {user?.uid ? (
            <button className='btn btn-error btn-sm' onClick={logOut}>
              Logout
            </button>
          ) : (
            <Link to={"/login"} className='btn btn-sm'>
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
const navItem = (
  <>
    <li>
      <a>Item 3</a>
    </li>{" "}
    <li>
      <Link to='/dashboard/my-products'>Dashboard</Link>
    </li>
  </>
);
