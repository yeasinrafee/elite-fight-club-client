import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";

const CheckoutForm = ({ id }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const [selectedClass, setSelectedClass] = useState([]);
  useEffect(() => {
    fetch(`https://elite-fight-club-server.vercel.app/selected/${id}`)
      .then((res) => res.json())
      .then((data) => setSelectedClass(data));
  }, []);

  const {
    _id,
    classId,
    class_name,
    image,
    instructor_name,
    instructor_email,
    available_seats,
    price: classPrice,
  } = selectedClass;

  useEffect(() => {
    if (classPrice > 0) {
      axiosSecure.post("/create-payment-intent", { classPrice }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [classPrice, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
      //   console.log(paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        classPrice,
        data: new Date(),
        selectedClassId: _id,
        classId,
        class_name,
        image,
        instructor_name,
        instructor_email,
        available_seats,
      };

      axiosSecure.post("/payments", payment).then((res) => {
        if (res.data.insertedId) {
          //display
        }
      });
    }
  };
  return (
    <>
      <form className="w-full" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-warning btn-sm mt-7 text-white"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 mt-5">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500 mt-5">
          Transaction completed, Your transactionId: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
