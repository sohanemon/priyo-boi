const Motivate = () => {
  return (
    <section className='flex items-center h-[50vh] mt-32'>
      <div className='hero grow'>
        <div className='hero-content flex-col lg:flex-row'>
          <img
            src='https://placeimg.com/260/400/arch'
            className='w-32 rounded-lg shadow-2xl'
          />
          <div>
            <h1 className='text-3xl font-bold'>Start making money</h1>
            <p className='py-6'>Do you want to sell your old books?</p>
            <button className='btn btn-sm btn-primary'>Get Started</button>
          </div>
        </div>
      </div>
      <div className='divider divider-horizontal' />
      <div className='basis-full space-y-6'>
        <p className=''>Looking for great books in lowest price?</p>
        <h1 className='text-5xl font-bold'>Find out now</h1>
        <button className='btn btn-sm btn-primary btn-outline'>Explore</button>
      </div>
    </section>
  );
};

export default Motivate;
