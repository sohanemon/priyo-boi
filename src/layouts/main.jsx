import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

const Main = () => {
  return (
    <>
      <div className=''>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
