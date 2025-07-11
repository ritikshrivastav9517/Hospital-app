import React, { useState } from 'react';
import Header from '../../components/common/Header';
import BreadCrumb from '../../components/ui/BreadCrumb';
import EditText from '../../components/ui/EditText';
import Dropdown from '../../components/ui/Dropdown';
import ChipView from '../../components/ui/ChipView';
import Button from '../../components/ui/Button';
import Slider from '../../components/ui/Slider';
import Pagination from '../../components/ui/Pagination';

const HospitalSearch = () => {
  const [searchName, setSearchName] = useState('');
  const [selectedTreatment, setSelectedTreatment] = useState('');
  const [selectedFacility, setSelectedFacility] = useState('');
  const [locationSearch, setLocationSearch] = useState('');
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackEmail, setCallbackEmail] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const treatmentOptions = [
    { label: 'Family Medicine', value: 'family-medicine' },
    { label: 'Neurosurgery', value: 'neurosurgery' },
    { label: 'Dentist', value: 'dentist' },
    { label: 'Pediatrics', value: 'pediatrics' },
    { label: 'Chief Surgeon', value: 'chief-surgeon' },
    { label: 'Cardiologist', value: 'cardiologist' },
  ];

  const facilityOptions = [
    { label: 'Emergency Care', value: 'emergency-care' },
    { label: 'ICU', value: 'icu' },
    { label: 'Surgery Center', value: 'surgery-center' },
    { label: 'Diagnostic Center', value: 'diagnostic-center' },
    { label: 'Pharmacy', value: 'pharmacy' },
  ];

  const chipItems = [
    'Family Medicine',
    'Neurosurgery', 
    'Dentist',
    'Pediatrics',
    'Chief Surgeon',
    'Cardiologist',
    'Dermatologist',
    'Neurologist'
  ];

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Hospital Search' }
  ];

  const hospitals = [
    {
      id: 1,
      name: 'Elite Urology Specialists',
      location: 'Gurugram Harayana, INDIA',
      rating: '1k+ Rating',
      doctors: '60 Doctors',
      image: '/images/img_image_round_10.png',
      type: 'Hospital'
    },
    {
      id: 2,
      name: 'Rejuvenate Wellness Center',
      location: 'Noida, UP, INDIA',
      rating: '3k+ Rating',
      doctors: '34 Doctors',
      image: '/images/img_image_round_10_246x280.png',
      type: 'Hospital'
    },
    {
      id: 3,
      name: 'Precision Pain Management',
      location: 'Delhi, INDIA',
      rating: '2k+ Rating',
      doctors: '30 Doctors',
      image: '/images/img_image_round_10_1.png',
      type: 'Hospital'
    },
    {
      id: 4,
      name: 'Wellness Path Chiropractor',
      location: 'Gurugram Harayana, INDIA',
      rating: '4k+ Rating',
      doctors: '80 Doctors',
      image: '/images/img_image_round_10_2.png',
      type: 'Hospital'
    },
    {
      id: 5,
      name: 'Future Care Medical Center',
      location: 'Noida, UP, INDIA',
      rating: '5k+ Rating',
      doctors: '50 Doctors',
      image: '/images/img_image_round_10_3.png',
      type: 'Hospital'
    },
    {
      id: 6,
      name: 'Quantum Care Hospital',
      location: 'Gurugram Harayana, INDIA',
      rating: '3k+ Rating',
      doctors: '45 Doctors',
      image: '/images/img_image_round_10_4.png',
      type: 'Hospital'
    }
  ];

  const HospitalCard = ({ hospital }) => (
    <div className="bg-secondary-1 rounded-2xl p-3.5 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col lg:flex-row gap-5">
        {/* Hospital Image */}
        <div className="relative w-full lg:w-[280px] h-[246px] flex-shrink-0">
          <img 
            src={hospital.image} 
            alt={hospital.name}
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Action Buttons */}
          <div className="absolute top-5 left-5 flex gap-2.5">
            <button className="bg-secondary-1 rounded-md p-2.5 shadow-sm hover:shadow-md transition-shadow">
              <img src="/images/img_span_d_flex.svg" alt="share" className="w-5 h-5" />
            </button>
            <button className="bg-secondary-1 rounded-md p-2.5 shadow-sm hover:shadow-md transition-shadow">
              <img src="/images/img_button_add_to_wishlist.svg" alt="wishlist" className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Hospital Info */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <span className="bg-primary-accent text-white-1 text-base font-medium font-inter px-3.5 py-1 rounded-md">
              {hospital.type}
            </span>
            <div className="flex items-center gap-2">
              <img src="/images/img_svg_amber_700.svg" alt="rating" className="w-5 h-5" />
              <span className="text-secondary-1 text-base font-inter">{hospital.rating}</span>
            </div>
          </div>

          {/* Hospital Details */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-primary-1 text-xl font-semibold font-poppins leading-8">
              {hospital.name}
            </h3>
            <div className="flex items-center gap-2">
              <img src="/images/img_image_position_absolute.svg" alt="location" className="w-4 h-4" />
              <span className="text-secondary-1 text-base font-inter">{hospital.location}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Button 
              variant="secondary"
              className="bg-secondary-light text-blue-1 text-sm font-semibold font-poppins px-6 py-4 rounded-lg flex items-center gap-1.5"
            >
              Book Today
              <img src="/images/img_image_transition.svg" alt="arrow" className="w-4 h-3" />
            </Button>
            <div className="flex items-center gap-2">
              <img src="/images/img_image_position_absolute_gray_900.svg" alt="doctors" className="w-4 h-4" />
              <span className="text-secondary-1 text-base font-inter">{hospital.doctors}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-secondary-1">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-main-1 px-2.5 py-5">
        <div className="relative bg-primary-alpha rounded-2xl px-4 sm:px-10 py-14 sm:py-16 mb-5">
          {/* Background Decorations */}
          <img 
            src="/images/img_image_br_shape_two.png" 
            alt="decoration" 
            className="absolute top-14 right-8 w-16 sm:w-20 h-16 sm:h-20"
          />
          <img 
            src="/images/img_image_br_shape_one.png" 
            alt="decoration" 
            className="absolute bottom-0 left-8 w-20 sm:w-28 h-20 sm:h-24"
          />
          
          {/* Content */}
          <div className="relative z-10 text-center">
            <h1 className="text-white-1 text-2xl sm:text-3xl lg:text-4xl font-semibold font-poppins leading-tight mb-4">
              Hospital Search
            </h1>
            <BreadCrumb items={breadcrumbItems} className="justify-center" />
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="relative w-full max-w-[1326px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="bg-secondary-1 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg">
          {/* Search Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Name Field */}
            <div className="flex flex-col gap-3">
              <label className="text-primary-1 text-base font-medium font-inter">Name</label>
              <EditText
                placeholder="Type A Name"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
              />
            </div>

            {/* Treatment Dropdown */}
            <div className="flex flex-col gap-3">
              <label className="text-primary-1 text-base font-medium font-inter">Treatment</label>
              <Dropdown
                placeholder="Select Treatment"
                options={treatmentOptions}
                value={selectedTreatment}
                onChange={(option) => setSelectedTreatment(option.value)}
                rightImage={{ src: "/images/img_arrowdown.svg", width: 10, height: 8 }}
              />
            </div>

            {/* Facility Dropdown */}
            <div className="flex flex-col gap-2.5">
              <label className="text-primary-1 text-base font-medium font-inter">Facility</label>
              <Dropdown
                placeholder="Select Facility"
                options={facilityOptions}
                value={selectedFacility}
                onChange={(option) => setSelectedFacility(option.value)}
                rightImage={{ src: "/images/img_arrowdown.svg", width: 10, height: 8 }}
              />
            </div>

            {/* Location Field */}
            <div className="flex flex-col gap-3">
              <label className="text-primary-1 text-base font-medium font-inter">Location</label>
              <EditText
                placeholder="Type City Name"
                value={locationSearch}
                onChange={(e) => setLocationSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Chip Filters and Search Button */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
            <ChipView 
              items={chipItems}
              selectedItems={[0]}
              className="flex-1"
            />
            <Button 
              variant="primary"
              className="bg-primary-accent text-white-1 text-sm font-semibold font-poppins px-6 py-4 rounded-lg flex items-center gap-1.5 w-full lg:w-auto"
            >
              Search Now
              <img src="/images/img_image.svg" alt="arrow" className="w-4 h-3" />
            </Button>
          </div>
        </div>

        {/* Hospital Results */}
        <div className="mt-16 sm:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {hospitals.slice(0, 4).map((hospital) => (
              <HospitalCard key={hospital.id} hospital={hospital} />
            ))}
          </div>

          {/* Callback Form */}
          <div className="bg-secondary-1 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg mb-12">
            <h2 className="text-primary-1 text-xl font-semibold font-poppins mb-8 text-center lg:text-left">
              Can not find what you are looking for?
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
              {/* Name Field */}
              <div className="flex flex-col gap-3">
                <label className="text-primary-1 text-base font-medium font-inter">Name</label>
                <EditText
                  placeholder="Type A Name"
                  value={callbackName}
                  onChange={(e) => setCallbackName(e.target.value)}
                />
              </div>

              {/* Phone Field */}
              <div className="flex flex-col gap-3">
                <label className="text-primary-1 text-base font-medium font-inter">Phone Number</label>
                <EditText
                  placeholder="Type A Phone Number"
                  value={callbackPhone}
                  onChange={(e) => setCallbackPhone(e.target.value)}
                />
              </div>

              {/* Email and Button */}
              <div className="flex flex-col gap-3">
                <label className="text-primary-1 text-base font-medium font-inter">Email (Optional)</label>
                <div className="flex gap-6">
                  <EditText
                    placeholder="Type Email"
                    value={callbackEmail}
                    onChange={(e) => setCallbackEmail(e.target.value)}
                    className="flex-1"
                  />
                  <Button 
                    variant="primary"
                    className="bg-primary-1 text-white-1 text-sm font-semibold font-poppins px-6 py-4 rounded-lg flex items-center gap-2 whitespace-nowrap"
                  >
                    Request Callback
                    <img src="/images/img_image.svg" alt="arrow" className="w-4 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Hospital Slider */}
          <Slider className="mb-12">
            {hospitals.slice(4).map((hospital) => (
              <HospitalCard key={hospital.id} hospital={hospital} />
            ))}
          </Slider>

          {/* Pagination */}
          <Pagination 
            currentPage={currentPage}
            totalPages={3}
            onPageChange={setCurrentPage}
            className="mb-16"
          />

          {/* Trusted Companies */}
          <div className="bg-main-1 rounded-2xl p-8 sm:p-12 lg:p-16">
            <div className="text-center mb-12">
              <h2 className="text-primary-1 text-lg font-semibold font-poppins">
                <span>TRUSTED BY MORE THAN </span>
                <span className="text-blue-1">100+</span>
                <span> COMPANIES WORLDWIDE</span>
              </h2>
            </div>
            
            {/* Company Logos */}
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16">
              <div className="flex items-center gap-2">
                <img src="/images/img_clip_path_group_black_900.svg" alt="company" className="w-6 h-6" />
                <img src="/images/img_vector_gray_700_01.svg" alt="company name" className="h-4" />
              </div>
              <div className="flex items-center gap-2">
                <img src="/images/img_clip_path_group_black_900_34x52.svg" alt="company" className="w-8 h-8" />
                <img src="/images/img_vector_gray_700_01_16x86.svg" alt="company name" className="h-4" />
              </div>
              <img src="/images/img_image_d_block.svg" alt="company" className="h-10" />
              <div className="flex items-center gap-2">
                <img src="/images/img_clip_path_group_black_900_40x40.svg" alt="company" className="w-8 h-8" />
                <img src="/images/img_vector_gray_700_01_14x76.svg" alt="company name" className="h-4" />
              </div>
              <div className="flex items-center gap-2">
                <img src="/images/img_clip_path_group_black_900_34x54.svg" alt="company" className="w-8 h-8" />
                <img src="/images/img_vector_gray_700_01_14x64.svg" alt="company name" className="h-4" />
              </div>
              <div className="flex items-center gap-2">
                <img src="/images/img_clip_path_group.svg" alt="company" className="w-6 h-6" />
                <img src="/images/img_vector.svg" alt="company name" className="h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary-1 rounded-t-2xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Cards */}
        <div className="max-w-[1326px] mx-auto mb-16">
          <div className="bg-secondary-pink rounded-2xl p-8 sm:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Emergency Line */}
              <div className="flex items-center gap-5">
                <div className="bg-blue-1 rounded-full p-3.5">
                  <img src="/images/img_div_contact_icon_black_900_50x50.svg" alt="emergency" className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-primary-1 text-base font-inter">Emergency Line</span>
                  <span className="text-primary-1 text-base font-semibold font-poppins">+91 9876543212</span>
                </div>
              </div>

              {/* Support Email */}
              <div className="flex items-center gap-5">
                <div className="bg-blue-1 rounded-full p-3.5">
                  <img src="/images/img_div_contact_icon_50x50.svg" alt="email" className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-primary-1 text-base font-inter">Support Email</span>
                  <span className="text-primary-1 text-base font-semibold font-poppins">support@aarogya.com</span>
                </div>
              </div>

              {/* Visit Us */}
              <div className="flex items-center gap-5">
                <div className="bg-blue-1 rounded-full p-3.5">
                  <img src="/images/img_div_contact_icon_1.svg" alt="location" className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-primary-1 text-base font-inter">Visit Us On</span>
                  <span className="text-primary-1 text-base font-semibold font-poppins">Innov8 Orchid Center India, 122001</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="max-w-[1326px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="flex flex-col gap-6">
              <img src="/images/img_pi7_logo_1_02_1.png" alt="Aarogya Logo" className="w-48 h-auto" />
              <div className="flex flex-col gap-1">
                <p className="text-white-1 text-base font-inter">We strive to create a welcoming</p>
                <p className="text-white-1 text-base font-inter">environment where patients feel</p>
                <p className="text-white-1 text-base font-inter">valued respected and well informed</p>
                <p className="text-white-1 text-base font-inter">about their health</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white-1 text-base font-inter">Follow Us:</span>
                <div className="flex gap-2">
                  <button className="bg-overlay-1 border border-white-1/45 rounded-full p-2.5">
                    <img src="/images/img_link_d_flex.svg" alt="social" className="w-4 h-4" />
                  </button>
                  <button className="bg-overlay-1 border border-white-1/45 rounded-full p-3">
                    <img src="/images/img_link_d_flex_white_a700.svg" alt="social" className="w-3 h-3" />
                  </button>
                  <button className="bg-overlay-1 border border-white-1/45 rounded-full p-2.5">
                    <img src="/images/img_link_d_flex_white_a700_38x38.svg" alt="social" className="w-4 h-4" />
                  </button>
                  <button className="bg-overlay-1 border border-white-1/45 rounded-full p-3">
                    <img src="/images/img_link_d_flex_38x38.svg" alt="social" className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-9">
              <div className="flex flex-col gap-4">
                <h3 className="text-white-1 text-xl font-semibold font-poppins">Quick Links</h3>
                <div className="flex flex-col">
                  <div className="bg-primary-accent h-1 w-6 mb-1"></div>
                  <div className="bg-overlay-light-1 h-px w-20"></div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-white-1 text-base font-inter hover:text-primary-accent transition-colors">Medical Directory</a>
                <a href="#" className="text-white-1 text-base font-inter hover:text-primary-accent transition-colors">Top Doctors</a>
                <a href="#" className="text-white-1 text-base font-inter hover:text-primary-accent transition-colors">Latest News</a>
                <a href="#" className="text-white-1 text-base font-inter hover:text-primary-accent transition-colors">Why Choose Us</a>
                <a href="#" className="text-white-1 text-base font-inter hover:text-primary-accent transition-colors">Contact</a>
              </div>
            </div>

            {/* Useful Links */}
            <div className="flex flex-col gap-9">
              <div className="flex flex-col gap-4">
                <h3 className="text-white-1 text-xl font-semibold font-poppins">Useful Links</h3>
                <div className="flex flex-col">
                  <div className="bg-primary-accent h-1 w-6 mb-1"></div>
                  <div className="bg-overlay-light-1 h-px w-20"></div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-white-1 text-base font-inter hover:text-primary-accent transition-colors">Featured Hospitals</a>
                <a href="#" className="text-white-1 text-base font-inter hover:text-primary-accent transition-colors">How It Works</a>
                <a href="#" className="text-white-1 text-base font-inter hover:text-primary-accent transition-colors">Find A Location</a>
                <a href="#" className="text-white-1 text-base font-inter hover:text-primary-accent transition-colors">Doctors Search</a>
                <a href="#" className="text-white-1 text-base font-inter hover:text-primary-accent transition-colors">Telemedicine Services</a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col gap-9">
              <div className="flex flex-col gap-4">
                <h3 className="text-white-1 text-xl font-semibold font-poppins">Subscribe Newsletter</h3>
                <div className="flex flex-col">
                  <div className="bg-primary-accent h-1 w-6 mb-1"></div>
                  <div className="bg-overlay-light-1 h-px w-20"></div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-white-1 text-base font-inter">Sign up for our newsletter to</p>
                <p className="text-white-1 text-base font-inter">latest weekly updates & news</p>
              </div>
              <div className="flex gap-5">
                <input 
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 bg-overlay-1 border border-white-1/45 rounded-lg px-3 py-3 text-white-1 placeholder-white-1/60"
                />
                <button className="bg-primary-accent rounded-lg p-3.5">
                  <img src="/images/img_image_transition_white_a700.svg" alt="send" className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Footer */}
      <div className="bg-secondary-1 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-[1326px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="/images/img_svg_gray_700.svg" alt="copyright" className="w-4 h-4" />
            <span className="text-secondary-1 text-base font-inter">aarogyaglobal.com</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-secondary-1 text-base font-inter hover:text-primary-accent transition-colors">Privacy Policy</a>
            <div className="w-2 h-2 bg-blue-1 rounded-full"></div>
            <a href="#" className="text-secondary-1 text-base font-inter hover:text-primary-accent transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalSearch;