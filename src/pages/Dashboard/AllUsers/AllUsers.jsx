import { useQuery } from "@tanstack/react-query";
import useTitle from "../../../hooks/useTitle";

const AllUsers = () => {
  useTitle("EliteFightClub | All Users");
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };
  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };

  return (
    <div className="pl-9 w-full">
      <h2 className="text-3xl font-semibold text-amber-400 my-7">
        Total Users: {users.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, i) => (
              <tr key={user._id} className="text-center">
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    disabled={user.role === "admin" ? true : false}
                    onClick={() => handleMakeAdmin(user)}
                    className="btn btn-outline btn-warning btn-xs"
                  >
                    Admin
                  </button>
                </td>
                <td>
                  <button
                    disabled={user.role === "instructor" ? true : false}
                    onClick={() => handleMakeInstructor(user)}
                    className="btn btn-outline btn-warning btn-xs"
                  >
                    Instructor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
