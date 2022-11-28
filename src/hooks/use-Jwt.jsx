import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { server } from "../lib/axios-client";

const useJwt = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email)
      server
        .post("jwt", { email })
        .then((res) => {
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
        })
        .catch((err) => console.log(err));

    return () => {};
  }, [email]);

  return token;
};

export default useJwt;
