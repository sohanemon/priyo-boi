import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/auth-provider";
import router from "./routes/router";
const queryClient = new QueryClient();

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
