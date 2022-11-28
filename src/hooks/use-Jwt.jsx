import { useEffect, useState } from "react";
import { server } from "../lib/axios-client";

const useJwt = (email) => {
  const [token, setToken] = useState("");
  console.log(email);
  useEffect(() => {
    if (email)
      server
        .post("jwt", { email })
        .then((res) => {
          setToken(res.data.token);
          console.log(res.data.token);
          localStorage.setItem("token", res.data.token);
        })
        .catch((err) => console.log(err));

    return () => {};
  }, [email]);

  return token;
};

export default useJwt;
