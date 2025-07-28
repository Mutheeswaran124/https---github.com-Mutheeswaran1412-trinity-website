import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
  LineChart,
  Database,
  ShieldCheck,
  BarChart,
  Cloud,
  BrainCircuit,
  Users,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
} from 'lucide-react';

// Utility function for class merging
function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

interface ServicesProps {
  onServiceClick?: () => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <LineChart size={32} className="text-blue-600 mb-4" />,
      title: 'Data Strategy',
      description: 'Crafting tailored data roadmaps to align with your business objectives and drive measurable growth.',
      imageUrl: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=640',
      route: 'data-strategy',
    },
    {
      icon: <Database size={32} className="text-blue-600 mb-4" />,
      title: 'Data Engineering',
      description: 'Building robust, scalable data infrastructures that ensure smooth data flow and processing.',
      imageUrl: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=640',
      route: 'data-engineering',
    },
    {
      icon: <ShieldCheck size={32} className="text-blue-600 mb-4" />,
      title: 'Data Governance',
      description: 'Implementing comprehensive frameworks to ensure data quality, security, and regulatory compliance.',
      imageUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=640',
      route: 'data-governance',
    },
    {
      icon: <BarChart size={32} className="text-blue-600 mb-4" />,
      title: 'Business Intelligence',
      description: 'Transforming complex data into actionable insights that drive informed decision-making.',
      imageUrl: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=640',
      route: 'business-intelligence',
    },
    {
      icon: <Cloud size={32} className="text-blue-600 mb-4" />,
      title: 'Data Modernization',
      description: 'Upgrading legacy systems for enhanced performance, scalability, and cost-effectiveness.',
      imageUrl: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=640',
      route: 'cloud-migration',
    },
    {
      icon: <BrainCircuit size={32} className="text-blue-600 mb-4" />,
      title: 'AI Solutions',
      description: 'Applying cutting-edge AI and machine learning to automate processes and reveal insights.',
      imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=640',
      route: 'artificial-intelligence',
    },
    {
      icon: <Users size={32} className="text-blue-600 mb-4" />,
      title: 'Staffing Solutions',
      description: 'Providing skilled data experts to extend your team and accelerate project delivery.',
      imageUrl: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=640',
      route: 'staffing-solutions',
    },
    {
      icon: <Briefcase size={32} className="text-blue-600 mb-4" />,
      title: 'ERP Planning',
      description: 'Integrating and streamlining business processes for maximum operational efficiency.',
      imageUrl: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=640',
      route: 'erp-planning',
    },
  ];

  const handleServiceClick = (service: any) => {
    if (onServiceClick) onServiceClick();
    console.log('Navigating to:', `/services/${service.route}`);
    navigate(`/services/${service.route}`);
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Comprehensive data solutions designed to transform your business and drive sustainable growth
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { number: '100+', label: 'Projects Completed' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '50+', label: 'Expert Team Members' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
              onClick={() => handleServiceClick(service)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.imageUrl})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 group-hover:via-black/60 group-hover:to-black/30 transition-all duration-300" />
              
             

              {/* Content */}
              <div className="relative z-10 p-6 h-80 flex flex-col justify-between">
                <div>
                  {service.icon}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Button */}
                <div className="mt-auto">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg">
                    <span>Learn More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

     
      </div>
    </section>
  );
};

export default Services;