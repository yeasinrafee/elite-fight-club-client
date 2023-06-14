import {
  FaCheckCircle,
  FaCheckSquare,
  FaHome,
  FaListAlt,
  FaPaypal,
  FaUsers,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  // TODO:
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  const isInstructor = false;
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

          {isAdmin ? (
            <>
              <li>
                <NavLink to="allclasses">
                  <FaCheckSquare /> All Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="allusers">
                  <FaUsers /> Manage Users
                </NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <NavLink to="addaclass">
                  <FaCheckSquare /> Add a Class
                </NavLink>
              </li>
              <li>
                <NavLink to="myclasses">
                  <FaUsers /> My Classes
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="selsectedclasses">
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
            </>
          )}

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
