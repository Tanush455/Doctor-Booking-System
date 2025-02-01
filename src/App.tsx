import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home';
import Login from './pages/Login';
import Docter from './pages/Docter';
import About from './pages/About';
import Contact from './pages/Contact';
import MyProfile from './pages/My-Profile';
import MyAppointment from './pages/MyAppointment';
import Appointment from './pages/Appointment';

import Signin from './pages/Signin';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className='mx-4 sm:mx-[10%]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Docter />} />
            <Route path="/doctors/:speciality" element={<Docter />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/my-appointments" element={<MyAppointment />} />
            <Route path="/appointment/:docId" element={<Appointment/>} />
          </Routes>
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>

      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
