import { useAuth } from "../context/auth-provider";
import placeOrder from "../utils/place-order";

export const Card = ({
  _id,
  bookName,
  bookAuthor,
  image,
  resalePrice,
  originalPrice,
  addedBy,
  date,
  location,
  condition,
  yearOfPurchase,
}) => {
  const { user } = useAuth();
  return (
    <>
      <div className='card card-side bg-base-100 shadow-xl'>
        <figure>
          <img src={image} className='w-96 h-full object-cover' alt='Movie' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{bookName}</h2>
          <p>Posted by: {addedBy}</p>
          <div className='flex w-max gap-20'>
            <p>Price: {resalePrice}</p> <p>Original price: {originalPrice}</p>
          </div>
          <p>Used: {yearOfPurchase} yrs</p>

          <p>Location: {location}</p>
          <p>Published on: {date}</p>
          <div className='card-actions justify-end'>
            <button
              className='btn btn-primary btn-sm'
              onClick={() =>
                placeOrder(
                  _id,
                  addedBy,
                  resalePrice,
                  user?.email,
                  user?.typeOfUser
                )
              }
            >
              Order now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
