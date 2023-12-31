import useSelectedClass from "../../../hooks/useSelectedClass";
import SingleSelectedClass from "../../SingleSelectedClass/SingleSelectedClass";

const SelectedClass = () => {
  const [selected, , refetch] = useSelectedClass();

  return (
    <div>
      <h2 className="text-4xl font-bold text-gray-600 text-center uppercase my-12 ">
        Your Selected Classes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-content-center items-center gap-9 my-5 md:my-16 ml-10">
        {selected &&
          selected.map((singleClass) => (
            <SingleSelectedClass
              key={singleClass._id}
              singleClass={singleClass}
              refetch={refetch}
            />
          ))}
      </div>
    </div>
  );
};

export default SelectedClass;
