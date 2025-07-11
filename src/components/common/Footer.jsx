import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary-1 w-full">
      <div className="px-4 sm:px-8 lg:px-12 py-8 lg:py-16">
        {/* Contact Info Section */}
        <div className="bg-secondary-pink rounded-2xl p-6 sm:p-8 lg:p-12 mb-8 lg:mb-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12">
            {/* Emergency Line */}
            <div className="flex items-center gap-4 lg:gap-5">
              <div className="bg-primary-blue rounded-full p-3.5">
                <img src="/images/img_div_contact_icon_black_900_50x50.svg" alt="emergency" className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-primary-1 text-base font-inter">Emergency Line</span>
                <span className="text-primary-1 text-base font-semibold font-poppins">+91 9876543212</span>
              </div>
            </div>

            {/* Divider - Hidden on mobile */}
            <img src="/images/img_div.svg" alt="divider" className="hidden lg:block w-6 h-auto" />

            {/* Support Email */}
            <div className="flex items-center gap-4 lg:gap-5">
              <div className="bg-primary-blue rounded-full p-3.5">
                <img src="/images/img_div_contact_icon_50x50.svg" alt="email" className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-primary-1 text-base font-inter">Support Email</span>
                <span className="text-primary-1 text-base font-semibold font-poppins">support@aarogya.com</span>
              </div>
            </div>

            {/* Divider - Hidden on mobile */}
            <img src="/images/img_div.svg" alt="divider" className="hidden lg:block w-6 h-auto" />

            {/* Visit Us */}
            <div className="flex items-center gap-4 lg:gap-5">
              <div className="bg-primary-blue rounded-full p-3.5">
                <img src="/images/img_div_contact_icon_1.svg" alt="location" className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-primary-1 text-base font-inter">Visit Us On</span>
                <span className="text-primary-1 text-base font-semibold font-poppins">Innov8 Orchid Center India, 122001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">
          {/* Company Info */}
          <div className="flex flex-col gap-6 w-full lg:w-1/4">
            <img src="/images/img_footer_logo.png" alt="Aarogya Logo" className="w-48 sm:w-52 h-auto" />
            
            <div className="flex flex-col gap-0.5">
              <p className="text-white-1 text-base font-inter">We strive to create a welcoming</p>
              <p className="text-white-1 text-base font-inter">environment where patients feel</p>
              <p className="text-white-1 text-base font-inter">valued respected and well informed</p>
              <p className="text-white-1 text-base font-inter">about their health</p>
            </div>

            <div className="flex items-center gap-3.5">
              <span className="text-white-1 text-base font-inter">Follow Us:</span>
              <div className="flex items-center gap-2">
                <button className="bg-overlay-1 border border-white-1/45 rounded-lg p-2.5">
                  <img src="/images/img_link_d_flex.svg" alt="social" className="w-4 h-4" />
                </button>
                <button className="bg-overlay-1 border border-white-1/45 rounded-lg p-3">
                  <img src="/images/img_link_d_flex_white_a700.svg" alt="social" className="w-3 h-3" />
                </button>
                <button className="bg-overlay-1 border border-white-1/45 rounded-lg p-2.5">
                  <img src="/images/img_link_d_flex_white_a700_38x38.svg" alt="social" className="w-4 h-4" />
                </button>
                <button className="bg-overlay-1 border border-white-1/45 rounded-lg p-3">
                  <img src="/images/img_link_d_flex_38x38.svg" alt="social" className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="flex flex-col sm:flex-row justify-between w-full lg:w-3/5 gap-8 sm:gap-16">
            {/* Quick Links */}
            <div className="flex flex-col gap-9">
              <div className="flex flex-col gap-4">
                <h3 className="text-white-1 text-xl font-semibold font-poppins">Quick Links</h3>
                <div className="flex flex-col justify-center items-start w-20">
                  <div className="bg-primary-accent w-6 h-0.5"></div>
                  <div className="bg-overlay-light-1 w-20 h-px -mt-0.5"></div>
                </div>
              </div>
              
              <ul className="flex flex-col gap-3">
                <li><a href="#" className="text-white-1 text-base font-inter hover:text-primary-accent">Medical Directory</a></li>
                <li><a href="#" className="text-white-1 text-base font-inter hover:text-primary-accent">Top Doctors</a></li>
                <li><a href="#" className="text-white-1 text-base font-inter hover:text-primary-accent">Latest News</a></li>
                <li><a href="#" className="text-white-1 text-base font-inter hover:text-primary-accent">Why Choose Us</a></li>
                <li><a href="#" className="text-white-1 text-base font-inter hover:text-primary-accent">Contact</a></li>
              </ul>
            </div>

            {/* Useful Links */}
            <div className="flex flex-col gap-9">
              <div className="flex flex-col gap-4.5">
                <h3 className="text-white-1 text-xl font-semibold font-poppins">Useful Links</h3>
                <div className="flex flex-col justify-center items-start w-20">
                  <div className="bg-primary-accent w-6 h-0.5"></div>
                  <div className="bg-overlay-light-1 w-20 h-px -mt-0.5"></div>
                </div>
              </div>
              
              <ul className="flex flex-col gap-3">
                <li><a href="#" className="text-white-1 text-base font-inter hover:text-primary-accent">Featured Hospitals</a></li>
                <li><a href="#" className="text-white-1 text-base font-inter hover:text-primary-accent">How It Works</a></li>
                <li><a href="#" className="text-white-1 text-base font-inter hover:text-primary-accent">Find A Location</a></li>
                <li><a href="#" className="text-white-1 text-base font-inter hover:text-primary-accent">Doctors Search</a></li>
                <li><a href="#" className="text-white-1 text-base font-inter hover:text-primary-accent">Telemedicine Services</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col w-full lg:w-1/3">
            <div className="flex flex-col gap-4.5 mb-9">
              <h3 className="text-white-1 text-xl font-semibold font-poppins">Subscribe Newsletter</h3>
              <div className="flex flex-col justify-center items-start w-20">
                <div className="bg-primary-accent w-6 h-0.5"></div>
                <div className="bg-overlay-light-1 w-20 h-px -mt-0.5"></div>
              </div>
            </div>

            <div className="flex flex-col gap-0.5 mb-5">
              <p className="text-white-1 text-base font-inter">Sign up for our newsletter to</p>
              <p className="text-white-1 text-base font-inter">latest weekly updates & news</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 bg-overlay-1 border border-white-1/45 rounded-lg px-3 py-3 text-white-1 placeholder-white-1/70"
              />
              <button className="bg-primary-accent rounded-lg p-3.5">
                <img src="/images/img_image_transition_white_a700.svg" alt="send" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mt-12 lg:mt-16 pt-6 border-t border-white-1/10">
          <div className="flex items-center gap-0.5">
            <img src="/images/img_svg_gray_700.svg" alt="copyright" className="w-4 h-4" />
            <span className="text-secondary-1 text-base font-inter">aarogyaglobal.com</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-secondary-1 text-base font-inter hover:text-primary-accent">Privacy Policy</a>
            <div className="bg-primary-blue w-2 h-2 rounded"></div>
            <span className="text-secondary-1 text-base font-inter">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;