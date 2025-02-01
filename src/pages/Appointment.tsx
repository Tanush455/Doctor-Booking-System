import { useAppContext } from "../context/AppContext";
import { Doctor as BaseDoctor } from "../assets/Information";
import { useParams } from "react-router";
import info_icon from '../assets/info_icon.svg'
import verified from '../assets/verified_icon.svg';
import { useEffect, useState, useCallback } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import RelatedDocs from "../components/RelatedDocs";

interface TimeSlot {
  date: Date;
  time: string;
  isBooked: boolean;
  isoString: string;
  isPast: boolean;
}

interface Doctor extends BaseDoctor {
  bookedSlots?: string[];
}

function Appointment() {
  const { docId } = useParams<{ docId: string }>();
  const { doctors, currencySymbol } = useAppContext();
  const [docInfo, setDocInfo] = useState<Doctor | null>(null);
  const [docSlots, setDocSlots] = useState<TimeSlot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  // Update current date every minute to handle day changes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const generateTimeSlots = useCallback((startDate: Date) => {
    const slots: TimeSlot[] = [];
    const startHour = 8;
    const endHour = 14;
    const now = new Date();

    for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + dayOffset);
      currentDate.setHours(0, 0, 0, 0);

      for (let hour = startHour; hour < endHour; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
          const slotDate = new Date(currentDate);
          slotDate.setHours(hour, minute, 0, 0);
          
          const isoString = slotDate.toISOString();
          const isPast = slotDate < now;
          const isBooked = docInfo?.bookedSlots?.includes(isoString) || false;

          slots.push({
            date: slotDate,
            time: slotDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isBooked,
            isoString,
            isPast
          });
        }
      }
    }
    return slots;
  }, [docInfo?.bookedSlots]);

  const getAvailableSlots = useCallback(() => {
    if (!docInfo) return;
    const slots = generateTimeSlots(currentDate);
    console.log(slots);
    setDocSlots(slots);
  }, [docInfo, generateTimeSlots, currentDate]);

  useEffect(() => {
    if (docId && doctors.length > 0) {
      const foundDoctor = doctors.find((doc) => doc.__id === docId) || null;
      setDocInfo(foundDoctor);
    }
  }, [docId, doctors]);

  useEffect(() => {
    getAvailableSlots();
  }, [getAvailableSlots]);

  const handleBookAppointment = () => {
    if (!selectedSlot || !docInfo) return;

    // Simulate API call
    setDocInfo({
      ...docInfo,
      bookedSlots: [...(docInfo.bookedSlots || []), selectedSlot]
    });

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setSelectedSlot(null);
  };

  // Group slots by day
  const slotsByDay = docSlots.reduce((acc: Record<string, TimeSlot[]>, slot) => {
    if (slot.isPast || slot.isBooked) return acc;
    
    const day = slot.date.toLocaleDateString([], { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    });
    
    if (!acc[day]) acc[day] = [];
    acc[day].push(slot);
    return acc;
  }, {});

  // Get related doctors
  const relatedDoctors = docInfo 
    ? doctors.filter(
        doc => doc.speciality === docInfo.speciality && doc.__id !== docInfo.__id
      )
    : [];

  if (!docInfo) {
    return <Spinner />;
  }

  return (
    <div>
      <NavBar/>
      <div className="min-h-screen flex flex-col bg-gray-50">
      
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg animate-slide-in">
          Appointment booked successfully!
        </div>
      )}

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Doctor Details Section */}
          <div className="lg:w-1/3 xl:w-1/4">
            <img 
              src={docInfo.image} 
              alt={docInfo.name} 
              className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div className="flex-1 bg-white rounded-2xl shadow-lg p-8">
            {/* Doctor Info */}
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-3xl font-bold text-gray-800">
                {docInfo.name}
              </h1>
              <img 
                src={verified} 
                alt="Verified" 
                className="w-6 h-6 text-blue-500"
              />
            </div>

            <div className="mb-6">
              <p className="text-lg text-gray-600 font-medium mb-2">
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <span className="inline-block bg-blue-100 text-blue-800 text-sm px-4 py-1 rounded-full">
                {docInfo.experience} of experience
              </span>
            </div>

            <div className="border-t pt-6">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-xl font-semibold text-gray-800">About</h2>
                <img 
                  src={info_icon} 
                  alt="Information" 
                  className="w-5 h-5 text-gray-500"
                />
              </div>
              <p className="text-gray-600 leading-relaxed">
                {docInfo.description}
              </p>
            </div>

            <div className="mt-8 border-t pt-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Available Time Slots
              </h2>
              
              {Object.entries(slotsByDay).length === 0 ? (
                <p className="text-gray-500 text-center py-4">
                  No available slots for the next 7 days
                </p>
              ) : (
                Object.entries(slotsByDay).map(([day, slots]) => (
                  <div key={day} className="mb-8">
                    <h3 className="text-lg font-medium text-gray-700 mb-4">
                      {day}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {slots.map((slot) => (
                        <button
                          key={slot.isoString}
                          onClick={() => setSelectedSlot(slot.isoString)}
                          className={`p-3 text-sm rounded-lg transition-all ${
                            selectedSlot === slot.isoString
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                          }`}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  </div>
                ))
              )}

              <button
                onClick={handleBookAppointment}
                disabled={!selectedSlot}
                className={`mt-6 w-full py-3 rounded-lg font-medium transition-colors ${
                  selectedSlot
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Related Doctors Section */}
        {relatedDoctors.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Other {docInfo.speciality} Specialists
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedDoctors.slice(0,5).map((doctor) => (
                <RelatedDocs doctor={doctor} key={doctor.__id}/>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer/>
    </div>
    </div>
  );
}

export default Appointment;