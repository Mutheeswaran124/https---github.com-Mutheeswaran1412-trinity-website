import { useRef, useState, ReactNode } from 'react';
import Section from '../ui/Section';

interface Card3DProps {
  children: ReactNode;
  containerClassName?: string;
}

const TechStack = () => {
  const handleScrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const technologies = [
    {
      name: 'Azure',
      logo: 'https://cdn.worldvectorlogo.com/logos/azure-1.svg',
      description: 'Cloud computing services for scalable, enterprise-grade solutions',
      gradient: 'from-blue-400 to-cyan-400',
      shadow: 'shadow-blue-500/25',
    },
    {
      name: 'Databricks',
      logo: 'https://1000logos.net/wp-content/uploads/2025/01/Databricks-Emblem.png',
      description: 'Unified data analytics platform for big data and AI',
      gradient: 'from-red-400 to-orange-400',
      shadow: 'shadow-red-500/25',
    },
    {
      name: 'DBT',
      logo: 'https://seeklogo.com/images/D/dbt-logo-500AB0BAA7-seeklogo.com.png',
      description: 'Data transformation tool enabling analytics engineering',
      gradient: 'from-orange-400 to-yellow-400',
      shadow: 'shadow-orange-500/25',
    },
    {
      name: 'FiveTran',
      logo: 'https://images.icon-icons.com/2699/PNG/512/fivetran_logo_icon_170149.png',
      description: 'Automated data integration for seamless data pipelines',
      gradient: 'from-green-400 to-emerald-400',
      shadow: 'shadow-green-500/25',
    },
    {
      name: 'Next.js',
      logo: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg',
      description: 'React framework for production-grade, fast, and scalable web applications.',
      gradient: 'from-gray-600 to-slate-600',
      shadow: 'shadow-gray-500/25',
    },
    {
      name: 'AWS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      description: 'Comprehensive cloud platform offering computing power, storage, and content delivery.',
      gradient: 'from-yellow-400 to-amber-400',
      shadow: 'shadow-yellow-500/25',
    },
    {
      name: 'Odoo',
      logo: 'https://cdn4.iconfinder.com/data/icons/logos-3/640/odoo_logo_rgb-512.png',
      description: 'Open-source business management software for ERP, CRM, accounting, e-commerce, inventory, and more.',
      gradient: 'from-purple-400 to-pink-400',
      shadow: 'shadow-purple-500/25',
    },
    {
      name: 'Java',
      logo: 'https://cdn.worldvectorlogo.com/logos/java.svg',
      description: 'Enterprise-grade programming language for building robust, scalable applications.',
      gradient: 'from-red-500 to-orange-500',
      shadow: 'shadow-red-500/25',
    },
    {
      name: 'Oracle',
      logo: 'https://cdn.worldvectorlogo.com/logos/oracle-6.svg',
      description: 'Industry-leading database management system for mission-critical enterprise data.',
      gradient: 'from-red-600 to-red-500',
      shadow: 'shadow-red-500/25',
    },
    {
      name: 'SAP',
      logo: 'https://cdn.worldvectorlogo.com/logos/sap.svg',
      description: 'Enterprise resource planning software for streamlined business operations.',
      gradient: 'from-blue-500 to-indigo-500',
      shadow: 'shadow-blue-500/25',
    },
  ];

  const Card3D = ({ children, containerClassName = '' }: Card3DProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 25;
      const y = (e.clientY - top - height / 2) / 25;
      containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      if (!containerRef.current) return;
      containerRef.current.style.transition = 'none';
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      if (!containerRef.current) return;
      containerRef.current.style.transition = 'transform 0.5s ease-out';
      containerRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)';
    };

    return (
      <div
        className={`perspective-1000 ${containerClassName}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={containerRef}
          className="relative preserve-3d w-full h-full transition-transform duration-500 ease-out"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className={`relative w-full h-full ${isHovered ? 'z-50' : ''}`}>
            {children}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Section
      id="tech-stack"
      title="Our Technology Stack"
      subtitle="Cutting-edge technologies powering our data solutions"
      className="bg-white text-gray-900 relative overflow-hidden font-sans"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23E5E7EB%22 fill-opacity=%220.3%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 relative z-10 mb-16">
        {technologies.map((tech, index) => (
          <Card3D key={index} containerClassName="h-64 w-full">
            <div className="group relative h-full w-full rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={tech.logo}
                  alt={`${tech.name} background`}
                  className="w-36 h-36 object-contain filter blur-2xl opacity-20 scale-150 group-hover:opacity-30 transition-opacity duration-500"
                />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-500"></div>
              <div className="relative h-full p-4 flex flex-col items-center justify-center text-center z-10">
                <div className="relative mb-3 group-hover:transform group-hover:scale-110 transition-transform duration-500">
                  <div className="relative flex items-center justify-center h-16 w-16 mx-auto">
                    <img
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      className="h-full w-full object-contain group-hover:drop-shadow-lg transition-all duration-500"
                    />
                  </div>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                  {tech.name}
                </h3>
                <p className="text-xs text-gray-600 leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-3">
                  {tech.description}
                </p>
                <div className={`absolute inset-0 rounded-2xl ${tech.shadow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-2 left-2 w-1 h-1 bg-blue-400/60 rounded-full animate-ping"></div>
                <div className="absolute top-3 right-3 w-0.5 h-0.5 bg-purple-400/60 rounded-full animate-pulse delay-300"></div>
                <div className="absolute bottom-3 left-3 w-1 h-1 bg-emerald-400/50 rounded-full animate-bounce delay-500"></div>
              </div>
            </div>
          </Card3D>
        ))}
      </div>

      <Card3D containerClassName="max-w-6xl mx-auto">
        <div className="group relative w-full rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 group-hover:from-blue-600/15 group-hover:to-purple-600/15 transition-all duration-500"></div>
          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl shadow-lg group-hover:shadow-xl transition-shadow duration-500"></div>
          <div className="relative p-8 md:p-12 z-10">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                  Elite Databricks Consulting Partner
                </h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed group-hover:text-gray-800 transition-colors duration-500">
                  Transform your data into AI-powered insights with our certified Databricks expertise.
                  Start your AI-driven transformation journey today.
                </p>
                <button
                  onClick={handleScrollToContact}
                  className="group/btn relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full text-lg hover:from-blue-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="relative z-10">Talk to Databricks Experts</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                </button>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col items-center p-4 rounded-2xl bg-gray-50/80 border border-gray-200 hover:bg-gray-100/80 transition-all duration-300 group/badge">
                    <a
                      href="https://www.databricks.com/learn/certification/data-engineer-associate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group-hover/badge:scale-110 transition-transform duration-300"
                    >
                      <img
                        src="https://www.databricks.com/sites/default/files/2024-05/associate-badge-de.png?v=1717145547"
                        alt="Data Engineer Associate Badge"
                        className="w-20 h-auto object-contain filter drop-shadow-md"
                      />
                    </a>
                    <span className="mt-3 text-sm font-semibold text-gray-900 text-center">
                      10+ Associate Engineers
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-2xl bg-gray-50/80 border border-gray-200 hover:bg-gray-100/80 transition-all duration-300 group/badge">
                    <a
                      href="https://www.databricks.com/learn/certification/data-engineer-professional"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group-hover/badge:scale-110 transition-transform duration-300"
                    >
                      <img
                        src="https://www.databricks.com/sites/default/files/2024-05/professional-badge-de.png?v=1717145841"
                        alt="Data Engineer Professional Badge"
                        className="w-20 h-auto object-contain filter drop-shadow-md"
                      />
                    </a>
                    <span className="mt-3 text-sm font-semibold text-gray-900 text-center">
                      Professional Engineers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 rounded-3xl shadow-lg shadow-blue-500/0 group-hover:shadow-blue-500/10 transition-all duration-500 -z-10"></div>
        </div>
      </Card3D>
    </Section>
  );
};

export default TechStack;