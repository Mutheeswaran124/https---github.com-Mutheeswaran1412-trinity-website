import React, { useRef, useState, useEffect } from 'react';
import { Mail, Phone, Calendar, Send, X, Linkedin } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import contact from '../../animations/contact.lottie?url';
import emailjs from '@emailjs/browser';
import ReactCountryFlag from 'react-country-flag';

// Section Component
const Section: React.FC<{ id: string; title: string; children: React.ReactNode; className?: string }> = ({
  id,
  title,
  children,
  className = '',
}) => (
  <section id={id} className={`py-16 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

// Button Component
type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  onClick,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary:
      'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    secondary:
      'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-gray-500',
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [showCalendly, setShowCalendly] = useState(false);
  const [showClose, setShowClose] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    setIsLoading(true);
    setStatusMessage('');

    try {
      const result = await emailjs.sendForm(
        'service_3z01v3t',
        'template_5pv3vhp',
        form,
        'OOzmxXaJq7gfK2GU_'
      );
      console.log('Email sent successfully:', result.text);
      setStatusMessage("✅ Message sent successfully! We'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatusMessage("❌ Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBookMeeting = () => {
    setShowCalendly(true);
  };

  useEffect(() => {
    if (showCalendly) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [showCalendly]);

  useEffect(() => {
    if (!showCalendly) return;

    const handleCalendlyMessage = (event: MessageEvent) => {
      if (
        event.origin === 'https://calendly.com' &&
        event.data.event
      ) {
        if (event.data.event === 'calendly.date_and_time_selected') {
          setShowClose(false);
        }
        if (
          event.data.event === 'calendly.profile_page_viewed' ||
          event.data.event === 'calendly.event_type_viewed' ||
          event.data.event === 'calendly.event_scheduled'
        ) {
          setShowClose(true);
        }
      }
    };

    window.addEventListener('message', handleCalendlyMessage);
    return () => window.removeEventListener('message', handleCalendlyMessage);
  }, [showCalendly]);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-sans">
      {/* Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-4000" />
      </div>

      <Section id="contact" title="Get in Touch" className="relative z-10 font-sans">
        <div className="flex justify-center mb-12">
          <DotLottieReact src={contact} loop autoplay style={{ width: 210, height: 210 }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* LEFT - Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl mr-4 shadow-lg group-hover:scale-105 transition-transform">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h4>
                    <p className="text-gray-600 mb-2">General Inquiries</p>
                    <a href="mailto:hello@trinitetech.com" className="text-blue-600 hover:text-blue-700 font-medium">
                      hello@trinitetech.com
                    </a>
                    <p className="text-gray-600 mt-3 mb-1">Business Development</p>
                    <a href="mailto:sales@trinitetech.com" className="text-blue-600 hover:text-blue-700 font-medium">
                      sales@trinitetech.com
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-blue-700 to-blue-800 p-3 rounded-xl mr-4 shadow-lg group-hover:scale-105 transition-transform">
                    <Linkedin size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Connect with Us</h4>
                    <p className="text-gray-600 mb-2">Follow us on LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/company/trinity-technology-solutions" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Trinity Technology Solutions
                    </a>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl mr-4 shadow-lg group-hover:scale-105 transition-transform">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h4>
                    
                    {/* USA Office */}
                    <div className="flex items-center space-x-3">
                      <ReactCountryFlag countryCode="US" svg style={{ width: '2em', height: '2em' }} className="mr-2" /> 
                      <div>
                        <p className="text-gray-600 text-sm font-medium mb-2">USA Office</p>
                        <a href="tel:+12142068558" className="text-blue-600 hover:text-blue-700 font-medium">
                          +1 214-206-8558
                        </a>
                      </div>
                    </div>
                    
                    {/* India Office */}
                    <div className="flex items-center space-x-3">
                      <ReactCountryFlag countryCode="IN" svg style={{ width: '2em', height: '2em' }} className="mr-2" />
                      <div>
                        <p className="text-gray-600 text-sm font-medium mb-2">India Office</p>
                        <a href="tel:+919791273026" className="text-blue-600 hover:text-blue-700 font-medium">
                          +91 9791273026
                        </a>
                      </div>
                    </div>
                    
                    {/* Oman Office */}
                    <div className="flex items-center space-x-3">
                      <ReactCountryFlag countryCode="OM" svg style={{ width: '2em', height: '2em' }} className="mr-2" />
                      <div>
                        <p className="text-gray-600 text-sm font-medium mb-2">Oman Office</p>
                        <a href="tel:+96892416321" className="text-blue-600 hover:text-blue-700 font-medium">
                          +968 92416321
                        </a>
                      </div>
                    </div>
                    
                    {/* Netherlands Office */}
                    <div className="flex items-center space-x-3">
                      <ReactCountryFlag countryCode="NL" svg style={{ width: '2em', height: '2em' }} className="mr-2" />
                      <div>
                        <p className="text-gray-600 text-sm font-medium mb-2">Netherlands Office</p>
                        <a href="tel:+31108990639" className="text-blue-600 hover:text-blue-700 font-medium">
                          +31 10899 0639
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Booking */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-orange-500 to-pink-500 p-3 rounded-xl mr-4 shadow-lg">
                  <Calendar size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Schedule a Consultation</h4>
              </div>
              <p className="text-gray-600 mb-6">
                Book a free 30-minute consultation with one of our data experts to discuss your project.
              </p>
              <Button variant="primary" className="w-full" onClick={handleBookMeeting}>
                <Calendar size={18} className="mr-2" />
                Book a Meeting
              </Button>
              {showCalendly && (
                <div className="mt-8">
                  <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/agil-george-trinitetech/30min"
                    style={{ minWidth: '320px', height: '700px' }}
                  ></div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT - Form */}
          <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">
              Send Us a Message
            </h3>

            {statusMessage && (
              <div
                className={`mb-4 p-4 rounded-md text-sm font-medium ${
                  statusMessage.includes('successfully')
                    ? 'bg-green-100 text-green-800 border border-green-300'
                    : 'bg-red-100 text-red-800 border border-red-300'
                }`}
              >
                {statusMessage}
              </div>
            )}

            <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    required
                    className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="from_email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    required
                    className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Please describe how we can assist you..."
                />
              </div>

              <input type="hidden" name="to_email" value="hello@trinitetech.com" />

              <Button variant="primary" className="w-full text-lg py-4" type="submit">
                <Send size={20} className="mr-2" />
                {isLoading ? 'Sending...' : 'Send Message'}
              </Button>

              <p className="text-center text-sm text-gray-500 mt-4">
                We'll respond within 24 hours with a custom growth plan for your business.
              </p>
            </form>
          </div>
        </div>
      </Section>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm font-sans">
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl mx-4 p-0">
            {showClose && (
              <button
                className="absolute top-20 left-6 text-gray-500 hover:text-gray-800 z-10"
                onClick={() => setShowCalendly(false)}
                aria-label="Close"
              >
                <X size={28} />
              </button>
            )}
            <div className="p-0">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/agil-george-trinitetech/30min"
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Animations and Custom Font */}
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
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

export default Contact;