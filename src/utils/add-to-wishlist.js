import { server } from "../lib/axios-client";

const addToWishlist = (email, book_id) => {
  console.log(book_id);
  server
    .put(`wishlist?email=${email}`, { book_id })
    .then((res) => console.log(res));
  console.log("okk");
};

export default addToWishlist;
