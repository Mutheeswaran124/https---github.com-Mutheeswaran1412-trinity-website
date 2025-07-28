import React from 'react';

// Added more testimonials for a better continuous loop effect
const testimonialsData = [
  {
    name: 'Michael Rodriguez',
    title: 'CTO at InnovateSphere',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    quote: "The implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable."
  },
  {
    name: 'Emily Watson',
    title: 'Operations Director at CloudScale',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple."
  },
  {
    name: 'David Chen',
    title: 'Lead Developer at TechFlow',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    quote: "Outstanding support and robust architecture. It's been a game-changer for our development workflow."
  },
  {
    name: 'Sarah Johnson',
    title: 'Marketing Head at NextGen',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    quote: "Their data-driven approach to marketing gave us insights we never had before. Our campaign ROI has tripled."
  },
  {
    name: 'James Lee',
    title: 'Founder of DataDrive',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    quote: "The data engineering team is top-notch. They built a scalable pipeline that handles millions of events per day without a hitch."
  }
];

// Reusable component for each testimonial card
const TestimonialCard = ({ name, title, image, quote }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 w-96 flex-shrink-0">
    <div className="flex items-center mb-6">
      <img 
        src={image} 
        alt={name} 
        className="w-16 h-16 rounded-full object-cover mr-4"
      />
      <div>
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-600">{title}</p>
      </div>
    </div>
    <p className="text-gray-700 mb-6 leading-relaxed">
      "{quote}"
    </p>
    <div className="flex text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  </div>
);

function TestimonialsSection() {
  return (
    <div className="min-h-screen bg-white flex items-center">
      <div className="w-full">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-blue-600 mb-4 tracking-tight">
              Trusted By Industry Leaders
            </h1>
            <h2 className="text-3xl font-bold text-blue-500 mb-6 uppercase tracking-wider">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              See how we've helped companies achieve breakthrough growth with our integrated solutions.
            </p>
          </div>
          
          {/* Wrapper with overflow-hidden and faded edges */}
          <div className="relative w-full overflow-hidden pb-8 group">
            {/* Faded edges */}
            <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
            
            {/* The scrolling container. The animation is paused on hover. */}
            <div className="flex animate-scroll group-hover:[animation-play-state:paused]">
              {/* The first set of testimonials. The margin-right (mr-8) must match the spacing below. */}
              <div className="flex space-x-8 min-w-max mr-8">
                {testimonialsData.map((testimonial, index) => (
                  <TestimonialCard key={`testimonial-a-${index}`} {...testimonial} />
                ))}
              </div>

              {/* The second, duplicated set of testimonials to create the seamless loop */}
              <div className="flex space-x-8 min-w-max">
                {testimonialsData.map((testimonial, index) => (
                  <TestimonialCard key={`testimonial-b-${index}`} {...testimonial} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* The animation moves the container to the left by the width of the first set of cards PLUS the margin */
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 2rem)); } /* 2rem = 32px (the mr-8 value) */
        }
        
        .animate-scroll {
          /*
            - The duration (60s) controls the speed. Larger number = slower.
            - 'linear' ensures constant speed.
            - 'infinite' makes it loop forever.
          */
          animation: scroll 60s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default TestimonialsSection;
