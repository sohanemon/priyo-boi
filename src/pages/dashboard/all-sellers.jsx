import Loader from "../../components/ui/loader";
import { UserTable } from "../../components/user-table";
import useUser from "../../hooks/use-user";

const AllSellers = () => {
  const { data: seller, refetch, isLoading } = useUser("seller");

  return (
    <div>
      <div className='overflow-x-auto w-full'>
        <table className='table w-full'>
          <thead>
            <tr className='text-center'>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {!isLoading ? (
              seller?.map((_, i) => (
                <UserTable i={i} key={_._id} {..._} refetch={refetch} seller />
              ))
            ) : (
              <tr>
                <td></td>
                <td></td> <Loader />
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
