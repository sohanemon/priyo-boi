import WishlistCard from "../../components/ui/card/wishlist-card";
import { useAuth } from "../../context/auth-provider";

const MyWishlist = () => {
  const { user } = useAuth();
  return (
    <>
      <div>
        <div className='overflow-x-auto w-full'>
          <table className='table w-full'>
            <thead>
              <tr className='text-center'>
                <th>Book name</th>
                <th>Seller</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {user?.wishlist?.map((_, i) => (
                <WishlistCard i={i} key={_} id={_} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyWishlist;
