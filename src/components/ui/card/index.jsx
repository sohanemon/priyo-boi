import { useQuery } from "@tanstack/react-query";
import { server } from "../../../lib/axios-client";

const Card = ({
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
  const { data: category } = useQuery([category_id], () =>
    server.get(`category/${category_id}`)
  );
  console.log(category);
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
          <h2 className='card-title'>
            {bookName} <div className='badge badge-secondary'>NEW</div>
          </h2>
          <p>{description}</p>
          <div className='card-actions justify-end'>
            <div className='badge badge-outline'>{category?.data}</div>
            <div className='badge badge-outline'>{condition}</div>
          </div>
        </div>
        <button className='btn btn-primary  btn-xs w-full'>Order now</button>
      </div>
    </>
  );
};

export default Card;
