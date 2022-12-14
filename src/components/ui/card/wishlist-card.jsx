import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { server } from "../../../lib/axios-client";

const WishlistCard = ({ id }) => {
  const { data, isLoading } = useQuery([JSON.stringify(id)], () =>
    server.get(`book/${id}`)
  );
  const book = data?.data;
  return (
    <>
      <tr>
        <td>
          <div className='flex items-center space-x-3'>
            <div className='avatar'>
              <div className='mask mask-circle w-12 h-12'>
                <img src={book?.image} alt='' />
              </div>
            </div>
            <div>
              <div className='font-bold'>
                {!isLoading ? book?.bookName : "Loading ..."}
              </div>
            </div>
          </div>
        </td>
        <td>
          <p className=''>{book?.addedBy}</p>
        </td>
        <td>
          <p className=''>{book?.resalePrice}</p>
        </td>
        <td>
          {book?.available ? (
            <Link
              to={`/payment/${book?._id}`}
              className='btn btn-xs btn-success'
            >
              Pay
            </Link>
          ) : (
            <button disabled='disabled' className='btn btn-xs btn-success'>
              Paid
            </button>
          )}
        </td>
      </tr>
    </>
  );
};

export default WishlistCard;
