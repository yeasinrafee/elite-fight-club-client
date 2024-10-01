import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Navbar/Header';

const Main = () => {
  return (
    <div className=''>
      <div className='bg-gray-200'>
        <Header></Header>
      </div>

      <div className='w-10/12 mx-auto'>
        <Outlet />
      </div>
      <div className='bg-gray-200'>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
