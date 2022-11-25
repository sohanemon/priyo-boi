export const Card = () => {
  return (
    <>
      <div className='card card-side bg-base-100 shadow-xl'>
        <figure>
          <img src='https://placeimg.com/200/280/arch' alt='Movie' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>New movie is released!</h2>
          <p>Posted by: Rakibul Islam</p>
          <div className='flex w-max gap-20'>
            <p>Price: 50</p> <p>Original price: 150</p>
          </div>
          <p>Used: 6month</p>
          <p>{}</p>
          <p>Faridpur</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Order now</button>
          </div>
        </div>
      </div>
    </>
  );
};
