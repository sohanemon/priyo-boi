import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-provider";

const ProductTable = ({ i, bookData, seller, buyer, price, refetch }) => {
  const { user } = useAuth();
  const { bookName, image, _id } = bookData;
  if (user?.email === buyer)
    return (
      <>
        <tr>
          <th>{i + 1}</th>
          <td>
            <div className='flex items-center space-x-3'>
              <div className='avatar'>
                <div className='mask mask-circle w-12 h-12'>
                  <img src={image} alt='' />
                </div>
              </div>
              <div>
                <div className='font-bold'>{bookName}</div>
              </div>
            </div>
          </td>
          <td>
            <p className=''>{seller}</p>
          </td>
          <td>
            <p className=''>{price}</p>
          </td>
          <td>
            {bookData?.available ? (
              <Link to={`/payment/${_id}`} className='btn btn-xs btn-success'>
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

export default ProductTable;
