import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className='flex justify-center items-center mt-20'>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color='#6240c0'
        ariaLabel='ball-triangle-loading'
        wrapperClass=''
        wrapperStyle=''
        visible={true}
      />
    </div>
  );
};

export default Loader;
