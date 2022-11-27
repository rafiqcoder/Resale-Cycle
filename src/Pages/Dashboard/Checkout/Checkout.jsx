import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Spinner from "../../../Components/Spinner/Spinner";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51M7DjLD0ZYFK3b5MMtCin335XROKKXfyDtQq7AqYNLNWcXbElfiblXjPIBraSVcHJsf1IaGpQEjrOuqPDwMuWBWc00WI5PFpCU"
);

const Checkout = () => {
  const data = useLoaderData();

  const navigation = useNavigation();
  if (navigation.state ==='loading') {
    return <Spinner></Spinner>
  }



  return (
    <div className="w-4/12 my-10 mx-auto  shadow p-10">
      <Elements stripe={stripePromise}>
        <CheckoutForm data={data} />
      </Elements>
    </div>
  );
};

export default Checkout;
