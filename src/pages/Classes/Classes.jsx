import useClasses from "../../hooks/useClasses";

const Classes = () => {
  const [classes] = useClasses();
  console.log(classes);
  return (
    <div>
      <h2 className="text-4xl font-bold text-amber-400 text-center uppercase my-12 ">
        checkout our brilliant courses
      </h2>
    </div>
  );
};

export default Classes;
