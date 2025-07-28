import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Heart,
  Banknote,
  ShoppingCart,
  Factory,
  Radio,
  Building2,
  TrendingUp,
  Zap,
  Shield,
  CheckCircle2,
  ArrowLeft,
} from 'lucide-react';

import Header from '../components/layout/Header';

// Utility: Calculate appropriate scroll margin for anchor headings
const SCROLL_MARGIN_CLASS = 'scroll-mt-32'; // mt-32 ~ 8rem (~128px), adjust per your header height

const IndustriesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      // Wait for DOM to render before scrolling
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, [location]);

  const industries = [
    {
      id: 'healthcare',
      icon: Heart,
      title: 'Healthcare',
      subtitle: 'Advancing Patient Care Through Innovation',
      description: 'The healthcare industry is rapidly evolving with digital transformation, telemedicine, and AI-driven diagnostics. We provide specialized talent for hospitals, pharmaceutical companies, medical device manufacturers, and healthcare technology providers.',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600',
      keyServices: [
        'Clinical Research Professionals',
        'Healthcare IT Specialists',
        'Medical Device Engineers',
        'Regulatory Affairs Experts',
        'Pharmaceutical Scientists',
        'Telemedicine Specialists'
      ],
      stats: { projects: '45+', specialists: '200+', retention: '96%' }
    },
    {
      id: 'finance',
      icon: Banknote,
      title: 'Finance',
      subtitle: 'Driving Financial Innovation & Growth',
      description: 'The finance sector demands expertise in risk management, regulatory compliance, and digital banking solutions. We connect organizations with top-tier financial professionals who understand market dynamics and emerging fintech trends.',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=600',
      keyServices: [
        'Investment Banking Analysts',
        'Risk Management Specialists',
        'Compliance Officers',
        'Quantitative Analysts',
        'Portfolio Managers',
        'Financial Technology Developers'
      ],
      stats: { projects: '38+', specialists: '180+', retention: '94%' }
    },
    {
      id: 'retail',
      icon: ShoppingCart,
      title: 'Retail',
      subtitle: 'Transforming Shopping Experiences',
      description: 'Retail is experiencing unprecedented change with e-commerce growth, omnichannel strategies, and personalized customer experiences. We help retailers find talent that bridges traditional retail with digital innovation.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      keyServices: [
        'E-commerce Specialists',
        'Retail Analytics Experts',
        'Supply Chain Managers',
        'Customer Experience Designers',
        'Merchandising Professionals',
        'Digital Marketing Managers'
      ],
      stats: { projects: '52+', specialists: '160+', retention: '92%' }
    },
    {
      id: 'manufacturing',
      icon: Factory,
      title: 'Manufacturing',
      subtitle: 'Powering Industrial Excellence',
      description: 'Manufacturing is embracing Industry 4.0 with smart factories, IoT integration, and sustainable practices. We provide skilled professionals who understand both traditional manufacturing processes and cutting-edge automation technologies.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600',
      keyServices: [
        'Process Engineers',
        'Quality Assurance Specialists',
        'Automation Engineers',
        'Lean Manufacturing Experts',
        'Supply Chain Coordinators',
        'Industrial IoT Specialists'
      ],
      stats: { projects: '41+', specialists: '220+', retention: '95%' }
    },
    {
      id: 'telecommunications',
      icon: Radio,
      title: 'Telecommunications',
      subtitle: 'Connecting the Digital World',
      description: 'Telecommunications infrastructure is the backbone of our connected world. With 5G deployment, network security, and cloud communications, we help telecom companies find experts who can navigate this complex landscape.',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600',
      keyServices: [
        'Network Engineers',
        '5G Technology Specialists',
        'Telecommunications Security Experts',
        'Cloud Communications Engineers',
        'RF Engineers',
        'Network Operations Managers'
      ],
      stats: { projects: '29+', specialists: '140+', retention: '93%' }
    },
    {
      id: 'it',
      icon: Building2,
      title: 'Information Technology',
      subtitle: 'Enabling Digital Transformation',
      description: 'IT continues to be the driving force behind business innovation. From cloud migration to cybersecurity, AI implementation to software development, we connect businesses with IT professionals who can deliver transformative solutions.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
      keyServices: [
        'Software Developers',
        'Cloud Architects',
        'Cybersecurity Specialists',
        'Data Scientists',
        'DevOps Engineers',
        'AI/ML Engineers'
      ],
      stats: { projects: '68+', specialists: '350+', retention: '97%' }
    },
    {
      id: 'bfsi',
      icon: Shield,
      title: 'BFSI (Banking, Financial Services & Insurance)',
      subtitle: 'Securing Financial Futures',
      description: 'BFSI sector requires specialized knowledge of regulatory frameworks, risk assessment, and customer-centric solutions. We provide professionals who understand the intricate balance between innovation and compliance in financial services.',
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=600',
      keyServices: [
        'Banking Operations Specialists',
        'Insurance Underwriters',
        'Credit Risk Analysts',
        'Wealth Management Advisors',
        'Actuarial Scientists',
        'RegTech Specialists'
      ],
      stats: { projects: '35+', specialists: '195+', retention: '94%' }
    },
    {
      id: 'engineering',
      icon: TrendingUp,
      title: 'Engineering',
      subtitle: "Building Tomorrow's Infrastructure",
      description: "Engineering recruitment is shaped by industry changes, technology advancements, and environmental regulations. With a shift towards Cleaner Energy, there's a rising demand for experts in Renewable Energy, Efficiency, and Sustainability.",
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600',
      keyServices: [
        'Civil Engineers',
        'Mechanical Engineers',
        'Electrical Engineers',
        'Environmental Engineers',
        'Project Managers',
        'Sustainability Consultants'
      ],
      stats: { projects: '47+', specialists: '280+', retention: '96%' }
    },
    {
      id: 'renewable-energy',
      icon: Zap,
      title: 'Renewable Energy',
      subtitle: 'Powering a Sustainable Future',
      description: "Renewable Energy Projects frequently entail intricate collaborations among various international companies. We provide a comprehensive 'end-to-end' approach, encompassing services from Workforce Management and Payroll to Statement of Work (SOW), Vendor Inspection, and Professional Employment Organization solutions.",
      image: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=600',
      keyServices: [
        'Solar Energy Engineers',
        'Wind Energy Specialists',
        'Energy Storage Experts',
        'Grid Integration Engineers',
        'Environmental Impact Assessors',
        'Energy Policy Analysts'
      ],
      stats: { projects: '33+', specialists: '170+', retention: '95%' }
    },
    {
      id: 'oil-gas',
      icon: Factory,
      title: 'Oil & Gas',
      subtitle: 'Energy Sector Expertise',
      description: 'The oil and gas industry requires specialized knowledge of extraction, refining, and distribution processes. We connect energy companies with experienced professionals who understand safety protocols, environmental regulations, and operational efficiency in this critical sector.',
      image: 'https://images.pexels.com/photos/1172105/pexels-photo-1172105.jpeg?auto=compress&cs=tinysrgb&w=600',
      keyServices: [
        'Petroleum Engineers',
        'Drilling Specialists',
        'Refinery Operations Managers',
        'HSE Coordinators',
        'Geologists',
        'Pipeline Engineers'
      ],
      stats: { projects: '26+', specialists: '130+', retention: '93%' }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-[#1a3085] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-6">
              <span className="bg-blue-800/80 text-blue-100 px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2 mx-auto">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.75l-6.172 3.245 1.179-6.873L2 9.505l6.908-1.004L12 2.25l3.092 6.251L22 9.505l-4.007 4.617 1.179 6.873z"/></svg>
                Enterprise-Grade Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Transform Your Business with Our<br className="hidden md:block" /> Services
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Comprehensive technology solutions designed to accelerate your growth, optimize operations, and drive innovation across every aspect of your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center bg-blue-900/80 rounded-lg px-5 py-2 text-base font-medium text-blue-100 gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.75l-6.172 3.245 1.179-6.873L2 9.505l6.908-1.004L12 2.25l3.092 6.251L22 9.505l-4.007 4.617 1.179 6.873z"/></svg>
                98% Success Rate
              </div>
              <div className="flex items-center bg-blue-900/80 rounded-lg px-5 py-2 text-base font-medium text-blue-100 gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8"/></svg>
                500+ Projects Delivered
              </div>
              <div className="flex items-center bg-blue-900/80 rounded-lg px-5 py-2 text-base font-medium text-blue-100 gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                24/7 Support
              </div>
            </div>
          </div>
        </div>

        {/* Industries Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-24">
            {industries.map((industry, index) => (
              <div
                key={industry.id}
                id={industry.id}
                className={`${SCROLL_MARGIN_CLASS} grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      {React.createElement(industry.icon, {
                        className: 'h-8 w-8 text-blue-600',
                      })}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{industry.title}</h2>
                      <div className="w-16 h-1 bg-blue-600 mt-2"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-600">{industry.subtitle}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{industry.description}</p>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Key Services:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {industry.keyServices.map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-6">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">{industry.stats.projects}</div>
                        <div className="text-sm text-gray-600">Projects</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">{industry.stats.specialists}</div>
                        <div className="text-sm text-gray-600">Specialists</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">{industry.stats.retention}</div>
                        <div className="text-sm text-gray-600">Retention</div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        navigate('/', { replace: true });
                        // Small delay to ensure navigation completes before scrolling
                        setTimeout(() => {
                          const industriesSection = document.getElementById('industries');
                          if (industriesSection) {
                            industriesSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 100);
                      }}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      View All Industries
                    </button>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

       
        </div>
      </div>
    
  );
};

export default IndustriesPage;
