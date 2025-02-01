import { assets } from "../assets/Information";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-500 text-white pt-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          
          {/* Left Section - Brand Info */}
          <div className="w-full md:w-1/4">
            <img 
              src={assets.website_logo} 
              alt="Medical Logo" 
              className="w-40 mb-6 hover:scale-105 transition-transform duration-300"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner in healthcare. We are committed to providing exceptional 
              medical services with compassion and cutting-edge technology.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="hover:text-blue-300 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              {/* Add other social icons similarly */}
            </div>
          </div>

          {/* Center Sections - Quick Links */}
          <div className="w-full md:w-1/2 flex justify-around">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 border-b-2 border-blue-300 pb-2">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {['About Us', 'Our Services', 'Doctors', 'Testimonials', 'Blog'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 border-b-2 border-blue-300 pb-2">
                Services
              </h3>
              <ul className="space-y-3">
                {['Emergency Care', 'Online Consultation', 'Medical Checkup', 'Dental Care', 'Surgery'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-blue-300 pb-2">
              Contact Us
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 9327969395</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@medicare.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Medicare Pvt. Ltd. Located at 4rd Block, 451, 1st Cross Road, Gala-Gymkhana , South Bopal 4 Block, Ahemdabad, Gujarat 358005 </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-blue-800 py-6 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Medicare. All rights reserved. | 
            <a href="#" className="hover:text-blue-300 ml-2 transition-colors duration-300">
              Privacy Policy
            </a> | 
            <a href="#" className="hover:text-blue-300 ml-2 transition-colors duration-300">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer