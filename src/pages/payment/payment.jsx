// This example shows you how to set up React Stripe.js and use Elements.
// Learn how to accept a payment using the official Stripe docs.
// https://stripe.com/docs/payments/accept-a-payment#web

import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
// import { CardElement, Elements, useElements, useStripe } from ;

import { Elements } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { server } from "../../lib/axios-client";
import CheckoutForm from "./checkout-form";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);

const Payment = () => {
  const [clientSecret, setClientSecret] = useState("");

  const { id } = useParams();
  const { data } = useQuery(["payment-book"], () => server.get(`book/${id}`));
  useEffect(() => {
    server
      .post("create-payment-intent", { price: data?.data?.resalePrice })
      .then((res) => setClientSecret(res.data.clientSecret));

    return () => {};
  }, [data?.data?.resalePrice]);
  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <div className='max-w-xl mx-auto bg-base-300 p-10 rounded-xl shadow-lg'>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
