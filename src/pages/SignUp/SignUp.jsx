import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../hooks/useTitle";

const SignUp = () => {
  useTitle("EliteFightClub | Sign Up");
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm_password.value;
    const photo = form.photo.value;

    console.log(name, email, password, confirmPassword, photo);

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        // It'll update the user name and Photo
        updateUser(name, photo)
          .then(() => {
            console.log("User Updated");
            form.reset();
          })
          .catch((err) => console.log(err));
        console.log(user);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-full md:w-1/2 mx-auto border px-14 pt-10 pb-20 my-10 rounded-md shadow-lg">
      <h1 className="text-4xl font-bold text-center my-6 text-amber-400">
        Please Sign Up
      </h1>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered"
            name="name"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered"
            name="email"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="text"
            placeholder="Password"
            className="input input-bordered"
            name="password"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="text"
            placeholder="Confirm Password"
            className="input input-bordered"
            name="confirm-password"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="Photo URL"
            className="input input-bordered"
            name="photo"
          />
        </div>
        <input
          type="submit"
          value="Sign Up"
          className="btn btn-block bg-amber-400 border-none mt-3 hover:bg-amber-500"
        />
      </form>
      <p className="my-5 text-center text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-amber-400 font-bold">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
