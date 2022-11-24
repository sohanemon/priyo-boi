const Card = () => {
  return (
    <>
      <div className='w-full overflow-hidden bg-base-100 shadow-x rounded-lg'>
        <figure>
          <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>
            Shoes!
            <div className='badge badge-secondary'>NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className='card-actions justify-end'>
            <div className='badge badge-outline'>Fashion</div>
            <div className='badge badge-outline'>Products</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
