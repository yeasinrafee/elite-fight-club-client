import useInstructors from "../../hooks/useInstructors";

const Instructors = () => {
  const [instructors] = useInstructors();
  console.log(instructors);
  return (
    <div>
      <h2 className="text-4xl font-bold text-amber-400 text-center uppercase my-12 ">
        Introducing Our Honorable Instructors
      </h2>
    </div>
  );
};

export default Instructors;
