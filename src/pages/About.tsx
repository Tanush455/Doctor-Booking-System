import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import about_img from '../assets/about_image.png';

function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-800">
          ABOUT <span className="text-blue-600">US</span>
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16 md:mb-24">
          <img 
            src={about_img} 
            alt="Doctor and patient interacting" 
            className="w-full md:w-1/2 rounded-lg shadow-xl"
          />
          
          <div className="w-full md:w-1/2 space-y-6">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Welcome to HealthConnect, your trusted partner in accessible healthcare. 
              We're revolutionizing medical care by bridging the gap between patients 
              and doctors through our innovative online platform.
            </p>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed border-l-4 border-blue-500 pl-4">
              Our mission is to make healthcare accessible, convenient, and efficient 
              for everyone. With our easy-to-use booking system, patients can connect 
              with qualified medical professionals 24/7, reducing wait times and 
              eliminating geographical barriers.
            </p>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We offer instant appointment scheduling, a wide network of experienced 
              doctors across various specialties, and secure digital health records. 
              Our platform empowers patients to take control of their healthcare while 
              helping doctors optimize their practice management.
            </p>
          </div>
        </div>

        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-12">
            Our Core Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Patient-Centered Care
              </h3>
              <p className="text-gray-600">
                Your health and convenience are our top priority
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Medical Excellence
              </h3>
              <p className="text-gray-600">
                Verified, experienced healthcare professionals
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                Continuous improvement through technology
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default About;