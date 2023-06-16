import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Feedback = () => {
  const { id } = useParams();
  console.log(id);

  const handleFeedback = (e) => {
    e.preventDefault();
    const form = e.target;
    const feedback = form.feedback.value;
    console.log(feedback);
    fetch(`http://localhost:5000/classes/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ feedback }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Feedback sended to the instructor",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="border border-amber-400 rounded-md px-16 pt-16 pb-24">
      <h2 className="text-3xl font-bold text-amber-400 text-center my-9 uppercase">
        Send Your Feedback To The Instructor:
      </h2>
      <form
        onSubmit={handleFeedback}
        className="flex items-center justify-center gap-12 mt-16"
      >
        <textarea
          className="textarea textarea-warning textarea-lg w-full max-w-xs"
          placeholder="Feedback"
          name="feedback"
        ></textarea>
        <input type="submit" value="send" className="btn btn-warning" />
      </form>
    </div>
  );
};

export default Feedback;
