import { useState, useMemo, memo } from 'react';  // Add memo to imports
import { useAppContext } from '../context/AppContext';
import {  useNavigate } from 'react-router';
import Docs from '../components/Docs';
import Marquee from "react-fast-marquee";

// Memoize the Docs component to prevent unnecessary re-renders
const MemoizedDocs = memo(Docs);

export default function TopDoctors() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const {doctors} = useAppContext();
  // Memoize marquee items to prevent re-renders on hover
  const marqueeItems = useMemo(() => 
    doctors.slice(0, 10).map((item, index) => (
      <div key={index} className="px-2 mr-4">
        <MemoizedDocs item={item}/>
      </div>
    )),
    []
  );

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10 relative">
      <h1 className="font-medium text-3xl">Top Doctors Of India</h1>
      <p className="sm:w-1/3 text-center text-sm">
        These are the most Trusted Doctors of India at your service and to cure you.
      </p>

      <div 
        className="w-full px-10 mt-20 relative overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Subtle gradient overlays */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white/30 to-transparent backdrop-blur-[1px] pointer-events-none z- rounded-2xl" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white/30 to-transparent backdrop-blur-[1px] pointer-events-none z-20 rounded-2xl" />

        <Marquee 
          speed={isHovered ? 30 : 50}
          gradient={false}
          pauseOnHover={false}
          className="transition-[speed] duration-300 " // Smooth speed transition
        >
          {marqueeItems}
        </Marquee>
      </div>


      <button className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 hover:bg-blue-100 transition-all duration-300" onClick={() => {navigate(`/doctors`), scrollTo(0,0)} }>
        View More
      </button>

    </div>
  );
}

