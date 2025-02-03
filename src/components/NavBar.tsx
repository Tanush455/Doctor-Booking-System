import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { assets } from '../assets/Information';
import Cross from '../assets/cross_icon.png'

function NavBar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [token, setToken] = useState(true); // Replace with real auth logic

  // Common navigation links
  const navLinks = [
    { path: '/', text: 'HOME' },
    { path: '/doctors', text: 'ALL DOCTORS' },
    { path: '/about', text: 'ABOUT' },
    { path: '/contact', text: 'CONTACT' },
  ];

  return (
    <div className='relative flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-700 px-4'>
      <img 
        src={assets.website_logo} 
        alt="Website Logo" 
        className='w-32 cursor-pointer' 
        onClick={() => navigate('/')}
      />

      {/* Mobile Menu Toggle */}
      <button 
        className='md:hidden p-2'
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        aria-label="Toggle navigation menu"
      >
        <img 
          src={showMobileMenu ? Cross : assets.menu_icon} 
          alt='Menu toggle' 
          className='w-6'
        />
      </button>

      {/* Desktop Navigation */}
      <nav className='hidden md:flex items-center gap-8'>
        <ul className='flex items-center gap-6 font-medium'>
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink 
                to={link.path} 
                className={({ isActive }) => 
                  `hover:text-blue-500 ${isActive ? 'text-blue-600' : 'text-gray-700'}`
                }
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Auth Section */}
        {token ? (
          <div className='relative flex items-center gap-2'>
            <button 
              className='flex items-center gap-2'
              onClick={() => setShowMenu(!showMenu)}
              aria-haspopup="true"
              aria-expanded={showMenu}
            >
              <img 
                src={assets.profile_pic} 
                alt="User profile" 
                className='w-8 h-8 rounded-full object-cover'
              />
              <img 
                src={assets.dropdown_icon} 
                alt="Profile options" 
                className='w-3 transition-transform'
                style={{ transform: showMenu ? 'rotate(180deg)' : 'none' }}
              />
            </button>
            
            {showMenu && (
              <div className='absolute top-full right-0 bg-white shadow-lg rounded-lg p-4 font-medium text-base flex flex-col gap-3 min-w-48 z-50'>
                <NavLink to='/my-profile' className="hover:text-blue-500">My Profile</NavLink>
                <NavLink to='/my-appointments' className="hover:text-blue-500">My Appointments</NavLink>
                <NavLink to='/dashboard' className="hover:text-blue-500">Dashboard</NavLink>
                <button 
                  onClick={() => setToken(false)}
                  className='text-left hover:text-blue-500'
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className='flex items-center gap-4'>
            <NavLink 
              to='/login' 
              className='bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-colors'
            >
              LOGIN
            </NavLink>
            <NavLink 
              to='/signup' 
              className='bg-gray-200 text-gray-700 rounded-lg px-4 py-2 hover:bg-gray-300 transition-colors'
            >
              SIGN UP
            </NavLink>
          </div>
        )}
      </nav>

      {/* Mobile Navigation */}
      {showMobileMenu && (
        <div className='md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50'>
          <ul className='flex flex-col items-center gap-4 py-5'>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink 
                  to={link.path} 
                  onClick={() => setShowMobileMenu(false)}
                  className={({ isActive }) => 
                    `hover:text-blue-500 ${isActive ? 'text-blue-600' : 'text-gray-700'}`
                  }
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
            
            {/* Mobile Auth Section */}
            {token ? (
              <>
                <NavLink to='/my-profile' onClick={() => setShowMobileMenu(false)}>My Profile</NavLink>
                <NavLink to='/my-appointments' onClick={() => setShowMobileMenu(false)}>My Appointments</NavLink>
                <NavLink to='/dashboard' onClick={() => setShowMobileMenu(false)}>Dashboard</NavLink>
                <button 
                  onClick={() => setToken(false)}
                  className='text-red-600 hover:text-red-700'
                >
                  Logout
                </button>
              </>
            ) : (
              <div className='flex flex-col gap-4 mt-4 w-full px-4'>
                <NavLink 
                  to='/login' 
                  onClick={() => setShowMobileMenu(false)}
                  className='bg-blue-500 text-white rounded-lg px-4 py-2 text-center hover:bg-blue-600'
                >
                  LOGIN
                </NavLink>
                <NavLink 
                  to='/signup' 
                  onClick={() => setShowMobileMenu(false)}
                  className='bg-gray-200 text-gray-700 rounded-lg px-4 py-2 text-center hover:bg-gray-300'
                >
                  SIGN UP
                </NavLink>
              </div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;