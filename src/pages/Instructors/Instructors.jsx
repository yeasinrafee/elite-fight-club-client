import useInstructors from "../../hooks/useInstructors";
import useTitle from "../../hooks/useTitle";

const Instructors = () => {
  useTitle("EliteFightClub | Instructors");
  const [instructors] = useInstructors();
  console.log(instructors);
  return (
    <div>
      <h2 className="text-4xl font-bold text-amber-400 text-center uppercase my-12 ">
        Introducing Our Honorable Instructors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-content-center items-center gap-9 my-5 md:my-24">
        {instructors &&
          instructors.map((instructor) => (
            <div
              key={instructor._id}
              className="card w-80 h-96 mx-auto bg-base-100 shadow-xl"
            >
              <figure className="px-10 pt-10">
                <img
                  src={instructor.image}
                  alt="instructor image"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-amber-400">
                  Name: {instructor.name}
                </h2>
                <p>Email: {instructor.email}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Instructors;
