import { useEffect, useState } from "react";
import { server } from "../lib/axios-client";

const useCategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    server.get("categories").then((res) => setCategories(res.data));

    return () => {};
  }, []);
  return categories;
};

export default useCategory;
