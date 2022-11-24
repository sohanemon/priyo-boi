import Heading from "../../components/ui/heading";

const Category = () => {
  return (
    <section className='w-4/5 mx-auto'>
      <Heading>Comics</Heading>
      <div className='space-y-10 mx-auto'>
        {[...Array(20).keys()].map((_) => (
          <Card key={_} />
        ))}
      </div>
    </section>
  );
};

export default Category;
const Card = () => {
  return (
    <>
      <div className='card card-side bg-base-100 shadow-xl'>
        <figure>
          <img src='https://placeimg.com/200/280/arch' alt='Movie' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>New movie is released!</h2>
          <p>Faridpur</p>
          <div className='flex w-max gap-20'>
            <p>Price: 50</p> <p>Original price: 150</p>
          </div>
          <p>Seller: Rakibul Islam</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Order now</button>
          </div>
        </div>
      </div>
    </>
  );
};
