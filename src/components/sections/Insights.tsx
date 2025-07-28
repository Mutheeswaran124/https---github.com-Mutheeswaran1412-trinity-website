import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Tag } from 'lucide-react';

const insights = [
  {
    title: 'Leveraging Big Data for Business Growth',
    category: 'Data Strategy',
    date: 'June 15, 2025',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'Discover how businesses are using big data analytics to drive growth and innovation.',
    url: 'https://www.ibm.com/topics/big-data-analytics',
  },
  {
    title: 'The Future of Data Engineering',
    category: 'Technology',
    date: 'May 28, 2025',
    image: 'https://images.pexels.com/photos/374899/pexels-photo-374899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'Explore emerging trends reshaping how organizations handle data.',
    url: 'https://www.montecarlodata.com/blog-the-future-of-the-data-engineer/',
  },
  {
    title: 'AI and Machine Learning in Healthcare',
    category: 'Industry Insights',
    date: 'April 10, 2025',
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'How AI and machine learning are transforming patient care and research.',
    url: 'https://eithealth.eu/news-article/machine-learning-in-healthcare-uses-benefits-and-pioneers-in-the-field/',
  },
  {
    title: 'Predictive Analytics in Financial Services',
    category: 'Business Intelligence',
    date: 'March 18, 2025',
    image: 'https://images.pexels.com/photos/4386326/pexels-photo-4386326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'Financial institutions are leveraging predictive analytics for smarter decisions.',
    url: 'https://www.sas.com/en_us/insights/analytics/predictive-analytics.html',
  },
  {
    title: 'Ethics and Transparency in AI Systems',
    category: 'Tech Policy',
    date: 'February 22, 2025',
    image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'A look at ethical frameworks and the demand for accountable AI.',
    url: 'https://ai.google/responsibility/responsible-ai-practices/',
  },
  {
    title: 'Cloud-native Architecture for Scalable AI',
    category: 'Architecture',
    date: 'January 30, 2025',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'Unlock AI potential using cloud-native design for scalability and speed.',
    url: 'https://www.redhat.com/en/topics/cloud-native-apps',
  },
];

// Wobble Card Component
type WobbleCardProps = {
  children: React.ReactNode;
  className?: string;
};

const WobbleCard = ({ children, className = '' }: WobbleCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
          : 'translate3d(0px, 0px, 0)',
        transition: 'transform 0.1s ease-out',
      }}
      className={`mx-auto w-full bg-white relative rounded-2xl overflow-hidden h-full group cursor-pointer ${className}`}
    >
      <div
        className="relative h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] sm:mx-0 sm:rounded-2xl overflow-hidden"
        style={{
          boxShadow:
            '0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)',
        }}
      >
        <motion.div
          style={{
            transform: isHovering
              ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
              : 'translate3d(0px, 0px, 0) scale3d(1, 1, 1)',
            transition: 'transform 0.1s ease-out',
          }}
          className="h-full"
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
};

const Insights = () => {
  useEffect(() => {
    if (window.location.hash === '#insights') {
      const section = document.getElementById('insights');
      if (section) {
        const yOffset = -80; // adjust for fixed header height if needed
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <section
      id="insights"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Insights & Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends and resources
          </p>
        </div>

        {/* Background Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-bounce" style={{ animationDuration: '3s' }} />
        </div>

        {/* Insights Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {insights.map((insight, index) => (
            <WobbleCard key={index}>
              <div className="relative h-full flex flex-col overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                      <Tag className="w-3 h-3" />
                      {insight.category}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                      <Calendar className="w-3 h-3" />
                      {insight.date}
                    </div>
                  </div>
                </div>

                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{insight.excerpt}</p>
                  <a
                    href={insight.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-sm hover:from-blue-700 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Read More
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-indigo-400/20 to-blue-500/20 rounded-full blur-lg group-hover:scale-125 transition-transform duration-500" />
              </div>
            </WobbleCard>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Insights;
