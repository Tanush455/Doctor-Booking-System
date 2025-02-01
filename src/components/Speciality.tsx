// pages/Home.tsx (or your parent component)
import { specialities } from '../assets/Information';
import SpecialityDoc from '../components/SpecialityDoc';

interface SpecialtyItem {
  id: number;
  speciality: string;
  image: string;
}

export default function Speciality() {
  return (
    <div id="speciality" className='flex flex-col items-center gap-4 py-16 text-gray-800 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] mt-4'>
      <h1 className='text-3xl font-medium'>Find by Speciality</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Simply browse through the list of specialities and find the doctor you need.
      </p>
      <div className='flex max-w-[60%] gap-1.5'>
        {specialities.map((item: SpecialtyItem) => (
          <SpecialityDoc key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}