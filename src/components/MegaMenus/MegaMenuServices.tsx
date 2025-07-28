"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  BarChart2,
  Database,
  ShieldCheck,
  Monitor,
  Cloud,
  Activity,
  Users,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Target,
  Award,
  TrendingUp,
  Zap
} from 'lucide-react';

const services = [
  {
    icon: BarChart2,
    title: 'Data Strategy',
    description: 'Tailored data roadmaps for business outcomes.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Robust data infrastructures for your organization.',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50',
  },
  {
    icon: ShieldCheck,
    title: 'Data Governance & Management',
    description: 'Quality, security, and compliance for your data.',
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Monitor,
    title: 'Business Intelligence',
    description: 'Actionable insights for decision-making.',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Cloud,
    title: 'Data Migration & Modernization',
    description: 'Modern platforms for performance and scalability.',
    color: 'from-sky-500 to-blue-500',
    bgColor: 'bg-sky-50',
  },
  {
    icon: Activity,
    title: 'Artificial Intelligence',
    description: 'AI solutions for innovation and automation.',
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
  },
  {
    icon: Users,
    title: 'Staffing Solutions',
    description: 'Skilled professionals for your data team.',
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-50',
  },
  {
    icon: Briefcase,
    title: 'ERP Planning',
    description: 'Tailored ERP solutions for efficiency.',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
  },
];

const processSteps = [
  { title: 'Discovery', icon: Target, description: 'Understanding your needs' },
  { title: 'Planning', icon: BarChart2, description: 'Strategic roadmap creation' },
  { title: 'Development', icon: Zap, description: 'Building your solution' },
  { title: 'Deployment', icon: Award, description: 'Going live successfully' }
];

const serviceHighlights = [
  { label: 'Project Success Rate', value: '98%', color: 'text-emerald-600', icon: TrendingUp },
  { label: 'Average Delivery Time', value: '6 weeks', color: 'text-blue-600', icon: Zap },
  { label: 'Client Satisfaction', value: '4.9/5', color: 'text-purple-600', icon: Award }
];

interface MegaMenuServicesProps {
  onClose?: () => void;
  onGetStarted?: () => void;
}

const MegaMenuServices: React.FC<MegaMenuServicesProps> = ({ onClose, onGetStarted }) => {
  const navigate = useNavigate();

  // Service mapping for navigation
  const serviceRoutes = {
    'Data Strategy': 'data-strategy',
    'Data Engineering': 'data-engineering',
    'Data Governance & Management': 'data-governance',
    'Business Intelligence': 'business-intelligence',
    'Data Migration & Modernization': 'cloud-migration',
    'Artificial Intelligence': 'artificial-intelligence',
    'Staffing Solutions': 'staffing-solutions',
    'ERP Planning': 'erp-planning'
  };

  const handleServiceClick = (serviceTitle: string) => {
    const serviceId = serviceRoutes[serviceTitle as keyof typeof serviceRoutes];
    if (serviceId) {
      if (onClose) onClose();
      navigate(`/services/${serviceId}`);
    }
  };

  const handleGetStartedClick = () => {
    if (onClose) onClose();

    // Smooth scroll to services section
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    if (onGetStarted) onGetStarted();
  };

  const handleConsultationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClose) onClose();
    console.log('Free Consultation clicked');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 md:p-6 max-w-7xl mx-auto mt-[-30px] max-h-[80vh] md:max-h-none overflow-y-auto md:overflow-visible">
      <div className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10">
          {/* Mobile Layout */}
          <div className="block lg:hidden space-y-6 pb-4">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-3"
            >
              <span className="text-indigo-600 text-sm font-semibold tracking-wide uppercase">
                Our Services
              </span>
              <h3 className="text-xl font-bold text-gray-900 leading-tight">
                Comprehensive <span className="text-indigo-600">Solutions</span>
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                End-to-end technology solutions designed for <span className="font-semibold text-indigo-600">enterprise success</span>.
              </p>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-xl overflow-hidden h-40 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20" />
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Enterprise solutions"
                className="w-full h-full object-cover mix-blend-overlay opacity-80 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="mb-2"
                  >
                    <Sparkles className="h-10 w-10 mx-auto text-blue-300" />
                  </motion.div>
                  <h3 className="text-base font-bold">Enterprise Excellence</h3>
                  <p className="text-xs text-blue-200">Scalable solutions for modern business</p>
                </div>
              </div>
              {/* Animated particles */}
              <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/40 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-lg p-3 shadow-sm"
                  onClick={() => handleServiceClick(service.title)}
                >
                  <div className="flex items-start space-x-2">
                    <div className={`p-1.5 rounded-lg ${service.bgColor}`}>
                      <service.icon className="h-3 w-3 text-indigo-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-semibold text-gray-900 mb-1">
                        {service.title}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-2">
              {['Scalable Architecture', '24/7 Support', 'Custom Integration', 'Security Compliance'].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg"
                >
                  <CheckCircle className="h-3 w-3 text-emerald-500 flex-shrink-0" />
                  <span className="text-xs text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <motion.button
                onClick={handleGetStartedClick}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 group text-sm w-full"
                type="button"
              >
                <div className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "linear",
                  }}
                />
              </motion.button>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-12 gap-6">
            {/* Left Navigation - Services Grid (REDUCED HEIGHT) */}
            <div className="col-span-4 space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-3"
              >
                <span className="text-indigo-500 text-sm font-semibold tracking-wide uppercase">
                  Our Services
                </span>
                <h3 className="text-l font-bold text-gray-900 leading-tight">
                  Comprehensive <span className="text-indigo-600">Solutions</span>
                </h3>
              </motion.div>

              <div className="grid grid-cols-1 gap-1">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border border-gray-100 rounded-lg p-2 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer"
                    onClick={() => handleServiceClick(service.title)}
                  >
                    <div className="flex items-start space-x-2">
                      <div className={`p-1.5 rounded-lg group-hover:scale-110 transition-transform duration-300 ${service.bgColor}`}>
                        <service.icon className="h-3 w-3 text-indigo-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors duration-300 mb-1">
                          {service.title}
                        </h4>
                        <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">{service.description}</p>
                      </div>
                    </div>
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "linear",
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Center Content - Featured Solution */}
            <div className="col-span-5 space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-3"
              >
                <span className="text-blue-600 text-sm font-semibold tracking-wide uppercase">
                  Enterprise Ready
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Enterprise <span className="text-blue-600">Solutions</span>
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Comprehensive technology solutions designed for enterprise operations with scalability and security at the core.
                </p>
              </motion.div>

              {/* Hero Image with Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative rounded-xl overflow-hidden h-40 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20" />
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Enterprise solutions"
                  className="w-full h-full object-cover mix-blend-overlay opacity-80 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="mb-2"
                    >
                      <Sparkles className="h-10 w-10 mx-auto text-blue-300" />
                    </motion.div>
                    <h3 className="text-base font-bold">Enterprise Excellence</h3>
                    <p className="text-xs text-blue-200">Scalable solutions for modern business</p>
                  </div>
                </div>

                {/* Animated particles */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/40 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-2 gap-2">
                {['Scalable Architecture', '24/7 Support', 'Custom Integration', 'Security Compliance'].map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <CheckCircle className="h-3 w-3 text-emerald-500 flex-shrink-0" />
                    <span className="text-xs text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center justify-between pt-3"
              >
                <motion.button
                  onClick={handleGetStartedClick}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 group text-sm"
                  type="button"
                >
                  <div className="relative z-10 flex items-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "linear",
                    }}
                  />
                </motion.button>
                <motion.a
                  href="#consultation"
                  onClick={handleConsultationClick}
                  whileHover={{ scale: 1.02 }}
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center space-x-1 text-sm"
                >
                  {/* Consultation CTA can go here if needed */}
                </motion.a>
              </motion.div>
            </div>

            {/* Right Sidebar - Process & Highlights (INCREASED WIDTH) */}
            <div className="col-span-3 space-y-4"> {/* CHANGED: col-span-2 max-w-xs to col-span-3 */}
              {/* Our Process */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20"
              >
                <div className="space-y-3">
                  <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">
                    Our Approach
                  </span>
                  <h3 className="font-semibold text-gray-900 flex items-center text-sm">
                    <Sparkles className="h-4 w-4 text-emerald-600 mr-2" />
                    Process Excellence
                  </h3>
                </div>
                <div className="space-y-3 mt-4">
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="group flex items-center space-x-2 p-2 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-emerald-200"
                    >
                      <div className="relative">
                        <div className="w-6 h-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                          {index + 1}
                        </div>
                        {index < 3 && (
                          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-gradient-to-b from-emerald-300 to-teal-300"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xs font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">{step.title}</h4>
                        <p className="text-xs text-gray-600 mt-0.5">{step.description}</p>
                      </div>
                      <step.icon className="h-3 w-3 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Service Highlights */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20"
              >
                <div className="space-y-3">
                  <span className="text-purple-600 text-xs font-semibold tracking-wide uppercase">
                    Performance
                  </span>
                  <h4 className="font-semibold text-gray-900 flex items-center text-sm">
                    <BarChart2 className="h-4 w-4 text-purple-600 mr-2" />
                    Why Choose Us
                  </h4>
                </div>
                <div className="space-y-3 mt-4">
                  {serviceHighlights.map((highlight, index) => (
                    <motion.div
                      key={highlight.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="group flex justify-between items-center p-2 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-purple-200"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="p-1.5 bg-purple-50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                          <highlight.icon className="h-3 w-3 text-purple-600" />
                        </div>
                        <span className="text-xs text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{highlight.label}</span>
                      </div>
                      <span className={`font-bold text-sm group-hover:scale-110 transition-transform duration-300 ${highlight.color}`}>
                        {highlight.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuServices;
