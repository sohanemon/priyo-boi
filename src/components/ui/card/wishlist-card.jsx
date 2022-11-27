import { useQuery } from "@tanstack/react-query";
import { server } from "../../../lib/axios-client";

const WishlistCard = ({ id }) => {
  const { data } = useQuery([JSON.stringify(id)], () =>
    server.get(`book/${id}`)
  );
  const book = data?.data;
  console.log(book);
  if (data?.data?._id)
    return (
      <>
        <tr>
          <td>
            <div className='flex items-center space-x-3'>
              <div className='avatar'>
                <div className='mask mask-circle w-12 h-12'>
                  <img src={book.image} alt='' />
                </div>
              </div>
              <div>
                <div className='font-bold'>{book.bookName}</div>
              </div>
            </div>
          </td>
          <td>
            <p className=''>{book.addedBy}</p>
          </td>
          <td>
            <p className=''>{book.resalePrice}</p>
          </td>
          <td>
            <button className='btn btn-xs btn-success'>Pay</button>
          </td>
        </tr>
      </>
    );
};

export default WishlistCard;
