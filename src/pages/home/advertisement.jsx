import { useQuery } from "@tanstack/react-query";
import Card from "../../components/ui/card";
import Heading from "../../components/ui/heading";
import { server } from "../../lib/axios-client";

const Advertisement = () => {
  const { data } = useQuery(["ad"], () => {
    return server.get("ad");
  });
  if (data?.data?.length)
    return (
      <>
        <Heading desc='Get the greatest deals with awesome books'>
          Best Deals
        </Heading>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          {data.data.map((_) => (
            <Card key={_._id} {..._} />
          ))}
        </div>
      </>
    );
};

export default Advertisement;
