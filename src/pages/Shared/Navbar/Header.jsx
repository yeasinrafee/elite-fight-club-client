import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { FaUserCircle } from 'react-icons/fa';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };

  return (
    <Navbar fluid rounded className='w-11/12 mx-auto bg-gray-200 '>
      <Navbar.Brand href='/'>
        <h2 className='text-2xl font-bold text-gray-800 ml-2'>
          EliteFight <br /> C L U B
        </h2>
      </Navbar.Brand>
      <div className='flex md:order-2'>
        {user ? (
          <Dropdown
            className='mt-4 ml-14 lg:mt-0 lg:ml-0'
            arrowIcon={false}
            inline
            label={
              <Tippy content={user?.displayName}>
                {user?.photoURL ? (
                  <Avatar
                    img={user.photoURL}
                    rounded
                    alt='User Avatar'
                    className='w-[65px] h-[50px] rounded-full'
                  />
                ) : (
                  <FaUserCircle className='text-2xl' />
                )}
              </Tippy>
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>{user?.displayName}</span>
              <span className='block truncate text-sm font-medium'>
                {user?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item as={Link} to='/dashboard'>
              Dashboard
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link
            to='/login'
            className='bg-yellow-300 text-black py-2 px-4 rounded-lg hover:bg-yellow-200 duration-300'
          >
            Login
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className=''>
        <Navbar.Link
          className='uppercase hover:!text-customHoverColor  '
          href='/'
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          className='uppercase hover:!text-customHoverColor  '
          href='/instructors'
        >
          Instructors
        </Navbar.Link>
        <Navbar.Link
          className='uppercase hover:!text-customHoverColor  '
          href='/classes'
        >
          Classes
        </Navbar.Link>
        {user && (
          <Navbar.Link
            className='uppercase hover:!text-customHoverColor  '
            href='/dashboard'
          >
            Dashboard
          </Navbar.Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
