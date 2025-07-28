import React, { useRef, useState, useEffect } from 'react';
import Button from '../ui/Button'; // ✅ fixed path (remove the space between 'ui' and '/Button')
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useInView } from "framer-motion";
import ChatBot from '../ChatBot'; // ✅ ensure this matches actual filename

import mainhero from '../../animations/mainhero.lottie?url';
import RevolImg from "../../Assets/logo/revol-lims-logo.png";

const partnerLogos: string[] = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3YZGyB5IxenMY4-G6RpRsZ8fqUccK9twgBiHumO8ze3-YNkPuYiHSR1TZ_6hhQ7Dbews&usqp=CAU',
  'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg',
  'https://www.levelequity.com/wp-content/uploads/level-investment-fivetran-logo.png',
  'https://www.getdbt.com/_next/image?url=%2Fimg%2Flogos%2Fdbt-labs-logo.svg&w=256&q=75',
  'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
  'https://odoocdn.com/openerp_website/static/src/img/assets/png/odoo_logo.png',
  'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',
  RevolImg,
];

function useTypewriter(text: string, speed = 30, delay = 0) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed((prev) => {
          if (prev.length < text.length) {
            return prev + text[prev.length];
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, speed);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);
  return displayed;
}

const headline = "Empowering Data-Driven Decisions Across the Globe";
const subtext = "Harnessing the power of data analytics to transform businesses in USA, India, Oman, and Netharlands.";

const Hero: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  const headlineTyped = useTypewriter(headline, 30, 0);
  const subtextTyped = useTypewriter(subtext, 15, headline.length * 30 + 400);
  const highlight = "Driven Decisions Across the Globe";
  const highlightIndex = headlineTyped.indexOf(highlight);

  const carouselStyle = `
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .logo-track {
      animation: marquee 20s linear infinite;
    }
  `;

  return (
    <div className="pt-16 sm:pt-20 md:pt-36 pb-8 md:pb-16 bg-white relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: carouselStyle }} />

      {/* Main Content */}
      <div ref={ref} className="mx-auto px-4 max-w-[1200px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-10 md:gap-x-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl mx-auto lg:mx-0 flex flex-col"
          >
            <div className="flex items-center gap-3 bg-white rounded-full px-4 py-1 w-fit mb-4 mt-4 shadow-md border border-blue-900/40 backdrop-blur-sm">
              <img
                src={partnerLogos[0]}
                alt="Databricks Logo"
                className="h-11 w-11 object-contain"
              />
              <a
                href="https://www.databricks.com/partners"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#22396b] font-bold text-sm tracking-wide hover:underline"
              >
                Trinity-databricks consulting partner
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 text-[#22396b] min-h-[3.5em]">
              {highlightIndex === -1
                ? headlineTyped
                : <>
                    {headlineTyped.slice(0, highlightIndex)}
                    <span style={{ color: '#3d3dff' }}>
                      {headlineTyped.slice(highlightIndex, highlightIndex + highlight.length)}
                    </span>
                    {headlineTyped.slice(highlightIndex + highlight.length)}
                  </>
              }
            </h1>

            <p className="text-lg mb-4 text-[#22396b]" style={{ fontFamily: 'Roboto, sans-serif', minHeight: '2.5em' }}>
              {subtextTyped}
            </p>

            {/* ✅ Scroll to contact */}
            <a href="#contact">
              <Button
                variant="primary"
                size="lg"
                className="bg-[#22396b] hover:bg-[#3d3dff] text-base px-8 font-bold rounded-full text-white w-[250px] h-[56px]"
              >
                Connect with Us
              </Button>
            </a>
          </motion.div>

          {/* Right Animation */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 1.2, ease: "easeOut", type: "spring", stiffness: 60 }}
            className="flex justify-center items-center w-full h-full -mt-14"
          >
            <DotLottieReact
              src={mainhero}
              loop
              autoplay
              style={{ width: '100%', maxWidth: 560, height: 560 }}
            />
          </motion.div>
        </div>

        <div className="mt-8 md:mt-14 -mb-4 text-center">
          <p className="text-black font-bold text-lg sm:text-2xl md:text-2xl">
            Trusted by industry leaders in data and analytics
          </p>
        </div>
      </div>

      {/* Logo Carousel */}
      <section className="logo-carousel overflow-hidden relative mt-4 md:mt-8 pt-4 md:pt-6 pb-4 md:pb-8 w-screen bg-white">
        <div className="max-w-none mx-auto">
          <div className="logo-track flex items-center gap-10 md:gap-20 w-max px-4">
            {[...partnerLogos, ...partnerLogos].map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt={`Logo ${idx + 1}`}
                className="h-6 sm:h-8 md:h-12 w-auto object-contain transition"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      <ChatBot />
    </div>
  );
};

export default Hero;
