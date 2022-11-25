import { Outlet } from "react-router-dom";
import Navigation from "./navigation";

const Dashboard = () => {
  return (
    <section>
      <Navigation />
      <div className='w-3/4 mx-auto'>
        <Outlet />
      </div>
    </section>
  );
};

export default Dashboard;
