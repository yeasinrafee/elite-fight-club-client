import { useParams } from "react-router-dom";

const Feedback = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="border border-amber-400 rounded-md px-16 pt-16 pb-24">
      <h2 className="text-3xl font-bold text-amber-400 text-center my-9 uppercase">
        Send Your Feedback To The Instructor:
      </h2>
      <form className="flex items-center justify-center gap-12 mt-16">
        <textarea
          className="textarea textarea-warning textarea-lg w-full max-w-xs"
          placeholder="Feedback"
        ></textarea>
        <input type="submit" value="send" className="btn btn-warning" />
      </form>
    </div>
  );
};

export default Feedback;
