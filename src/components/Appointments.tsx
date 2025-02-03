import { FC } from "react";
import { Doctor } from "../assets/Information";

interface Props {
    doctor: Doctor;
}

const Appointments: FC<Props> = ({ doctor :doctor}) => {
    return (
        <div className="flex flex-row md:flex-row items-start gap-6 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Doctor Image */}
            <div className="w-full md:w-40 h-40 rounded-lg overflow-hidden ">
                <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover "
                />
            </div>

            {/* Doctor Details */}
            <div className="flex-1 w-full space-y-3">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">{doctor.name}</h2>
                    <p className="text-lg text-blue-600 font-medium">{doctor.speciality}</p>
                </div>

                <div className="space-y-1">
                    <p className="font-semibold text-gray-700">Address</p>
                    <p className="text-gray-600">{doctor.address.line1}</p>
                    <p className="text-gray-600">{doctor.address.line2}</p>
                </div>

                <p className="text-gray-700">
                    <span className="font-semibold">Date & Time:</span> 25, July 2025
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button className="px-6 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors duration-200">
                        Make Payment
                    </button>
                    <button className="px-6 py-2 border border-red-500 text-red-500 rounded-lg font-medium hover:bg-red-50 transition-colors duration-200">
                        Cancel Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Appointments;