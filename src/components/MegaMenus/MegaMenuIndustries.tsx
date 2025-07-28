"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Heart,
  ShoppingCart,
  Banknote,
  Plane,
  Factory,
  ArrowRight,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

interface MegaMenuIndustriesProps {
  onClose?: () => void;
}

const industries = [
  { icon: Heart, title: 'Healthcare', href: '/industries#healthcare', color: 'bg-red-500' },
  { icon: Banknote, title: 'Finance', href: '/industries#finance', color: 'bg-green-500' },
  { icon: ShoppingCart, title: 'Retail', href: '/industries#retail', color: 'bg-blue-500' },
  { icon: Factory, title: 'Manufacturing', href: '/industries#manufacturing', color: 'bg-orange-500' },
  { icon: Plane, title: 'Telecommunications', href: '/industries#telecommunications', color: 'bg-purple-500' },
  { icon: Building2, title: 'Information Technology', href: '/industries#it', color: 'bg-cyan-500' },
  { icon: Banknote, title: 'BFSI', href: '/industries#bfsi', color: 'bg-emerald-500' },
  { icon: TrendingUp, title: 'Engineering', href: '/industries#engineering', color: 'bg-indigo-500' },
  { icon: Factory, title: 'Renewable Energy', href: '/industries#renewable-energy', color: 'bg-teal-500' },
  { icon: Factory, title: 'Oil & Gas', href: '/industries#oil-gas', color: 'bg-gray-600' }
];

const benefits = ['Scalable Solutions', 'Security Compliance', 'Smart Infrastructure', 'Operational Excellence'];
const stats = [
  { number: '25+', label: 'Industries Served', icon: Building2 },
  { number: '200+', label: 'Successful Projects', icon: TrendingUp },
  { number: '95%', label: 'Client Retention', icon: Heart }
];
const popularIndustries = ['E-commerce', 'FinTech', 'Healthcare'];

const MegaMenuIndustries: React.FC<MegaMenuIndustriesProps> = ({ onClose }) => {
  // Smooth anchor navigation for logos and industry links, closes menu if desired
  const handleIndustryClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const anchor = href.split('#')[1];
    if (window.location.pathname === '/industries' && anchor) {
      e.preventDefault();
      const target = document.getElementById(anchor);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        if (onClose) onClose();
      } else {
        window.location.assign(href); // Edge case: fallback to navigation
      }
    }
    // If not already on /industries page, allow normal navigation (SPA/router handles)
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 md:p-8 max-w-7xl mx-auto mt-[-30px] max-h-[80vh] md:max-h-none overflow-y-auto md:overflow-visible">
      <div className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
              <span className="text-blue-600 text-sm font-semibold tracking-wide uppercase">INDUSTRIES</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Industry <span className="text-blue-600">Insights</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Transforming businesses across diverse sectors with data-driven solutions.
              </p>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-xl overflow-hidden h-40 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
              <img
                src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Industry insights"
                className="w-full h-full object-cover mix-blend-overlay opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="mb-2"
                  >
                    <Building2 className="h-10 w-10 mx-auto text-blue-300" />
                  </motion.div>
                  <h3 className="text-lg font-bold">Industry Excellence</h3>
                </div>
              </div>
              <div className="absolute inset-0">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/40 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Industries Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {industries.map((industry, index) => (
                <motion.a
                  key={industry.title}
                  href={industry.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="flex flex-col items-center p-3 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
                  onClick={(e) => handleIndustryClick(e, industry.href)}
                >
                  <div className={`p-2 rounded-xl mb-2 group-hover:scale-110 transition-transform ${industry.color}`}>
                    {React.createElement(industry.icon, { className: 'h-4 w-4 text-white' })}
                  </div>
                  <h4 className="text-xs font-semibold text-gray-900 text-center leading-tight">
                    {industry.title}
                  </h4>
                </motion.a>
              ))}
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg"
                >
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{benefit}</span>
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
              <motion.a
                href="/industries"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors space-x-2 w-full justify-center"
              >
                <span>Explore Industries</span>
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-12 gap-8">
            {/* Left Navigation */}
            <div className="col-span-4 space-y-6">
              <div className="mb-6">
                <span className="text-blue-600 text-sm font-semibold tracking-wide uppercase">INDUSTRIES</span>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-3"
              >
                {industries.map((industry, index) => (
                  <motion.a
                    key={industry.title}
                    href={industry.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
                    onClick={(e) => handleIndustryClick(e, industry.href)}
                  >
                    <div className={`p-3 rounded-xl mb-3 group-hover:scale-110 transition-transform ${industry.color}`}>
                      {React.createElement(industry.icon, { className: 'h-5 w-5 text-white' })}
                    </div>
                    <h4 className="text-xs font-semibold text-gray-900 text-center leading-tight">
                      {industry.title}
                    </h4>
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Center Content */}
            <div className="col-span-5 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Industry <span className="text-blue-600">Insights</span>
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Transforming businesses across diverse sectors with data-driven solutions.
                </p>
              </motion.div>

              {/* Hero Image with Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative rounded-xl overflow-hidden h-44 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
                <img
                  src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Industry insights"
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="mb-2"
                    >
                      <Building2 className="h-12 w-12 mx-auto text-blue-300" />
                    </motion.div>
                    <h3 className="text-lg font-bold">Industry Excellence</h3>
                  </div>
                </div>
                <div className="absolute inset-0">
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/40 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
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
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.a
                href="/industries"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors space-x-2"
              >
                <span>Explore Industries</span>
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </div>

            {/* Right Sidebar */}
            <div className="col-span-3 space-y-6">
              {/* Industry Impact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-blue-50 rounded-xl p-5 border-l-4 border-blue-500"
              >
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                  Industry Impact
                </h3>
                <div className="space-y-3">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-white/50 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        {React.createElement(stat.icon, { className: 'h-4 w-4 text-blue-600' })}
                        <span className="text-sm text-gray-700">{stat.label}</span>
                      </div>
                      <span className="font-bold text-blue-600">{stat.number}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Popular Industries */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-green-50 rounded-xl p-5 border-l-4 border-green-500"
              >
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Heart className="h-5 w-5 text-green-600 mr-2" />
                  Popular Industries
                </h3>
                <div className="space-y-3">
                  {popularIndustries.map((industry, index) => (
                    <motion.div
                      key={industry}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm text-gray-700">{industry}</span>
                      <span className="font-bold text-green-600">
                        {Math.floor(Math.random() * 10)} projects
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

export default MegaMenuIndustries;
