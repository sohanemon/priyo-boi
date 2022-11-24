import { Link } from "react-router-dom";
import Heading from "../../components/ui/heading";

const Categories = () => {
  return (
    <>
      <Heading desc='Browse books by categories '>Categories</Heading>

      <div className='grid grid-cols-4 gap-5'>
        {[...Array(10).keys()].map((_) => (
          <Card key={_} />
        ))}
      </div>
    </>
  );
};

export default Categories;

const Card = () => {
  return (
    <Link to={"/category/1"}>
      <div className='card card-side bg-base-100 shadow-md px-4'>
        <figure>
          <img
            src='https://placeimg.com/200/280/arch'
            alt='Movie'
            className='rounded-full h-20 w-20'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>Comics</h2>
          <p>10</p>
        </div>
      </div>
    </Link>
  );
};
