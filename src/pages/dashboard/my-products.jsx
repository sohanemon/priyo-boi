import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../context/auth-provider";
import { server } from "../../lib/axios-client";
import { ProductCard } from "./product-card";

const MyProducts = () => {
  const { user, loading } = useAuth();
  const { data, refetch } = useQuery(
    ["books"],
    () => !loading && server.get(`books?email=${user?.email}`)
  );
  if (data?.data.length)
    return (
      <div className='space-y-5'>
        {data.data.map((_) => (
          <ProductCard refetch={refetch} key={_._id} {..._} />
        ))}
      </div>
    );
};

export default MyProducts;
