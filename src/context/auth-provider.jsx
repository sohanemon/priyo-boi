import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import axios from "axios";
import app from "../firebase/app";
import { server } from "../lib/axios-client";
const Auth = createContext();
export const useAuth = () => useContext(Auth);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        server.get(`user/${user.uid}`).then((res) => {
          setUser(res.data);
          setLoading(false);
        });
      } else {
        console.log("no previous user found");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const logOut = () => {
    signOut(auth).then(() => setUser({}));
  };

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  const emailSignUp = (data) => {
    return createUserWithEmailAndPassword(auth, data.email, data.password);
  };
  const emailLogin = (data) => {
    return signInWithEmailAndPassword(auth, data.email, data.password);
  };

  return (
    <Auth.Provider
      value={{
        isLoading,
        user,
        logOut,
        googleLogin,
        emailSignUp,
        emailLogin,
      }}
    >
      {children}
    </Auth.Provider>
  );
};

export default AuthProvider;
