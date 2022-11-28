import toast from "react-hot-toast";
import { server } from "../lib/axios-client";

const placeOrder = (
  book_id,
  seller,
  price,
  buyer,
  role,
  phoneNumber,
  location
) => {
  if (role !== "buyer") return toast.error("Only buyer can order");
  return toast.promise(
    server.post("order", {
      book_id,
      seller,
      buyer,
      price,
      phoneNumber,
      location,
    }),
    {
      error: "Already added",
      success: "success",
      loading: "loading",
    }
  );
};
export default placeOrder;
