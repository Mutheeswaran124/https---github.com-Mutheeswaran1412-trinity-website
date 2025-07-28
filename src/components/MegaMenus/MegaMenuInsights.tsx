"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Video,
  Mic,
  ArrowRight,
  FileText,
  BarChart,
  TrendingUp,
} from 'lucide-react';

type Insight = {
  icon: React.ElementType;
  title: string;
  category: string;
  href: string;
  color: string;
  bgColor: string;
};

type Resource = {
  icon: React.ElementType;
  title: string;
  type: string;
  color: string;
  bgColor: string;
};

const insights: Insight[] = [
  {
    icon: BookOpen,
    title: 'Leveraging Big Data for Business Growth',
    category: 'Data Strategy',
    href: 'https://www.ibm.com/topics/big-data-analytics',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Video,
    title: 'The Future of Data Engineering',
    category: 'Technology',
    href: 'https://www.montecarlodata.com/blog-the-future-of-the-data-engineer/',
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Mic,
    title: 'AI & Machine Learning in Healthcare',
    category: 'Industry Insights',
    href: 'https://eithealth.eu/news-article/machine-learning-in-healthcare-uses-benefits-and-pioneers-in-the-field/',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50'
  }
];

const resources: Resource[] = [
  {
    icon: FileText,
    title: 'Data Governance Framework',
    type: 'Whitepaper',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50'
  },
  {
    icon: BarChart,
    title: 'Modern Data Stack Implementation',
    type: 'Case Study',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50'
  },
  {
    icon: BookOpen,
    title: 'Data Scientist\'s Guide to Databricks',
    type: 'eBook',
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-50'
  }
];

const MegaMenuInsights = ({ onClose }: { onClose?: () => void }) => {
  const handleExploreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose?.();
    const section = document.getElementById('insights');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 md:p-8 max-w-7xl mx-auto mt-[-30px] max-h-[80vh] md:max-h-none overflow-y-auto md:overflow-visible">
      <div className="relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-violet-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
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
              <span className="text-violet-600 text-sm font-semibold uppercase tracking-wide">Latest Insights</span>
              <h3 className="text-2xl font-bold text-gray-900">Knowledge <span className="text-violet-600">Hub</span></h3>
              <p className="text-sm text-gray-600">Stay ahead with our latest insights and <span className="font-semibold text-violet-600">industry expertise</span>.</p>
            </motion.div>

            {/* Featured Report */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-xl overflow-hidden h-40 bg-gradient-to-br from-violet-900 via-violet-800 to-purple-900 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20" />
              <img 
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Report Cover" 
                className="w-full h-full object-cover mix-blend-overlay opacity-80 transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-2"
                >
                  <TrendingUp className="h-10 w-10 mx-auto text-violet-300" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold">Technology Trends 2024</h3>
                  <p className="text-sm text-violet-200">Strategic insights for digital leaders</p>
                </div>
              </div>
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

            {/* Insights */}
            <div className="space-y-3">
              {insights.map((insight, index) => (
                <motion.a
                  key={insight.title}
                  href={insight.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-4 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 block"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-lg group-hover:scale-110 transition-transform duration-300 ${insight.bgColor}`}>
                      {React.createElement(insight.icon, { className: "h-4 w-4 text-violet-600" })}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-violet-700 transition-colors duration-300 mb-1 line-clamp-2">
                        {insight.title}
                      </h4>
                      <p className="text-xs text-gray-600 font-medium">{insight.category}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-violet-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: 'linear',
                    }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Resources */}
            <div className="bg-violet-50 rounded-xl p-4 border-l-4 border-violet-500">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="h-5 w-5 text-violet-600 mr-2" />
                Download Center
              </h3>
              <div className="space-y-3">
                {resources.map((resource, index) => (
                  <motion.div
                    key={resource.title}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-3 hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-1.5 rounded-lg ${resource.bgColor}`}>
                        {React.createElement(resource.icon, { className: "h-3 w-3 text-violet-600" })}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-semibold text-gray-900 mb-1 line-clamp-2">
                          {resource.title}
                        </h4>
                        <div className="flex items-center space-x-2 text-xs text-gray-600 font-medium">
                          <span>{resource.type}</span>
                          <div className="w-1 h-1 bg-gray-400 rounded-full" />
                          <span className="text-violet-600 font-medium">Free</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
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
                className="relative overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-violet-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-violet-500/25 transition-all duration-300 group w-full"
              >
                <div className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Explore Case Studies</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-700 via-purple-700 to-violet-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: 'linear',
                  }}
                />
              </motion.button>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-12 gap-8">
            {/* Insights */}
            <div className="col-span-4 space-y-6">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <span className="text-violet-600 text-sm font-semibold uppercase tracking-wide">Latest Insights</span>
                <h3 className="text-2xl font-bold text-gray-900">Knowledge <span className="text-violet-600">Hub</span></h3>
                <p className="text-sm text-gray-600">Stay ahead with our latest insights and <span className="font-semibold text-violet-600">industry expertise</span>.</p>
              </motion.div>

              <div className="space-y-3">
                {insights.map((insight, index) => (
                  <motion.a
                    key={insight.title}
                    href={insight.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-4 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 block"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-lg group-hover:scale-110 transition-transform duration-300 ${insight.bgColor}`}>
                        {React.createElement(insight.icon, { className: "h-4 w-4 text-violet-600" })}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-violet-700 transition-colors duration-300 mb-1 line-clamp-2">
                          {insight.title}
                        </h4>
                        <p className="text-xs text-gray-600 font-medium">{insight.category}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-violet-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                   <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: 'linear',
                      }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Featured Report */}
            <div className="col-span-5 space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <span className="text-blue-600 text-sm font-semibold uppercase tracking-wide">Featured Content</span>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured <span className="text-blue-600">Report</span></h2>
                <p className="text-gray-600 leading-relaxed">Explore how emerging technologies impact business strategies and discover actionable insights.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative rounded-xl overflow-hidden h-48 bg-gradient-to-br from-violet-900 via-violet-800 to-purple-900 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20" />
                <img 
                  src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Report Cover" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-80 transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="mb-2"
                  >
                    <TrendingUp className="h-12 w-12 mx-auto text-violet-300" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold">Technology Trends 2024</h3>
                    <p className="text-sm text-violet-200">Strategic insights for digital leaders</p>
                  </div>
                </div>
                <div className="absolute inset-0">
                  {[...Array(12)].map((_, i) => (
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

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center justify-between pt-4"
              >
                <motion.button
                  onClick={handleExploreClick}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-violet-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-violet-500/25 transition-all duration-300 group"
                >
                  <div className="relative z-10 flex items-center space-x-2">
                    <span>Explore Case Studies</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-700 via-purple-700 to-violet-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: 'linear',
                    }}
                  />
                </motion.button>

                <motion.a
                  href="#all-reports"
                  whileHover={{ scale: 1.02 }}
                  className="text-violet-600 font-semibold hover:text-violet-700 transition-colors flex items-center space-x-1"
                >
                </motion.a>
              </motion.div>
            </div>

            {/* Resources */}
            <div className="col-span-3 space-y-6">
             

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-blue-50 rounded-xl p-5 border-l-4 border-blue-500"
              >
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <BarChart className="h-5 w-5 text-blue-600 mr-2" />
                  Content Impact
                </h4>
                <div className="space-y-3">
                  {[
                    { label: 'Monthly Readers', value: '25K+', color: 'text-blue-600' },
                    { label: 'Published Articles', value: '150+', color: 'text-emerald-600' },
                    { label: 'Expert Contributors', value: '20+', color: 'text-purple-600' }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="flex justify-between items-center p-2 rounded-lg hover:bg-white/50 transition-colors"
                    >
                      <span className="text-sm text-gray-700">{stat.label}</span>
                      <span className={`font-bold text-sm ${stat.color}`}>{stat.value}</span>
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

export default MegaMenuInsights;