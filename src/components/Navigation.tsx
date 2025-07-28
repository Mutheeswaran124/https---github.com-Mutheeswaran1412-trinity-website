import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import MegaMenuServices from './MegaMenus/MegaMenuServices';
import MegaMenuIndustries from './MegaMenus/MegaMenuIndustries';
import MegaMenuInsights from './MegaMenus/MegaMenuInsights';
import MegaMenuAbout from './MegaMenus/MegaMenuAbout';
import MegaMenuCareers from './MegaMenus/MegaMenuCareers';
import MegaMenuTechStack from './MegaMenus/MegaMenuTechStack';

const Navigation = () => {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigationRef = useRef<HTMLDivElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { id: 'services', label: 'Services', component: MegaMenuServices },
    { id: 'industries', label: 'Industries', component: MegaMenuIndustries },
    { id: 'techstack', label: 'Tech Stack', component: MegaMenuTechStack },
    { id: 'insights', label: 'Insights', component: MegaMenuInsights },
    { id: 'about', label: 'About', component: MegaMenuAbout },
    { id: 'careers', label: 'Careers', component: MegaMenuCareers },
  ];


  // Prevent scroll from closing mega menu
  useEffect(() => {
    if (activeMegaMenu) {
      // Prevent body scroll when mega menu is open (optional)
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [activeMegaMenu]);

  const handleMenuClick = (menuId: string) => {
    // Toggle the mega menu - close if same menu is clicked, open if different  
    setActiveMegaMenu(activeMegaMenu === menuId ? null : menuId);
    setIsMobileMenuOpen(false);
  };

  const handleMegaMenuClick = (event: React.MouseEvent) => {
    // Prevent clicks inside mega menu from closing it
    event.stopPropagation();
  };

  const closeMegaMenu = () => {
    setActiveMegaMenu(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMegaMenu(null);
  };

  const renderMegaMenuContent = () => {
    const activeMenuItem = menuItems.find(item => item.id === activeMegaMenu);
    if (!activeMenuItem) return null;

    const MegaMenuComponent = activeMenuItem.component;
    return <MegaMenuComponent onClose={closeMegaMenu} />;
  };

  return (
    <>
      <nav ref={navigationRef} className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">Trinity</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeMegaMenu === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronDown 
                    className={`h-4 w-4 transition-transform duration-200 ${
                      activeMegaMenu === item.id ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-gray-200"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleMenuClick(item.id)}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                        activeMegaMenu === item.id
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeMegaMenu === item.id ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Mega Menu Overlay */}
      <AnimatePresence>
        {activeMegaMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black bg-opacity-25"
            style={{ top: '64px' }} // Account for navbar height
          >
            <div 
              ref={megaMenuRef}
              onClick={handleMegaMenuClick}
              className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderMegaMenuContent()}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;