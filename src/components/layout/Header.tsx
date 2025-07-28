import { useState, useEffect } from 'react'; // Removed lazy and Suspense
import { Menu, X } from 'lucide-react';
import TrinityLogo from '../../Assets/trinity-logo.png';

import MegaMenuAbout from '../MegaMenus/MegaMenuAbout';
// Import MegaMenuServices statically like the others
import MegaMenuServices from '../MegaMenus/MegaMenuServices';
import MegaMenuTechStack from '../MegaMenus/MegaMenuTechStack';
import MegaMenuIndustries from '../MegaMenus/MegaMenuIndustries';
import MegaMenuInsights from '../MegaMenus/MegaMenuInsights';
import MegaMenuCareers from '../MegaMenus/MegaMenuCareers';

// The lazy import has been removed from here.
// const MegaMenuServices = lazy(() => import('../MegaMenus/MegaMenuServices'));

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', key: 'about' },
    { name: 'Services', key: 'services' },
    { name: 'Tech Stack', key: 'tech-stack' },
    { name: 'Industries', key: 'industries' },
    { name: 'Insights', key: 'insights' },
    { name: 'Careers', key: 'careers' },
  ];

  const handleMenuClick = (key: string) => {
    if (activeMenu === key) {
      // If clicking the same menu item, close it
      setActiveMenu(null);
    } else {
      // If clicking a different menu item, open it
      setActiveMenu(key);
    }
  };

  const renderMegaMenu = (key: string) => {
    switch (key) {
      case 'about':
        return <MegaMenuAbout onClose={() => setActiveMenu(null)} />;
      case 'services':
        return <MegaMenuServices onClose={() => setActiveMenu(null)} />;
      case 'tech-stack':
        return <MegaMenuTechStack onClose={() => setActiveMenu(null)} />;
      case 'industries':
        return <MegaMenuIndustries onClose={() => setActiveMenu(null)} />;
      case 'insights':
        return <MegaMenuInsights onClose={() => setActiveMenu(null)} />;
      case 'careers':
        return <MegaMenuCareers onClose={() => setActiveMenu(null)} />;
      default:
        return null;
    }
  };

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 font-sans ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
        style={{ fontFamily: 'Poppins, sans-serif', height: '70px' }}
      >
        {/* Background Animated Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-32 -right-32 w-60 h-60 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
          <div className="absolute -bottom-32 -left-32 w-60 h-60 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
          <div className="absolute top-20 left-40 w-60 h-60 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
        </div>

        {/* Main Nav Content */}
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative z-10 h-full">
          <a href="/" className="flex items-center h-full">
            <img src={TrinityLogo} alt="Trinity Logo" className="h-10 md:h-12 w-auto block" />
          </a>

          <nav className="hidden md:flex items-center space-x-6 ml-auto h-full">
            {navLinks.map((link) => (
              <div key={link.key} className="relative h-full flex items-center">
                <button
                  onClick={() => handleMenuClick(link.key)}
                  className={`nav-button font-semibold text-base transition-colors duration-200 ${
                    activeMenu === link.key
                      ? 'text-blue-700 border-b-2 border-blue-700'
                      : 'text-blue-800 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-block font-semibold bg-blue-600 text-white px-5 py-2 rounded-md transition-colors hover:bg-blue-700 text-base ml-4"
          >
            Contact Us
          </a>

          <button className="md:hidden ml-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={24} className="text-blue-600" />
            ) : (
              <Menu size={24} className="text-blue-600" />
            )}
          </button>
        </div>
      </header>

      {/* Mega Menu Overlay */}
      {activeMenu && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-20 backdrop-blur-sm">
          <div className="mega-menu-container absolute top-[70px] left-0 right-0 bg-white shadow-2xl border-t border-gray-200">
            <div className="container mx-auto px-6 py-10">
              {/* The <Suspense> wrapper has been removed from here */}
              {renderMegaMenu(activeMenu)}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white pt-[70px]">
          <div className="container mx-auto px-4 py-5">
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => {
                    handleMenuClick(link.key);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left font-semibold text-blue-800 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors text-base"
                >
                  {link.name}
                </button>
              ))}
              <a
                href="#contact"
                className="block w-full text-center font-semibold bg-blue-600 text-white px-5 py-3 rounded-md transition-colors hover:bg-blue-700 mt-5 text-base"
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
