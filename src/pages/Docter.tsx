import { useNavigate, useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useAppContext } from "../context/AppContext";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import DoctorsList from "../components/DoctorsList";
import { assets, Doctor } from "../assets/Information";
import Hamburger from 'hamburger-react';

interface AppContextType {
  doctors: Doctor[];
}

function DoctorList() {
  const { speciality } = useParams();
  const [filteredDocs, setFilteredDocs] = useState<Doctor[]>([]);
  const [isOpen, setOpen] = useState(false);
  const { doctors } = useAppContext();

  const specialities: string[] = [
    "General Physician",
    "Gynecologist",
    "Dermatologist",
    "Neurologist",
    "Gastroenterologist",
    "Pediatrician",
  ];

  useEffect(() => {
    if (speciality) {
      const filtered = doctors.filter(
        (doc) => doc.speciality.toLowerCase() === speciality.toLowerCase()
      );
      setFilteredDocs(filtered);
    } else {
      setFilteredDocs(doctors);
    }
  }, [speciality, doctors]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Browse Doctors by Specialization
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Menu Toggle */}
          <div className="md:hidden mb-4">
            <button
              className="p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setOpen(!isOpen)}
              aria-label="Toggle specializations menu"
            >
              <Hamburger 
                toggled={isOpen} 
                toggle={setOpen} 
                size={24}
                label="Show menu"
                rounded
              />
            </button>
          </div>

          {/* Specialities Navigation - Desktop */}
          <div className="hidden md:block w-full md:w-64 space-y-2">
            <h2 className="font-semibold mb-4 text-lg">Specializations</h2>
            {specialities.map((spec, index) => (
              <Link
                key={index}
                to={`/doctors/${spec.toLowerCase()}`}
                className={`block p-3 rounded-lg hover:bg-blue-50 transition-colors ${
                  spec.toLowerCase() === speciality?.toLowerCase()
                    ? "bg-blue-100 font-medium"
                    : "bg-gray-50"
                }`}
              >
                {spec}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden absolute top-28 left-0 w-full bg-white shadow-lg z-50 p-4">
              <h2 className="font-semibold mb-4 text-lg">Specializations</h2>
              <div className="space-y-2">
                {specialities.map((spec, index) => (
                  <Link
                    key={index}
                    to={`/doctors/${spec.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className={`block p-3 rounded-lg hover:bg-blue-50 transition-colors ${
                      spec.toLowerCase() === speciality?.toLowerCase()
                        ? "bg-blue-100 font-medium"
                        : "bg-gray-50"
                    }`}
                  >
                    {spec}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Doctors Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocs.map((item, index) => (
                <DoctorsList item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default DoctorList;