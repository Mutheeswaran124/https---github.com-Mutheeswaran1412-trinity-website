"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Database, Globe, Server, ArrowRight, CheckCircle, Zap, Box, Code, Layers, BarChart } from 'lucide-react';

interface MegaMenuTechStackProps {
  onClose?: () => void;
}

const MegaMenuTechStack: React.FC<MegaMenuTechStackProps> = ({ onClose }) => {
  const handleExploreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClose) onClose();
    const section = document.getElementById('tech-stack');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techCategories = [
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      technologies: [
        { name: 'Azure', icon: Cloud, color: 'bg-blue-500' },
        { name: 'AWS', icon: Server, color: 'bg-orange-500' },
        { name: 'Databricks', icon: Database, color: 'bg-red-500' },
        { name: 'Odoo', icon: Box, color: 'bg-purple-500' }
      ],
    },
    {
      title: 'Data & Integration',
      icon: Database,
      technologies: [
        { name: 'DBT', icon: Layers, color: 'bg-green-500' },
        { name: 'FiveTran', icon: Zap, color: 'bg-blue-600' }
      ],
    },
    {
      title: 'Web & Frameworks',
      icon: Globe,
      technologies: [
        { name: 'Next.js', icon: Code, color: 'bg-gray-800' },
        { name: 'React', icon: Globe, color: 'bg-cyan-500' }
      ],
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 md:p-8 max-w-7xl mx-auto mt-[-30px] max-h-[80vh] md:max-h-none overflow-y-auto md:overflow-visible">
      <div className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
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
              <span className="text-blue-600 text-sm font-semibold tracking-wide uppercase">
                Tech Stack
              </span>
              <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                Technology <span className="text-blue-600">Expertise</span>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Building modern applications with <span className="font-semibold text-blue-600">cutting-edge frameworks</span> & cloud solutions.
              </p>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-xl overflow-hidden h-40 bg-gradient-to-br from-purple-900 via-blue-800 to-indigo-900 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
              <img 
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Tech Stack" 
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
                    <Code className="h-10 w-10 mx-auto text-purple-300" />
                  </motion.div>
                  <h3 className="text-lg font-bold">Modern Development</h3>
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

            {/* Tech Categories */}
            <div className="space-y-4">
              {techCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-4 shadow-sm"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <category.icon className="h-4 w-4 text-blue-600" />
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900">{category.title}</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 + techIndex * 0.05 }}
                        className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg"
                      >
                        <div className={`p-1 rounded ${tech.color}`}>
                          <tech.icon className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-xs font-medium text-gray-700">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 gap-3">
              {['Scalable Architecture', 'Performance Optimization', 'Security Compliance', 'Cross-platform Compatibility'].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg"
                >
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
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
                onClick={handleExploreClick}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 group w-full"
                type="button"
              >
                <div className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Explore Tech Stack</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
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
          <div className="hidden lg:grid grid-cols-12 gap-8">
            {/* Left Navigation */}
            <div className="col-span-4 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <span className="text-blue-600 text-sm font-semibold tracking-wide uppercase">
                  Tech Stack
                </span>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                  Technology <span className="text-blue-600">Expertise</span>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Building modern applications with <span className="font-semibold text-blue-600">cutting-edge frameworks</span> & cloud solutions.
                </p>
              </motion.div>
              
              <div className="space-y-4">
                {techCategories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-4 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-blue-50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <category.icon className="h-4 w-4 text-blue-600" />
                      </div>
                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">{category.title}</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {category.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 + techIndex * 0.05 }}
                          className="group/tech flex items-center space-x-2 bg-gray-50 hover:bg-white p-2 rounded-lg transition-all duration-300 hover:shadow-sm"
                        >
                          <div className={`p-1 rounded group-hover/tech:scale-110 transition-transform duration-300 ${tech.color}`}>
                            <tech.icon className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-xs font-medium text-gray-700 group-hover/tech:text-gray-900 transition-colors duration-300">{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Center Content */}
            <div className="col-span-5 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <span className="text-purple-600 text-sm font-semibold tracking-wide uppercase">
                  Modern Stack
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Technology <span className="text-purple-600">Excellence</span>
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Leveraging the latest technologies to build scalable, secure, and high-performance solutions.
                </p>
              </motion.div>

              {/* Hero Image with Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative rounded-xl overflow-hidden h-48 bg-gradient-to-br from-purple-900 via-blue-800 to-indigo-900 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
                <img 
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Tech Stack" 
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
                      <Code className="h-12 w-12 mx-auto text-purple-300" />
                    </motion.div>
                    <h3 className="text-lg font-bold">Modern Development</h3>
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

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-3">
                {['Scalable Architecture', 'Performance Optimization', 'Security Compliance', 'Cross-platform Compatibility'].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center justify-between pt-4"
              >
               
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200/50"
                >
                  <CheckCircle className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-semibold text-yellow-700">Latest Technologies</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <div className="col-span-3 space-y-6">
              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-blue-50 rounded-xl p-5 border-l-4 border-blue-500"
              >
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Server className="h-5 w-5 text-blue-600 mr-2" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  {[
                    { name: 'AWS Certified', icon: Server, color: 'bg-orange-500' },
                    { name: 'Google Cloud Professional', icon: Cloud, color: 'bg-blue-500' },
                    { name: 'Microsoft Azure Expert', icon: Cloud, color: 'bg-blue-600' },
                  ].map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/50 transition-colors"
                    >
                      <div className={`p-1.5 rounded-lg ${cert.color}`}>
                        <cert.icon className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{cert.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Tech Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-green-50 rounded-xl p-5 border-l-4 border-green-500"
              >
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <BarChart className="h-5 w-5 text-green-600 mr-2" />
                  Tech Stats
                </h4>
                <div className="space-y-3">
                  {[
                    { label: 'Languages', value: '15+', color: 'text-blue-600' },
                    { label: 'Frameworks', value: '25+', color: 'text-purple-600' },
                    { label: 'Cloud Platforms', value: '5+', color: 'text-green-600' },
                    { label: 'Years of Experience', value: '10+', color: 'text-orange-600' }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="flex justify-between items-center p-2 rounded-lg hover:bg-white/50 transition-colors"
                    >
                      <span className="text-sm text-gray-700">{stat.label}</span>
                      <span className={`font-bold text-sm ${stat.color}`}>
                        {stat.value}
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

export default MegaMenuTechStack;