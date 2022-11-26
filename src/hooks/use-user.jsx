import { useQuery } from "@tanstack/react-query";
import { server } from "../lib/axios-client";

const useUser = (query) => {
  const { data, refetch } = useQuery([JSON.stringify(query)], () =>
    server.get(`users?role=${query}`)
  );

  return { data: data?.data, refetch };
};

export default useUser;
