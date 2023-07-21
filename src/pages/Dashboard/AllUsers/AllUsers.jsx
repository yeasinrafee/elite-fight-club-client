import { useQuery } from "@tanstack/react-query";
import useTitle from "../../../hooks/useTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  useTitle("EliteFightClub | All Users");
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(
      `https://elite-fight-club-server.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };
  const handleMakeInstructor = (user) => {
    fetch(
      `https://elite-fight-club-server.vercel.app/users/instructor/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };

  return (
    <div className="pl-9 w-full">
      <h2 className="text-3xl font-semibold text-gray-500 uppercase my-7">
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
                    disabled={
                      user.role === "admin" || user.role === "instructor"
                        ? true
                        : false
                    }
                    onClick={() => handleMakeAdmin(user)}
                    className="btn btn-outline text-gray-500 outline-gray-500 btn-xs"
                  >
                    Admin
                  </button>
                </td>
                <td>
                  <button
                    disabled={
                      user.role === "instructor" || user.role === "admin"
                        ? true
                        : false
                    }
                    onClick={() => handleMakeInstructor(user)}
                    className="btn btn-outline text-gray-500 outline-gray-500 btn-xs"
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
