import { UserTable } from "../../components/user-table";
import useUser from "../../hooks/use-user";

const AllBuyers = () => {
  const { data: seller, refetch, isLoading } = useUser("buyer");

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
            </tr>
          </thead>
          <tbody>
            {!isLoading &&
              seller?.map((_, i) => (
                <UserTable i={i} key={_._id} {..._} refetch={refetch} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;
