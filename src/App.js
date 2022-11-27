import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/auth-provider";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import router from "./routes/router";
const queryClient = new QueryClient();
const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);

function App() {
  const options = {
    clientSecret: process.env.REACT_APP_stripe_sk,
  };
  return (
    <div className='App'>
      <AuthProvider>
        <Elements stripe={stripePromise} options={options}>
          <QueryClientProvider client={queryClient}>
            <Toaster />
            <RouterProvider router={router} />
          </QueryClientProvider>
        </Elements>
      </AuthProvider>
    </div>
  );
}

export default App;
