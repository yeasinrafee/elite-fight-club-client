import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const { price } = useParams();
  const classPrice = parseFloat(price);
  console.log(classPrice);
  return (
    <div>
      <h2 className="text-4xl font-bold text-amber-400 text-center uppercase my-12 ">
        Complete Your Payment
      </h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm classPrice={classPrice} />
      </Elements>
    </div>
  );
};

export default Payment;
