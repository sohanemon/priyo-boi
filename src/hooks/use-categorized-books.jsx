import { useEffect, useState } from "react";
import { server } from "../lib/axios-client";

const useCategorizedBooks = (id) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    server.get(`books/category/${id}`).then((res) => setState(res.data));

    return () => {};
  }, [id]);
  return state;
};

export default useCategorizedBooks;
