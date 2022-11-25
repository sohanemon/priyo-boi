import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Heading from "../../components/ui/heading";
import useCategory from "../../hooks/useCategory";
import { server } from "../../lib/axios-client";

const Categories = () => {
  const categories = useCategory();
  return (
    <>
      <Heading desc='Browse books by categories '>Categories</Heading>

      <div className='grid grid-cols-4 gap-5'>
        {categories?.map((_) => (
          <Card key={_._id} {..._} />
        ))}
      </div>
    </>
  );
};

export default Categories;

const Card = ({ name, _id }) => {
  return (
    <Link to={`/category/${_id}`}>
      <div className=' h-full card card-side bg-base-100 group shadow-md px-4'>
        <div className='grid place-content-center py-2'>
          <h2 className='card-title text-sm px-3 group-hover:text-white'>
            {name}
          </h2>
        </div>
      </div>
    </Link>
  );
};
