import { useQuery } from "@tanstack/react-query";
import { server } from "../lib/axios-client";

const useCategory = () => {
  const { data } = useQuery(["categories"], () => server.get("categories"));

  return data?.data;
};

export default useCategory;
