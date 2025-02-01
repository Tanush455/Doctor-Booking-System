import { FC } from "react";
import { Doctor } from '../assets/Information';
import { useNavigate } from "react-router";

interface Props {
  item: Doctor;
}

const Docs: FC<Props> = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white h-[450px] text-black rounded-2xl border-amber-50 shadow-lg" onClick={()=>navigate(`/appointment/${item.__id}`)}>
      <img src={item.image} alt="" className="h-[330px] w-full hover:bg-amber-200 rounded-t-2xl" />
      <div className="flex flex-row gap-1 ml-2">
        <p className="rounded-full bg-green-400 w-[10px] h-[10px] mt-2"></p><p>Available</p>
      </div>
      <div className="flex flex-col ml-2">
        <p className="text-xl font-medium">{item.name}</p>
        <p className="text-sm font-semibold">{item.speciality}</p>
        <p className="text-sm font-semibold">{item.degree}</p>
        </div>
    </div>
  );
};

export default Docs;