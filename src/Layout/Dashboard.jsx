import {
  FaCheckCircle,
  FaCheckSquare,
  FaHome,
  FaListAlt,
  FaPaypal,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-yellow-100 text-base-content">
          {/* Sidebar content here */}

          <li>
            <NavLink to="myclasses">
              <FaCheckSquare /> Selected Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="enrolledClasses">
              <FaCheckCircle /> Enrolled Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="payment">
              <FaPaypal /> Payment History
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes">
              <FaListAlt /> Classes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
