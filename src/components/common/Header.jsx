import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-primary-1 px-4 sm:px-16 py-3">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <span className="text-white-1 text-sm sm:text-base font-inter">
              Caring Today for a Healthier Tomorrow and Forever
            </span>
            <span className="text-white-1 text-sm sm:text-base font-medium font-inter">
              Find A Doctor
            </span>
          </div>
          <img src="/images/img_image.svg" alt="icon" className="w-4 h-2.5" />
        </div>
      </div>

      {/* Main Header */}
      <div className="px-4 sm:px-16 py-4 sm:py-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0">
          {/* Logo */}
          <img 
            src="/images/img_header_logo.png" 
            alt="Aarogya Logo" 
            className="w-24 sm:w-32 h-auto"
          />

          {/* Contact Info - Hidden on mobile */}
          <div className="hidden lg:flex justify-between items-center w-full lg:w-3/5 gap-8">
            {/* Emergency Line */}
            <div className="flex items-center gap-4">
              <div className="bg-secondary-1 rounded-full p-3.5">
                <img src="/images/img_div_contact_icon.svg" alt="emergency" className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-secondary-1 text-sm font-inter">Emergency Line</span>
                <span className="text-primary-1 text-sm font-semibold font-poppins">+91 9876543212</span>
              </div>
            </div>

            {/* Support Email */}
            <div className="flex items-center gap-4">
              <div className="bg-secondary-1 rounded-full p-3.5">
                <img src="/images/img_div_contact_icon_black_900.svg" alt="email" className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-secondary-1 text-sm font-inter">Support Email</span>
                <span className="text-primary-1 text-sm font-semibold font-poppins">support@aarogya.com</span>
              </div>
            </div>

            {/* Visit Us */}
            <div className="flex items-center gap-4">
              <div className="bg-secondary-1 rounded-full p-3.5">
                <img src="/images/img_div_contact_icon_white_a700.svg" alt="location" className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-secondary-1 text-sm font-inter">Visit Us On</span>
                <span className="text-primary-1 text-base font-semibold font-poppins">Innov8 Orchid Center India, 122001</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className="block w-5 h-0.5 bg-primary-1 mb-1"></span>
              <span className="block w-5 h-0.5 bg-primary-1 mb-1"></span>
              <span className="block w-5 h-0.5 bg-primary-1"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-primary-1/15 px-4 sm:px-16">
        <div className={`${menuOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-4 lg:py-6 gap-4 lg:gap-0">
            {/* Navigation Menu */}
            <nav className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-9">
              {/* Home with Dropdown */}
              <div className="flex items-center gap-1">
                <span className="text-primary-1 text-sm font-semibold font-poppins capitalize">Home</span>
                <img src="/images/img_svg.svg" alt="dropdown" className="w-3 h-3" />
              </div>

              {/* About */}
              <span className="text-primary-1 text-sm font-semibold font-poppins capitalize">About</span>

              {/* Pages with Dropdown */}
              <div className="flex items-center gap-1">
                <span className="text-primary-1 text-sm font-semibold font-poppins capitalize">Pages</span>
                <img src="/images/img_svg.svg" alt="dropdown" className="w-3 h-3" />
              </div>

              {/* Doctors with Dropdown */}
              <div className="flex items-center gap-1">
                <span className="text-primary-1 text-sm font-semibold font-poppins capitalize">Doctors</span>
                <img src="/images/img_svg.svg" alt="dropdown" className="w-3 h-3" />
              </div>

              {/* Hospitals with Dropdown - Active */}
              <div className="flex items-center gap-1">
                <span className="text-accent-1 text-sm font-semibold font-poppins capitalize">Hospitals</span>
                <img src="/images/img_svg_green_a400.svg" alt="dropdown" className="w-3 h-3" />
              </div>

              {/* Blog with Dropdown */}
              <div className="flex items-center gap-1">
                <span className="text-primary-1 text-sm font-semibold font-poppins capitalize">Blog</span>
                <img src="/images/img_svg.svg" alt="dropdown" className="w-3 h-3" />
              </div>

              {/* Contact */}
              <span className="text-primary-1 text-sm font-semibold font-poppins capitalize">Contact</span>
            </nav>

            {/* Right Side Actions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              {/* Login/Register */}
              <div className="flex items-center gap-1">
                <img src="/images/img_svg_gray_900.svg" alt="user" className="w-5 h-5" />
                <span className="text-primary-1 text-sm font-semibold font-poppins">Login/Register</span>
              </div>

              {/* Appointment Button */}
              <Button 
                variant="primary"
                className="bg-primary-accent text-white-1 text-sm font-semibold font-poppins px-6 py-4 rounded-lg flex items-center gap-1"
              >
                Make An Appointment
                <img src="/images/img_image.svg" alt="arrow" className="w-4 h-3 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;