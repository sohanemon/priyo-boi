import { useState } from "react";
import BlueTick from "../components/blue-tick";
import Modal from "./ui/modal";
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
  user: dbUser,
}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className='card md:card-side bg-base-100 shadow-xl'>
        <figure>
          <img src={image} className='w-96 h-full object-cover' alt='Movie' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{bookName}</h2>
          <p className=''>
            Added by: {addedBy}{" "}
            <span>{dbUser[0]?.verified && <BlueTick />}</span>
          </p>
          <div className='flex w-max gap-20'>
            <p>Price: {resalePrice}</p> <p>Original price: {originalPrice}</p>
          </div>
          <p>Used: {yearOfPurchase} yrs</p>

          <p>Location: {location}</p>
          <p>Published on: {date}</p>
          <div className='card-actions justify-end'>
            <label
              htmlFor='order-modal'
              className='btn btn-primary btn-sm'
              onClick={() => setShowModal(true)}
            >
              Order now
            </label>
          </div>
        </div>
        {showModal && (
          <Modal
            _id={_id}
            addedBy={addedBy}
            resalePrice={resalePrice}
            setShowModal={setShowModal}
          />
        )}
      </div>
    </>
  );
};
