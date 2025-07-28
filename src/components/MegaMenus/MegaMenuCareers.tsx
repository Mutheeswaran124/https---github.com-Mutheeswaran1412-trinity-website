"use client";
import { motion } from 'framer-motion';
import {
  Users, Award, Heart, Globe, Clock, TrendingUp, Star, Handshake
} from 'lucide-react';

interface MegaMenuCareersProps {
  onClose?: () => void;
}

const JoinOurTeam: React.FC<MegaMenuCareersProps> = ({ onClose }) => {
  const companyStats = [
    { number: '50+', label: 'Team Members', icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { number: '4.8/5', label: 'Employee Rating', icon: Star, color: 'text-yellow-500', bgColor: 'bg-yellow-100' },
    { number: '95%', label: 'Retention Rate', icon: Heart, color: 'text-red-500', bgColor: 'bg-red-100' },
  ];

  const benefits = [
    { text: 'Health Insurance', icon: Heart },
    { text: '$3,000 Learning Budget', icon: Award },
    { text: 'Flexible Work Arrangements', icon: Globe },
    { text: 'Unlimited PTO', icon: Clock }
  ];

  const quickStats = [
    { label: 'Average Hire Time', value: '2 weeks', color: 'text-blue-600', icon: Clock },
    { label: 'Career Growth Rate', value: '85%', color: 'text-emerald-600', icon: TrendingUp },
    { label: 'Remote Flexibility', value: '100%', color: 'text-purple-600', icon: Globe }
  ];

  return (
    // CHANGED: Adjusted negative margin to move the component down slightly
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 -mt-8">
      <div className="max-w-6xl mx-auto px-4 pt-2 pb-4">
        {/* Mobile Layout */}
        <div className="block lg:hidden space-y-3 pb-4 max-h-[80vh] overflow-y-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-2"
          >
            <h2 className="text-lg font-bold text-gray-900">
              Welcome to Our <span className="text-blue-600">Team</span>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We're building something amazing.
            </p>
          </motion.div>

          {/* Company Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="text-center bg-white rounded-xl p-2 shadow-sm border border-gray-100"
              >
                <div className={`w-8 h-8 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-1`}>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
                <p className="text-base font-bold text-gray-900">{stat.number}</p>
                <p className="text-gray-600 text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Company Culture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="p-3">
              <div className="mb-3">
                <p className="text-red-500 font-semibold text-xs tracking-wide uppercase mb-1">
                  WHY JOIN US?
                </p>
                <h3 className="text-base font-bold text-gray-900 mb-1">
                  Company Culture
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Work in a dynamic environment where innovation thrives.
                </p>
              </div>
            </div>
            <div className="relative h-20 bg-gradient-to-r from-blue-100 to-purple-100">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-1.5 left-3 right-3">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center">
                      <Handshake className="h-3 w-3 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-xs">Team Collaboration</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefits & Quick Facts combined for mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-3 border border-gray-100"
          >
            <h3 className="text-base font-bold text-gray-900 mb-2">Perks & Facts</h3>
            <div className="space-y-1.5">
              {benefits.map((benefit) => (
                <div key={benefit.text} className="flex items-center space-x-2">
                  <benefit.icon className="h-3 w-3 text-blue-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900 text-xs">{benefit.text}</span>
                </div>
              ))}
              {quickStats.map((stat) => (
                <div key={stat.label} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <stat.icon className={`h-3 w-3 ${stat.color} flex-shrink-0`} />
                    <span className="font-medium text-gray-700 text-xs">{stat.label}</span>
                  </div>
                  <span className={`font-bold ${stat.color} text-xs`}>{stat.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>


        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100 text-center"
            >
              <div className="mb-3">
                <h2 className="text-lg font-bold text-gray-900 mb-1">
                  Welcome to Our <span className="text-blue-600">Team</span>
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We're building something amazing and we'd love for you to be part of it.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {companyStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`w-10 h-10 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-2`}>
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                    <p className="text-base font-bold text-gray-900 mb-0.5">{stat.number}</p>
                    <p className="text-gray-600 text-xs">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="p-4">
                <div className="mb-3">
                  <p className="text-red-500 font-semibold text-xs tracking-wide uppercase mb-1">
                    WHY JOIN US?
                  </p>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    Company Culture
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Work in a dynamic environment where innovation thrives and careers flourish!
                  </p>
                </div>
              </div>
              <div className="relative h-20 bg-gradient-to-r from-blue-100 to-purple-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center text-white/80">
                  <Users className="h-8 w-8 mx-auto opacity-50" />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-3 border border-gray-100"
            >
              <h3 className="text-base font-bold text-gray-900 mb-2">Why Join Us?</h3>
              <div className="space-y-3">
                {companyStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <div className={`p-1.5 rounded-lg ${stat.bgColor}`}>
                      <stat.icon className={`h-4 w-4 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="text-base font-bold text-gray-900">{stat.number}</p>
                      <p className="text-gray-600 text-xs">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-3 border border-gray-100"
            >
              <h3 className="text-base font-bold text-gray-900 mb-2">Benefits & Perks</h3>
              <div className="space-y-1.5">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.text}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-2 p-1 rounded-lg"
                  >
                    <benefit.icon className="h-3 w-3 text-blue-600 flex-shrink-0" />
                    <span className="font-medium text-gray-900 text-xs">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOurTeam;
