import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'
import profilepic from '../assets/profile_pic.png'
import dropDownIcon from '../assets/dropdown_icon.svg'
import { useState } from 'react'
import { assets } from '../assets/Information'

function NavBar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-700 '>
      <img src={assets.website_logo} alt="Logo" className='w-44 cursor-pointer pl-1.5' onClick={() => navigate('/')}/>

      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <li className='py-1'>
          <NavLink to='/'>
            HOME
          </NavLink>
          <hr className='border-none outline-none h-0.5 bg-black w-3/5 m-auto hidden' />
        </li>
        <li className='py-1'>
          <NavLink to='/doctors'>
            ALL DOCTORS
          </NavLink>
          <hr className='border-none outline-none h-0.5 bg-black w-3/5 m-auto hidden' />
        </li>
        <li className='py-1'>
          <NavLink to='/about'>
            ABOUT
          </NavLink>
          <hr className='border-none outline-none h-0.5 bg-black w-3/5 m-auto hidden' />
        </li>
        <li className='py-1'>
          <NavLink to='/contact'>
            CONTACT
          </NavLink>
          <hr className='border-none outline-none h-0.5 bg-black w-3/5 m-auto hidden' />
        </li>
      </ul>

      <div>
        {
          token ? (
            <div className='flex items-center gap-2 cursor-pointer pl-1.5 group relative'>
              <img src={profilepic} alt="Profile" className='w-8 rounded-full' />
              <img src={dropDownIcon} alt="Dropdown" className='w-2.5' onClick={() => setShowMenu(!showMenu)} />
              {showMenu && (
                <div className='absolute top-10 right-0 rounded-lg p-4 font-medium text-base'>
                  <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4'>
                    <p onClick={()=>navigate('my-profile')} className='cursor-pointer pl-2'>My profile</p>
                    <p onClick={()=>navigate('my-appointments')}className='cursor-pointer pl-2'>My appointments</p>
                    <p onClick={()=>navigate(`dashboard/:x`)}className='cursor-pointer pl-2'>DashBoard</p>
                    <p className='cursor-pointer pl-2' onClick={() => setToken(false)}>Logout</p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <ul className='flex items-center gap-5 flex-wrap sm:flex-nowrap'>
              <NavLink to='/login' className='w-[80px] h-[30px] bg-blue-300 rounded-2xl text-center pt-1 hover:bg-blue-400 hover:scale-100 transition-all duration-1000 shadow-lg shadow-cyan-500/50'>
                <button>LOGIN</button>
              </NavLink>
              <NavLink to='/signin' className='w-[80px] h-[30px] bg-blue-300 rounded-2xl text-center pt-1 hover:bg-blue-400 transition-all duration-1000 shadow-lg shadow-cyan-500/50'>
                <button>SIGNIN</button>
              </NavLink>
            </ul>
          )
        }
      </div>
    </div>
  )
}

export default NavBar;
