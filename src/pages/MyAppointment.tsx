import Footer from "../components/Footer";
import { useAppContext } from "../context/AppContext";
import Appointments from "../components/Appointments";
import NavBar from "../components/NavBar";

function MyAppointment() {
  const { doctors } = useAppContext();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar/>
      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          My Appointments
        </h1>
        
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {doctors.slice(0, 3).map((doctor, index) => (
            <Appointments key={index} doctor={doctor} />
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default MyAppointment;