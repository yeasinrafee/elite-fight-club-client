import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../hooks/useTitle";
import { useForm } from "react-hook-form";

const SignUp = () => {
  useTitle("EliteFightClub | Sign Up");
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;

        // It'll update the user name and Photo
        updateUser(data.name, data.photo)
          .then(() => {
            const saveUser = { name: data.name, email: data.email };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  console.log("User Updated");
                  navigate("/");
                }
              });
          })
          .catch((err) => console.log(err));
        console.log(user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full md:w-1/2 mx-auto border px-14 pt-10 pb-20 my-10 rounded-md shadow-lg">
      <h1 className="text-4xl font-bold text-center my-6 text-amber-400">
        Please Sign Up
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered"
            name="name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500">Name is required</span>
          )}
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
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered"
            name="password"
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
              pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*()-=_+|;':",.<>?]).*/,
            })}
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">
              {" "}
              {errors.password && (
                <span className="text-red-500">Password is required</span>
              )}
            </p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              {" "}
              {errors.password && (
                <span className="text-red-500">
                  Password Must be 6 characters
                </span>
              )}
            </p>
          )}
          {errors.password?.type === "maxLength" && (
            <p className="text-red-500">
              {" "}
              {errors.password && (
                <span className="text-red-500">
                  Password Must be less than 20 characters
                </span>
              )}
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              {" "}
              {errors.password && (
                <span className="text-red-500">
                  Password must be have one uppercase and one special character
                </span>
              )}
            </p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered"
            name="confirm_password"
            {...register("confirm_password", {
              required: true,
              minLength: 6,
              maxLength: 20,
            })}
          />
          {errors.confirm_password && (
            <span className="text-red-500">Confirm Password is required</span>
          )}
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
            {...register("photo", { required: true })}
          />
          {errors.photo && (
            <span className="text-red-500">Photo URL is required</span>
          )}
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
