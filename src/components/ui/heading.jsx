const Heading = ({ children, desc }) => {
  return (
    <>
      <h1 className='text-left text-3xl text-gray-100 mt-10 font-medium'>
        {children}
      </h1>
      <p className=' mt-1 mb-10 text-xl'>{desc}</p>
    </>
  );
};

export default Heading;
