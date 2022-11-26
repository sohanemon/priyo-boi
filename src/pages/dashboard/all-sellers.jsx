import { UserTable } from "../../components/user-table";
import useUser from "../../hooks/use-user";

const AllSellers = () => {
  const { data: seller, refetch } = useUser("seller");

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
            {seller?.map((_, i) => (
              <UserTable i={i} key={_._id} {..._} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
