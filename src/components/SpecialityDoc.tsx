// components/SpecialityDoc.tsx
import { FC } from "react";
import { Link } from "react-router";

interface SpecialtyItem {
  id: number;
  speciality: string;
  image: string;
}

interface Props {
  item: SpecialtyItem; // Accept the entire item object
}

const SpecialityDoc: FC<Props> = ({ item }) => {
  return (
    <Link to={`doctors/${item.speciality}`} key={item.id} className="hover:scale-105  flex flex-col items-center text-xs cursor-pointer flex-shrink-0  hover:translate-y-[-10px] transition-all duration-500" onClick={()=> scrollTo(0,0)}>
        <img src={item.image} alt="" className="w-16 sm:w-24 mb-2" />
        <p className="mt-2">{item.speciality}</p>
    </Link>
  );
};

export default SpecialityDoc;