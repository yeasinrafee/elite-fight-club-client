import { Link } from "react-router-dom";

const Navbar = () => {
  const navMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link>Instructors</Link>
      </li>
      <li>
        <Link>Classes</Link>
      </li>
      {/* TODO: Dynamic Options */}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
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
            <h2 className="text-2xl font-bold text-amber-400">
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
