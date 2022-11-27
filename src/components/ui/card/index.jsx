import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../context/auth-provider";
import { server } from "../../../lib/axios-client";
import placeOrder from "../../../utils/place-order";
import { FcLike } from "react-icons/fc";
import addToWishlist from "../../../utils/add-to-wishlist";
const Card = ({
  _id,
  bookName,
  bookAuthor,
  category_id,
  condition,
  image,
  number,
  location,
  resalePrice,
  originalPrice,
  yearOfPurchase,
  description,
  addedBy,
  available,
  date,
}) => {
  const { user } = useAuth();
  const { data: category } = useQuery([category_id], () =>
    server.get(`category/${category_id}`)
  );
  return (
    <>
      <div className='w-full overflow-hidden bg-base-100 shadow-x rounded-lg'>
        <figure>
          <img
            src={image}
            alt='Shoes'
            className='h-32 object-cover bg-gray-600 w-full'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title justify-between'>
            <span>
              {bookName} <div className='badge badge-secondary'>NEW</div>
            </span>
            <FcLike
              className='cursor-pointer'
              onClick={() => addToWishlist(user?.email, _id)}
            />
          </h2>
          <p>{description}</p>
          <div className='card-actions justify-end'>
            <div className='badge badge-outline'>{category?.data}</div>
            <div className='badge badge-outline'>{condition}</div>
          </div>
        </div>
        <button
          className='btn btn-primary  btn-xs w-full'
          onClick={() =>
            placeOrder(_id, addedBy, resalePrice, user.email, user?.typeOfUser)
          }
        >
          Order now
        </button>
      </div>
    </>
  );
};

export default Card;
