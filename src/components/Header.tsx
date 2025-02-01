import groupPhoto from '../assets/group_profiles.png';
import arrow from '../assets/arrow_icon.svg';
import headerimg from '../assets/header_img.png';

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-blue-400 rounded-lg px-6 md:px-10 lg:px-20 shadow-lg shadow-cyan-500/50 ">
      {/* ------Left side-------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight md:leading-tight lg:leading-tight">
          Book Appointment <br /> with Trusted Doctors
        </p>
        <div className="flex flex-col gap-4 md:flex-row items-center text-white">
          <img src={groupPhoto} alt="Group of doctors" className="w-32 h-auto" />
          <p className="text-sm">
          
Browse through our comprehensive directory of highly trusted and experienced doctors across various specialties. With detailed profiles, ratings, and patient reviews, finding the right healthcare professional for your needs has never been easier. Schedule your appointments effortlessly, enjoy a seamless booking process, and prioritize your health without any hassles. Let us help you take the first step toward quality care and well-being.
            
          </p>
        </div>
        <a href='#speciality'  className="flex items-center gap-2 text-blue-900 font-semibold w-[220px] h-[50px] rounded-full bg-white py-2 px-4 ">
          BOOK APPOINTMENT
          <img src={arrow} alt="Arrow icon" className="w-4 h-4" />
        </a>
      </div>
      {/* ------Right side ------ */}
      <div className="md:w-1/2 relative py-24 top-1 sm:w">
        <img src={headerimg} alt="Header Illustration" className="w-full md:absolute  h-auto rounded-lg" />
      </div>
    </div>
  );
}

