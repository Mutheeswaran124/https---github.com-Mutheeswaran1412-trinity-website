import React from 'react';
import TrinityLogo from '../../Assets/trinity-logo.png';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <a href="#" aria-label="Go to top of the page">
              <img src={TrinityLogo} alt="Trinity Logo" className="h-14 w-auto mb-4" />
            </a>
            
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/company/trinity-technology-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Trinity Technology Solutions on LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#tech-stack" className="text-gray-400 hover:text-white transition-colors">Tech Stack</a>
              </li>
              <li>
                <a href="#industries" className="text-gray-400 hover:text-white transition-colors">Industries</a>
              </li>
              <li>
                <a href="#insights" className="text-gray-400 hover:text-white transition-colors">Insights</a>
              </li>
              <li>
                <a href="#careers" className="text-gray-400 hover:text-white transition-colors">Careers</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            {/* The heading now has text-white class */}
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Global offices in USA, India, Oman, and Netherlands</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-blue-500 mr-3 flex-shrink-0" />
                <a href="tel:+12142068558" className="text-gray-400 hover:text-white transition-colors">+1 214 206 8558</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-blue-500 mr-3 flex-shrink-0" />
                <a href="mailto:hello@trinitetech.com" className="text-gray-400 hover:text-white transition-colors">
                  hello@trinitetech.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            {/* The heading now has text-white class */}
            <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest insights and trends in data analytics.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Trinity Technology Solution LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
