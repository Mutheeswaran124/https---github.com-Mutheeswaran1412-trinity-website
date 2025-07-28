import { useEffect } from 'react'; // Removed lazy and Suspense from this import
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Sections
import TestimonialCard from './components/sections/TestimonialsCard';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import GlobalPresence from './components/sections/GlobalPresence';
import Hero from './components/sections/Hero';
import Industries from './components/sections/Industries';
import Insights from './components/sections/Insights';
import Services from './components/sections/Services';
import TechStack from './components/sections/TechStack';
import OurBusinesses from './components/sections/OurBusinesses';

// Pages
import ServicesPage from './components/Services/ServicesPage';
import IndustriesPage from './components/IndustriesPage';

// Import MegaMenuServices directly instead of lazy-loading
import MegaMenuServices from './components/MegaMenus/MegaMenuServices';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Scroll to section if redirected with state
function ScrollToServices() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollToServices) {
      const section = document.getElementById('services');
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return null;
}

// Home Page Layout
function HomePage() {
  return (
    <>
      <Header />
      <ScrollToServices />
      <main>
        <Hero />
        <About />
        <Services onServiceClick={() => {}} />
        <TechStack />
        <Industries />
        
        <Insights />
        <OurBusinesses />
        <TestimonialCard />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

// App Component with Routes
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:serviceId" element={<ServicesPage />} />
        <Route
          path="/services-portal"
          element={
            // The <Suspense> wrapper has been removed
            <div className="min-h-screen bg-gray-100 p-8">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Our Services
                </h1>
                <MegaMenuServices />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
