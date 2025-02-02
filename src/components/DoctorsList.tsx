import { FC } from "react";
import { useNavigate } from "react-router-dom"; // Fixed import
import { Doctor } from "../assets/Information";

interface Props {
  item: Doctor;
}

const DoctorsList: FC<Props> = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/appointment/${item.__id}`)} 
      className="cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover rounded-t-lg bg-blue-50"
      />
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm text-green-600">Available</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
        <p className="text-gray-600 text-sm">{item.speciality}</p>
      </div>
    </div>
  );
};

export default DoctorsList;
