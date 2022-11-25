export const ProductCard = () => {
  return (
    <>
      <div className='card card-side h-36 bg-base-100 shadow-xl'>
        <figure>
          <img src='https://placeimg.com/200/280/arch' alt='Movie' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title text-sm'>New movie is released! </h2>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Order now</button>
          </div>
        </div>
      </div>
    </>
  );
};
