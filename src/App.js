import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/auth-provider";
import router from "./routes/router";

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Toaster />
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
