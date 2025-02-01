import add_icon from './add_icon.svg';
import admin_logo from './admin_logo.svg';
import appointment_icon from './appointment_icon.svg';
import cancel_icon from './cancel_icon.svg';
import doctor_icon from './doctor_icon.svg';
import home_icon from './home_icon.svg';
import people_icon from './people_icon.svg';
import upload_area from './upload_area.svg';
import list_icon from './list_icon.svg';
import tick_icon from './tick_icon.svg';
import appointments_icon from './appointments_icon.svg';
import earning_icon from './earning_icon.svg';
import patients_icon from './patients_icon.svg';
import pediatrician from './Pediatricians.svg';
import Genral_physician from './General_physician.svg';
import Gynecologist from './Gynecologist.svg';
import Dermatologist from './Dermatologist.svg';
import Neurologist from './Neurologist.svg';
import Gastroenterologist from './Gastroenterologist.svg';
import appointment_img from './appointment_img.png';
import website_logo from './logo-website.png'
import verified_Icon from './verified_icon.svg'
import doc1 from './doc1.png';
import doc2 from './doc2.png';
import doc3 from './doc3.png';
import doc4 from './doc4.png';
import doc5 from './doc5.png';
import doc6 from './doc6.png';
import doc7 from './doc7.png';
import doc8 from './doc8.png';
import doc9 from './doc9.png';
import doc10 from './doc10.png';
import doc11 from './doc11.png';
import doc12 from './doc12.png';
import doc13 from './doc13.png';
import doc14 from './doc14.png';
import doc15 from './doc15.png';

// Define the asset types for the images
interface AssetType {
  [key: string]: string;
}

export const assets: AssetType = {
  add_icon,
  admin_logo,
  appointment_icon,
  cancel_icon,
  doctor_icon,
  upload_area,
  home_icon,
  patients_icon,
  people_icon,
  list_icon,
  tick_icon,
  appointments_icon,
  earning_icon,
  appointment_img,
  website_logo,
  verified_Icon,
};

// Define the type for specialities
export interface Speciality {
  id: number;
  speciality: string;
  image: string;
}

export const specialities: Speciality[] = [
  {
    id: 1,
    speciality: 'General Physician',
    image: Genral_physician,
  },
  {
    id: 2,
    speciality: 'Gynecologist',
    image: Gynecologist,
  },
  {
    id: 3,
    speciality: 'Dermatologist',
    image: Dermatologist,
  },
  {
    id: 4,
    speciality: 'Pediatrician',
    image: pediatrician,
  },
  {
    id: 5,
    speciality: 'Neurologist',
    image: Neurologist,
  },
  {
    id: 6,
    speciality: 'Gastroenterologist',
    image: Gastroenterologist,
  },
];

export interface Doctor {
  __id: string;
  name: string;
  image: string;
  speciality: string;
  degree: string;
  experience: string;
  fees: number;
  description: string; // Add this line
  address: {
    line1: string;
    line2: string;
  };
}

export const doctors: Doctor[] = [
  {
    __id: 'doc1',
    name: 'Dr. Richard James',
    image: doc1,
    speciality: 'General Physician',
    degree: 'MBBS',
    experience: '4 Years',
    fees: 50,
    description: 'A dedicated general physician with expertise in preventive healthcare and chronic disease management. Known for his patient-centered approach and excellent diagnostic skills.',
    address: {
      line1: '17th Cross, Richmond',
      line2: 'Circle, Ring Road, London',
    },
  },
  {
    __id: 'doc2',
    name: 'Dr. Susan Blake',
    image: doc2,
    speciality: 'Gynecologist',
    degree: 'MBBS, MD',
    experience: '7 Years',
    fees: 60,
    description: 'Renowned gynecologist specializing in high-risk pregnancies and minimally invasive surgeries. Advocates for women\'s health education and preventive care.',
    address: {
      line1: '25th Main Road',
      line2: 'Downtown, New York',
    },
  },
  {
    __id: 'doc3',
    name: 'Dr. John Doe',
    image: doc3,
    speciality: 'Dermatologist',
    degree: 'MBBS, DDVL',
    experience: '5 Years',
    fees: 55,
    description: 'Board-certified dermatologist with special interest in cosmetic dermatology and skin cancer prevention. Pioneered new acne treatment protocols.',
    address: {
      line1: '12th Avenue',
      line2: 'Central Park, Chicago',
    },
  },
  {
    __id: 'doc4',
    name: 'Dr. Emily Carter',
    image: doc4,
    speciality: 'Pediatrician',
    degree: 'MBBS, MD',
    experience: '8 Years',
    fees: 70,
    description: 'Pediatrician passionate about childhood nutrition and developmental disorders. Fluent in ASL for better communication with hearing-impaired patients.',
    address: {
      line1: '4th Street, Green Valley',
      line2: 'Bay Area, San Francisco',
    },
  },
  {
    __id: 'doc5',
    name: 'Dr. Michael Brown',
    image: doc5,
    speciality: 'Neurologist',
    degree: 'MBBS, DM',
    experience: '10 Years',
    fees: 90,
    description: 'Leading neurologist in movement disorders and neurodegenerative diseases. Developed innovative Parkinson\'s disease management programs.',
    address: {
      line1: 'Sunset Boulevard',
      line2: 'Beverly Hills, Los Angeles',
    },
  },
  {
    __id: 'doc6',
    name: 'Dr. Olivia Wilson',
    image: doc6,
    speciality: 'Gastroenterologist',
    degree: 'MBBS, MD',
    experience: '6 Years',
    fees: 65,
    description: 'Gastroenterologist specializing in IBD management and therapeutic endoscopy. Strong advocate for gut microbiome research.',
    address: {
      line1: 'Maple Street',
      line2: 'Downtown, Boston',
    },
  },
  {
    __id: 'doc7',
    name: 'Dr. James Anderson',
    image: doc7,
    speciality: 'General Physician',
    degree: 'MBBS',
    experience: '3 Years',
    fees: 45,
    description: 'Young general physician focused on geriatric care and polypharmacy management. Known for thorough medication reviews.',
    address: {
      line1: 'Kingsway Road',
      line2: 'Central District, Toronto',
    },
  },
  {
    __id: 'doc8',
    name: 'Dr. Sophia Harris',
    image: doc8,
    speciality: 'Dermatologist',
    degree: 'MBBS, DDVL',
    experience: '9 Years',
    fees: 85,
    description: 'Award-winning dermatologist with expertise in ethnic skin care and laser therapies. Regular contributor to dermatology journals.',
    address: {
      line1: 'Baker Street',
      line2: 'Downtown, Sydney',
    },
  },
  {
    __id: 'doc9',
    name: 'Dr. Thomas Lee',
    image: doc9,
    speciality: 'General Physician',
    degree: 'MBBS',
    experience: '2 Years',
    fees: 40,
    description: 'General physician specializing in travel medicine and tropical diseases. Provides comprehensive pre-travel health consultations.',
    address: {
      line1: 'Elm Street',
      line2: 'Downtown, Seattle',
    },
  },
  {
    __id: 'doc10',
    name: 'Dr. Clara Smith',
    image: doc10,
    speciality: 'Gynecologist',
    degree: 'MBBS, MD',
    experience: '12 Years',
    fees: 95,
    description: 'Senior gynecologist with expertise in fertility preservation and adolescent gynecology. Developed teen health education programs.',
    address: {
      line1: 'Highland Road',
      line2: 'Uptown, Miami',
    },
  },
  {
    __id: 'doc11',
    name: 'Dr. David Adams',
    image: doc11,
    speciality: 'Neurologist',
    degree: 'MBBS, DM',
    experience: '15 Years',
    fees: 120,
    description: 'Neuroimmunology specialist focusing on multiple sclerosis and novel treatment approaches. Principal investigator in clinical trials.',
    address: {
      line1: 'Riverside Drive',
      line2: 'North Shore, Vancouver',
    },
  },
  {
    __id: 'doc12',
    name: 'Dr. Karen White',
    image: doc12,
    speciality: 'Pediatrician',
    degree: 'MBBS, MD',
    experience: '11 Years',
    fees: 80,
    description: 'Pediatric allergist and immunology expert. Created school-based asthma management programs.',
    address: {
      line1: 'Lakeview Street',
      line2: 'West End, Houston',
    },
  },
  {
    __id: 'doc13',
    name: 'Dr. Steven Clark',
    image: doc13,
    speciality: 'Dermatologist',
    degree: 'MBBS, DDVL',
    experience: '7 Years',
    fees: 75,
    description: 'Dermatopathologist specializing in rare skin disorders. Dual-certified in clinical and molecular dermatology.',
    address: {
      line1: 'Hilltop Road',
      line2: 'East Side, Austin',
    },
  },
  {
    __id: 'doc14',
    name: 'Dr. Lily Johnson',
    image: doc14,
    speciality: 'Gastroenterologist',
    degree: 'MBBS, MD',
    experience: '10 Years',
    fees: 90,
    description: 'Hepatology specialist focusing on NAFLD and viral hepatitis. Performs advanced endoscopic procedures.',
    address: {
      line1: 'Sunrise Boulevard',
      line2: 'South Zone, Denver',
    },
  },
  {
    __id: 'doc15',
    name: 'Dr. Andrew Scott',
    image: doc15,
    speciality: 'General Physician',
    degree: 'MBBS',
    experience: '6 Years',
    fees: 50,
    description: 'Sports medicine physician and team doctor for national athletes. Expertise in musculoskeletal injuries.',
    address: {
      line1: 'Main Avenue',
      line2: 'Central City, Melbourne',
    },
  },
];
