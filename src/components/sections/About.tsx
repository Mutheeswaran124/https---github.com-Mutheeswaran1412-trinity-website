import React, { useState } from 'react';
import {
  Users,
  TrendingUp,
  Globe,
  Database,
  Lightbulb,
  Award,
  Earth,
  Handshake,
  CheckCircle,
  Clock,
  Headphones,
  Heart,
  Zap,
  MapPin,
  Building,
  Calendar,
  Monitor
} from 'lucide-react';
import ReactCountryFlag from 'react-country-flag';

import texasImg from '../../Assets/texas.jpg'; 
import chennaiImg from '../../Assets/chennai.jpg';
import hagueImg from '../../Assets/hague.jpg';
import muscatImg from '../../Assets/muscat oman.jpg';

// Timeline Component for Global Network
interface TimelinePoint {
  id: string;
  establishedYear: string;
  city: string;
  country: string;
  isActive: boolean;
  flag: string;
  backgroundImage?: string;
}

interface TimelineProps {
  points: TimelinePoint[];
  onPointClick?: (point: TimelinePoint) => void;
}

const Timeline: React.FC<TimelineProps> = ({ points, onPointClick }) => {
  return (
    <div className="relative w-full bg-white/90 backdrop-blur-xl rounded-2xl border border-white/20 p-8 shadow-lg mb-12 font-sans">
      {/* Timeline Line */}
      <div className="relative">
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-300 via-blue-500 to-gray-300"></div>
        {/* Timeline Points and Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point) => (
            <div key={point.id} className="relative">
              {/* Timeline Dot */}
              <div className="flex justify-center mb-6">
                <div
                  className={`relative w-4 h-4 rounded-full border-4 border-white cursor-pointer transition-all duration-300 transform hover:scale-125 shadow-lg ${
                    point.isActive
                      ? 'bg-blue-500 shadow-blue-500/50'
                      : 'bg-gray-400 hover:bg-blue-500'
                  }`}
                  onClick={() => onPointClick && onPointClick(point)}
                >
                  {point.isActive && (
                    <div className="absolute inset-0 w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                  )}
                </div>
              </div>
              {/* Location Card */}
              <div
                className={`relative overflow-hidden rounded-xl border transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                  point.isActive
                    ? 'border-blue-300 shadow-lg shadow-blue-500/20'
                    : 'border-gray-200 hover:border-blue-300 hover:shadow-md hover:shadow-blue-500/10'
                }`}
                onClick={() => onPointClick && onPointClick(point)}
              >
                {/* Country Background Image */}
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={point.backgroundImage}
                    alt={`${point.country} background`}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  {/* Active indicator overlay */}
                  {point.isActive && (
                    <div className="absolute top-3 right-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
                    </div>
                  )}
                </div>
                {/* Card Content */}
                <div className={`p-4 transition-all duration-500 ${
                  point.isActive
                    ? 'bg-gradient-to-br from-blue-50 to-indigo-50'
                    : 'bg-white hover:bg-blue-50/50'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900 text-lg">{point.city}</h3>
                    <ReactCountryFlag
                      countryCode={point.flag}
                      svg
                      style={{
                        width: '2em',
                        height: '2em',
                      }}
                      title={point.country}
                    />
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{point.country}</p>
                  {/* Active Indicator */}
                  {point.isActive && (
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-blue-600 font-medium">Active Hub</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const [activeLocation, setActiveLocation] = useState('chennai');

  const stats = [
    { icon: Users, value: '50+', label: 'Projects Delivered', color: 'from-blue-500 to-purple-600' },
    { icon: TrendingUp, value: '25+', label: 'Years Experience', color: 'from-purple-500 to-pink-600' },
    { icon: Globe, value: '4+', label: 'Countries Served', color: 'from-pink-500 to-red-600' },
    { icon: Database, value: '100+', label: 'Combined Experience', color: 'from-red-500 to-orange-600' },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace the power of emerging technologies to create solutions that are smarter, faster, and future-ready.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in everything we do — from the code we write to the relationships we build. Good isn\'t good enough.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Earth,
      title: 'Global Impact',
      description: 'With a presence across multiple countries, we think beyond borders — solving challenges that create value for businesses and society worldwide.',
      color: 'from-pink-500 to-red-600'
    },
    {
      icon: Handshake,
      title: 'Collaboration',
      description: 'We grow stronger together — across teams, with clients, and through partnerships. We believe in open minds and shared wins.',
      color: 'from-red-500 to-orange-600'
    }
  ];

  const locations = [
    {
      id: 'usa',
      name: 'United States',
      city: 'Plano, Texas',
      establishedYear: '2020',
      address: '300 Interpace Parkway, Plano, TX',
      employees: '50+',
      services: ['Cloud Solutions', 'AI Development', 'Cybersecurity'],
      timezone: 'CST',
      description: 'Our flagship headquarters driving innovation in cloud technologies and AI solutions.',
      specialization: 'Enterprise Solutions',
      flag: 'US',
      backgroundImage: texasImg,
    },
    {
      id: 'chennai',
      name: 'India',
      city: 'Chennai, Tamil Nadu',
      establishedYear: '2021',
      address: ' Ekkatuthangal, Chennai, Tamil Nadu',
      employees: '50+',
      services: ['Software Development', 'Data Analytics', 'Mobile Apps'],
      timezone: 'IST',
      description: 'Our largest development center focusing on cutting-edge software solutions.',
      specialization: 'Development Hub',
      flag: 'IN',
      backgroundImage: chennaiImg,
    },
    {
      id: 'oman',
      name: 'Oman',
      city: 'Muscat',
      establishedYear: '2022',
      address: 'Muscat, Oman',
      employees: '50+',
      services: ['Digital Transformation', 'IT Consulting', 'Support'],
      timezone: 'GST',
      description: 'Strategic Middle East operations center providing regional expertise.',
      specialization: 'Consulting Services',
      flag: 'OM',
      backgroundImage: muscatImg,
    },
    {
      id: 'netherlands',
      name: 'Netherlands',
      city: 'The Hague',
      establishedYear: '2023',
      address: 'The Hague, Netherlands',
      employees: '50+',
      services: ['Fintech Solutions', 'Blockchain', 'IoT Development'],
      timezone: 'CET',
      description: 'European innovation center specializing in financial technology.',
      specialization: 'Fintech Innovation',
      flag: 'NL',
      backgroundImage: hagueImg,
    }
  ];

  const activeOffice = locations.find(l => l.id === activeLocation) || locations[1];

  // Timeline points for the integrated global network section
  const timelinePoints = locations.map(l => ({
    id: l.id,
    establishedYear: l.establishedYear,
    city: l.city,
    country: l.name,
    isActive: l.id === activeLocation,
    flag: l.flag,
    backgroundImage: l.backgroundImage
  }));

  const handleTimelineClick = (point: TimelinePoint) => {
    if (point.id) {
      setActiveLocation(point.id);
    }
  };

  const clientBenefits = [
    { icon: CheckCircle, text: 'Certified Databricks Partnership & expertise', color: 'text-green-500' },
    { icon: Award, text: 'Dedicated data engineering specialists for every project', color: 'text-blue-500' },
    { icon: Clock, text: 'Agile delivery with transparent project management', color: 'text-purple-500' },
    { icon: Headphones, text: '24/7 support and strategic consultation calls', color: 'text-pink-500' },
  ];

  return (
    <div
      id="about"
      className="min-h-screen bg-white relative overflow-hidden font-sans"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 font-sans">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="flex flex-col items-center mb-8">
            <img
              src="https://trinitetech.com/wp-content/uploads/2024/02/Trinity-Logo-1.svg"
              alt="Trinity Logo"
              className="h-16 mb-6 filter brightness-0 invert hue-rotate-180 saturate-200"
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              Welcome to Trinity Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl text-purple-600 font-medium max-w-4xl mx-auto leading-relaxed">
              Your Global Partner in Data, AI & Digital Transformation
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full flex flex-col justify-center min-h-[200px] font-sans">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-semibold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium text-center leading-tight px-2">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Us Section */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 font-sans">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              About Us
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Founded in 2020, Trinity began as a specialist staffing company — but we didn't stop there. Born from the vision of a founder with over 25 years of HR leadership and backed by partners with 25+ years of deep data expertise, we're built on the rare blend of people insight and technical mastery.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With a sharp understanding of talent, technology, and business challenges, we've evolved into a full-scale software solutions provider. Today, we stand at the forefront of Data & AI innovation, helping businesses transform with confidence.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              This synergy is our biggest strength — and your biggest advantage. From data engineering and AI-driven platforms to enterprise software and digital products, our diverse team delivers outcomes that matter — consistently, efficiently, and with heart.
            </p>
            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-l-4 border-blue-500 mb-8">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-red-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                We don't just build tech.<br />
                <span className="font-medium">We build trust. We build the future.</span>
              </p>
            </div>
            {/* Unique Value Proposition */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-purple-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">What Sets Us Apart</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The rare blend of people insight and technical mastery — combining 25+ years of HR leadership with deep data expertise to deliver solutions that truly understand both technology and human needs.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-10 -left-10 bg-white rounded-xl p-8 shadow-lg border border-gray-100 max-w-sm font-sans">
              <h4 className="font-semibold text-gray-900 mb-4 text-lg">Why Clients Choose Us</h4>
              <div className="space-y-4">
                {clientBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                    <span className="text-base text-gray-700">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        {/* Partnership Highlight */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 mb-24 text-white text-center">
          <h3 className="text-2xl font-semibold mb-4">Official Databricks Partner</h3>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Our strategic partnership with Databricks enables us to deliver cutting-edge lakehouse architecture
            and advanced analytics solutions that transform how organizations leverage their data assets.
          </p>
        </div>
        {/* Values Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The DNA of how we think, build, and lead.
          </p>
        </div>
        {/* Fixed Grid Layout - Proper 4 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col font-sans">
                <div className={`w-14 h-14 lg:w-16 lg:h-16 mb-4 lg:mb-6 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 lg:mb-4">{value.title}</h3>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed flex-grow">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Global Network Section */}
        <div className="mt-32 mb-32">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <Globe className="text-blue-600 mr-4 w-10 h-10 animate-spin-slow" />
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
              </div>
              <h2 className="text-3xl font-semibold text-gray-900">Our Global Network</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powering digital transformation across four continents with cutting-edge technology
            </p>
          </div>
          {/* Interactive Timeline */}
          <Timeline points={timelinePoints} onPointClick={handleTimelineClick} />
          {/* Enhanced Active Office Details with Side Navigation */}
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Office Selector Sidebar */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Monitor className="mr-3 text-blue-600" size={24} />
                Live Locations
              </h3>
              {locations.map((location) => (
                <div
                  key={location.id}
                  className={`relative overflow-hidden rounded-xl border transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                    activeLocation === location.id
                      ? 'border-blue-300 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg shadow-blue-500/20'
                      : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md hover:shadow-blue-500/10'
                  }`}
                  onClick={() => setActiveLocation(location.id)}
                >
                  <div className="relative p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          <ReactCountryFlag
                            countryCode={location.flag}
                            svg
                            style={{
                              width: '1.5em',
                              height: '1.5em',
                            }}
                            className="mr-2"
                            title={location.name}
                          />
                          <h4 className="text-sm font-bold text-gray-800">{location.city}</h4>
                        </div>
                        <p className="text-gray-600 text-xs ml-8">{location.name}</p>
                      </div>
                      <div className="text-right ml-2">
                        <p className="text-gray-500 text-xs font-medium">{location.employees}</p>
                        <p className="text-gray-400 text-xs">{location.timezone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Main Office Details */}
            <div className="lg:col-span-9">
              <div className="relative overflow-hidden bg-white/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg font-sans">
                <div className="absolute inset-0">
                  <img
                    src={activeOffice.backgroundImage}
                    alt={`${activeOffice.name} background`}
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/95"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white/90"></div>
                </div>
                <div className="relative z-10 p-6">
                  {/* Office Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <div className="flex items-center mb-3">
                        <ReactCountryFlag
                          countryCode={activeOffice.flag}
                          svg
                          style={{
                            fontSize: '2.5em',
                            lineHeight: '2.5em',
                          }}
                          className="mr-4"
                          title={activeOffice.name}
                        />
                        <h3 className="text-2xl font-bold text-gray-900">{activeOffice.name} Hub</h3>
                      </div>
                      <p className="text-gray-700 font-medium text-lg">{activeOffice.description}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                      <span className="text-green-600 font-medium">Online</span>
                    </div>
                  </div>
                  {/* Office Stats Grid */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4 p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-white/30 shadow-sm">
                        <MapPin className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">Address</p>
                          <p className="text-gray-700 leading-relaxed">{activeOffice.address}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-white/30 shadow-sm">
                        <Calendar className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">Established</p>
                          <p className="text-gray-700">{activeOffice.establishedYear}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4 p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-white/30 shadow-sm">
                        <Users className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">Team Size</p>
                          <p className="text-gray-700">{activeOffice.employees} professionals</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-white/30 shadow-sm">
                        <Building className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">Timezone</p>
                          <p className="text-gray-700">{activeOffice.timezone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
    
      {/* Custom Styles */}
     <style>{`
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-spin-slow {
    animation: spin-slow 8s linear infinite;
  }
  .font-sans {
    font-family: 'Roboto', 'Arial', 'Helvetica Neue', Arial, sans-serif !important;
    font-style: normal !important;
    font-weight: 400 !important;
    letter-spacing: 0.01em;
  }
`}</style>
    </div>
  );
};

export default About;