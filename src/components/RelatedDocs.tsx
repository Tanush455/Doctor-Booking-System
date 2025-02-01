import { FC } from "react";
import { Doctor } from "../assets/Information";

interface Props {
  doctor: Doctor;
}

const RelatedDocs: FC<Props> = ({ doctor }) => {
  return (
    <div
      key={doctor.__id}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{doctor.speciality}</p>
        <a
          href={`/appointment/${doctor.__id}`}
          className="inline-block w-full text-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          View Profile
        </a>
      </div>
    </div>
  );
};

export default RelatedDocs;
