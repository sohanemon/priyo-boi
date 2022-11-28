import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../context/auth-provider";
import { server } from "../lib/axios-client";

const useUser = (query) => {
  const { user } = useAuth();
  const { data, refetch, isLoading } = useQuery([JSON.stringify(query)], () =>
    server.post(`users?role=${query}`, { email: user?.email })
  );

  return { data: data?.data, refetch };
};

export default useUser;
