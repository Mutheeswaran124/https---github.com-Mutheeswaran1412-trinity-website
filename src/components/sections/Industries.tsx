import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Industries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const industries = [
    {
      id: 'healthcare',
      name: 'Healthcare',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
      description: 'Helping healthcare providers improve patient outcomes through data-driven insights and predictive analytics.',
      caseStudy: 'Reduced hospital readmission rates by 25% through predictive analytics and patient risk profiling.',
      category: 'Medical Technology'
    },
    {
      id: 'finance',
      name: 'Finance',
      image: 'https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg',
      description: 'Enabling financial institutions to make informed decisions, detect fraud, and enhance customer experiences.',
      caseStudy: 'Implemented real-time fraud detection system that reduced fraudulent transactions by 60% for a leading banking institution.',
      category: 'Financial Services'
    },
    {
      id: 'retail',
      name: 'Retail',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg',
      description: 'Optimizing inventory management, personalizing customer experiences, and forecasting trends for retailers.',
      caseStudy: 'Developed demand forecasting model that improved inventory efficiency by 30% and reduced stockouts by 45%.',
      category: 'E-commerce'
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      image: 'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg',
      description: 'Enhancing operational efficiency, quality control, and predictive maintenance in manufacturing processes.',
      caseStudy: 'Implemented IoT analytics platform resulting in 40% reduction in equipment downtime and 15% increase in production efficiency.',
      category: 'Industrial IoT'
    },
    {
      id: 'telecom',
      name: 'Telecommunications',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg',
      description: 'Optimizing network performance, customer segmentation, and service quality for telecom providers.',
      caseStudy: 'Reduced customer churn by 18% through predictive analytics and personalized retention strategies.',
      category: 'Network Solutions'
    },
    {
      id: 'it',
      name: 'Information Technology',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
      description: 'Providing innovative solutions for software development, cybersecurity, and IT infrastructure management.',
      caseStudy: 'Implemented AI-driven automation reducing IT support ticket volume by 50%.',
      category: 'Digital Innovation'
    },
    {
      id: 'bfsi',
      name: 'BFSI',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg',
      description: 'Supporting banking, financial services, and insurance firms with advanced risk management and analytics.',
      caseStudy: 'Enhanced customer experience through personalized AI-driven financial recommendations.',
      category: 'Banking & Insurance'
    },
    {
      id: 'engineering',
      name: 'Engineering',
      image: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg',
      description: 'Driving innovation and efficiency in engineering sectors through smart design and data-driven processes.',
      caseStudy: 'Developed AI-powered design tools reducing prototyping time by 30%.',
      category: 'Smart Engineering'
    },
    {
      id: 'renewable',
      name: 'Renewable Energy',
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg',
      description: 'Leveraging data-driven insights to optimize sustainable energy solutions and reduce carbon footprints.',
      caseStudy: 'Developed predictive maintenance models reducing wind turbine downtime by 35%.',
      category: 'Clean Energy'
    },
    {
      id: 'oilgas',
      name: 'Oil & Gas',
      image: 'https://images.pexels.com/photos/3855961/pexels-photo-3855961.jpeg',
      description: 'Enhancing operational efficiency, risk management, and safety in oil and gas industries.',
      caseStudy: 'Implemented IoT-driven safety monitoring reducing hazardous incidents by 40%.',
      category: 'Energy Solutions'
    }
  ];

  const scrollToCard = (index: number) => {
    if (carouselRef.current) {
      const card = carouselRef.current.children[index] as HTMLElement;
      const scrollPosition = card.offsetLeft;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handleNext = () => {
    const nextIndex = currentIndex < industries.length - 1 ? currentIndex + 1 : 0;
    scrollToCard(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : industries.length - 1;
    scrollToCard(prevIndex);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.pageX - (carouselRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;
    setDragDistance(Math.abs(walk));
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragDistance(0);
  };

  const handleLearnMore = (industryId: string) => {
    navigate(`/industries#${industryId}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const card = carouselRef.current.children[0] as HTMLElement;
        const cardWidth = card?.offsetWidth || 320;
        const scrollLeft = carouselRef.current.scrollLeft;
        const newIndex = Math.round(scrollLeft / cardWidth);
        setCurrentIndex(newIndex);
      }
    };

    const carousel = carouselRef.current;
    carousel?.addEventListener('scroll', handleScroll);

    return () => {
      carousel?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="industries" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Transform</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Delivering cutting-edge solutions across diverse sectors with data-driven insights and innovative technology.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <button onClick={handlePrev} className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition hover:scale-110 border border-gray-100" aria-label="Previous industry">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button onClick={handleNext} className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition hover:scale-110 border border-gray-100" aria-label="Next industry">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              className={`min-w-[300px] h-[480px] rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 hover:-translate-y-2 cursor-pointer group relative overflow-hidden ${
                index === currentIndex ? 'ring-2 ring-white ring-opacity-50' : ''
              }`}
              style={{
                backgroundImage: `url(${industry.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent transition-all duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white font-sans space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-white self-start">
                  {industry.category}
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold leading-tight text-white drop-shadow-md">{industry.name}</h3>
                  <p className="text-sm leading-relaxed text-white drop-shadow-md">{industry.description}</p>
                 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-xs text-white drop-shadow-sm">
  <h4 className="font-semibold mb-2 text-white">Success Story</h4>
  <p>{industry.caseStudy}</p>
</div>

                  <button
                    onClick={() => {
                      if (dragDistance < 5) handleLearnMore(industry.id);
                    }}
                    className="w-full flex justify-center items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-xl hover:bg-white/20 transition transform hover:scale-105 border border-white/30"
                  >
                    <span className="font-semibold text-sm">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {industries.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                index === currentIndex ? 'bg-blue-600 scale-110' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
