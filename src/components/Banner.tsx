import { useNavigate } from "react-router";
import { assets } from "../assets/Information";

// Add this CSS to your global stylesheet or component
// @keyframes float {
//   0% { transform: translateY(0px) rotate(3deg); }
//   50% { transform: translateY(-20px) rotate(-3deg); }
//   100% { transform: translateY(0px) rotate(3deg); }
// }
// .animate-float { animation: float 4s ease-in-out infinite; }

function Banner() {
    const navigate = useNavigate();
  return (
    <div className="flex bg-blue-400 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 overflow-visible relative">
        {/* Left side */}
        <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 z-10">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
                <p>Book Appointment</p>
                <p className="mt-4">with 100+ Trusted Doctors</p>
            </div>
            <button className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all duration-700" onClick={() => {navigate(`/login`);scrollTo(0,0)}}>
                Create Account
            </button>
        </div>

        {/* Right side - Doctor image */}
        <div className="hidden md:block md:w-1/2 lg:w-[500px] absolute -right-10 lg:-right-20 top-1/2 -translate-y-1/2 pb-14">
            <img 
                src={assets.appointment_img} 
                alt="Doctor" 
                className="w-full max-w-[400px] lg:max-w-[400px] animate-float"
            />
        </div>
    </div>
  )
}

export default Banner;