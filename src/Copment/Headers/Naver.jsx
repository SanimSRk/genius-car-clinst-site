import { Link, NavLink } from 'react-router-dom';
import logo from '../.././assets/logo.svg';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Naver = () => {
  const { user, logOutUsers } = useContext(AuthContext);
  console.log(user);
  const navlinks = (
    <>
      <NavLink
        to={'/'}
        className={({ isActive }) =>
          isActive
            ? 'px-4  py-2  text-[#FF3811] border border-[#FF3811] font-semibold'
            : 'font-semibold px-4  py-2 rounded-lg bg-base-100'
        }
      >
        Home
      </NavLink>
      <NavLink
        to={'/about'}
        className={({ isActive }) =>
          isActive
            ? 'px-4  py-2  text-[#FF3811] border border-[#FF3811] font-semibold'
            : 'font-semibold px-4  py-2 rounded-lg bg-base-100'
        }
      >
        About
      </NavLink>

      <NavLink
        to={'/service'}
        className={({ isActive }) =>
          isActive
            ? 'px-4  py-2  text-[#FF3811] border border-[#FF3811] font-semibold'
            : 'font-semibold px-4  py-2 rounded-lg bg-base-100'
        }
      >
        Services
      </NavLink>
      {user && (
        <NavLink
          to={'/booking'}
          className={({ isActive }) =>
            isActive
              ? 'px-4  py-2  text-[#FF3811] border border-[#FF3811] font-semibold'
              : 'font-semibold px-4  py-2 rounded-lg bg-base-100'
          }
        >
          My Booking
        </NavLink>
      )}
      <NavLink
        to={'/blogs'}
        className={({ isActive }) =>
          isActive
            ? 'px-4  py-2  text-[#FF3811] border border-[#FF3811] font-semibold'
            : 'font-semibold px-4  py-2 rounded-lg bg-base-100'
        }
      >
        Blog
      </NavLink>
      <NavLink
        to={'/contact'}
        className={({ isActive }) =>
          isActive
            ? 'px-4  py-2  text-[#FF3811] border border-[#FF3811] font-semibold'
            : 'font-semibold px-4  py-2 rounded-lg bg-base-100'
        }
      >
        Home
      </NavLink>
    </>
  );
  const hnadileClickLogout = () => {
    logOutUsers()
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="  w-full ">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <Link to={'/'}>
            <img className="w-2/3" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">{navlinks}</ul>
        </div>
        <div className="navbar-end gap-4">
          <a className="btn border uppercase border-[#FF3811] text-[#FF3811]">
            Apponment
          </a>

          {user ? (
            <button
              onClick={hnadileClickLogout}
              className="btn bg-[#FF3811] text-white"
            >
              Logout
            </button>
          ) : (
            <Link to={'/login'}>
              <button className="btn bg-[#FF3811] text-white">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Naver;
