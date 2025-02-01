import { useLocation } from "react-router"
import bg_image1 from '../assets/freepik__upload__39938.png';
import { NavLink } from "react-router";
interface useloaction {
  pathname: string,
  search: string,
  hash: string,
  state: string,
  key: string
}

export default function Login() {
  const location: useloaction = useLocation();

  return (
    <div className="relative h-screen w-full">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bg_image1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
      </div>

      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="backdrop-blur-sm bg-white/20 p-8 rounded-2xl shadow-2xl w-[400px] border border-white/20">
          <h1 className="font-bold text-3xl text-white text-center mb-8">LOG IN</h1>
          
          <form className="space-y-6">
            <div>
              <input 
                type="email" 
                placeholder="Email"
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm rounded-lg
                         border border-white/30 text-black  placeholder-black
                         focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            
            <div>
              <input 
                type="password" 
                placeholder="Password"
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm rounded-lg
                         border border-white/30 text-black placeholder-black
                         focus:outline-none focus:ring-2 focus:ring-white/50 "
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-white/30 hover:bg-white/40 transition-all
                       rounded-lg text-black font-semibold backdrop-blur-sm"
            >
              Create Account
            </button>
          </form>

          <p className="text-center mt-6 text-black">
            Already don't have an account? 
            <NavLink to='/signin' className="ml-2 text-black font-semibold hover:text-white/80">
              Sign in
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  )
}