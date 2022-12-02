import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import ProductTable from "../../components/product-table";
import Loader from "../../components/ui/loader";
import { useAuth } from "../../context/auth-provider";
import { server } from "../../lib/axios-client";

const MyOrders = () => {
  const { user } = useAuth();
  const { data, refetch, isLoading } = useQuery(["my-orders"], () =>
    server.get(`order?email=${user?.email}`)
  );

  console.log(data?.data);
  return (
    <>
      <div>
        <div className='overflow-x-auto w-full'>
          <table className='table w-full'>
            <thead>
              <tr className='text-center'>
                <th></th>
                <th>Book name</th>
                <th>Seller</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {!isLoading ? (
                data?.data?.map((_, i) => (
                  <ProductTable i={i} key={_._id} {..._} refetch={refetch} />
                ))
              ) : (
                <tr>
                  <td></td>
                  <Loader />
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyOrders;
