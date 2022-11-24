import Advertisement from "./advertisement";
import Carousel from "./carousel";
import Categories from "./categories";
import Motivate from "./motivate";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className='w-5/6 mx-auto'>
        <Advertisement />
        <Categories />
        <Motivate />
      </div>
    </div>
  );
};

export default Home;
