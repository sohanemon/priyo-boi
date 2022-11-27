import toast from "react-hot-toast";
import { server } from "../lib/axios-client";

const placeOrder = (book_id, seller, price, buyer, role) => {
  if (role !== "buyer") return toast.error("Only buyer can order");
  toast
    .promise(server.post("order", { book_id, seller, buyer, price }), {
      error: "Already added",
      success: "success",
      loading: "loading",
    })
    .then((res) => console.log(res.data));
};
export default placeOrder;
