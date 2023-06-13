import useClasses from "../../../hooks/useClasses";

const TopClasses = () => {
  const [classes] = useClasses();
  return (
    <div className="my-28">
      <h1 className="text-3xl font-bold text-amber-400 text-center mb-8 uppercase">
        Popular Classes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center items-center gap-6">
        {classes &&
          classes.map((tClass) => (
            <div
              key={tClass._id}
              className="card card-compact w-96 bg-base-100 shadow-xl h-full"
            >
              <figure>
                <img src={tClass.image} alt="Class image" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{tClass.class_name}</h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopClasses;
