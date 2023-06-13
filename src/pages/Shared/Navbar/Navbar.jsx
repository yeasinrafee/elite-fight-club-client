import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="instructor">Instructors</Link>
      </li>
      <li>
        <Link to="classes">Classes</Link>
      </li>
      {user ? (
        <>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
          <li>
            {
              <Tippy content={user && user?.displayName}>
                {user?.photoURL ? (
                  <img
                    className="w-[65px] h-[60px] rounded-full"
                    src={user.photoURL}
                    alt="User Image"
                  />
                ) : (
                  <Link to="/user">
                    <FaUserCircle className="text-2xl" />
                  </Link>
                )}
              </Tippy>
            }
          </li>
          <li className="border rounded-md hover:bg-amber-500">
            <Link onClick={() => logOut()}>Logout</Link>
          </li>
        </>
      ) : (
        <li className="border rounded-md hover:bg-amber-500">
          <Link to="/login">Login</Link>
        </li>
      )}
      {/* TODO: Dynamic Options */}
    </>
  );
  return (
    <div className="mb-5">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown z-10">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-amber-100 rounded-box w-52"
            >
              {navMenu}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case h-16 ">
            <h2 className="text-2xl font-bold text-amber-400 ml-14 md:ml-0">
              EliteFight <br />C L U B
            </h2>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-amber-400 md:text-lg">
            {navMenu}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
