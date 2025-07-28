import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true); // Always start with greeting visible
  const [greetingDismissed, setGreetingDismissed] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Hi! I'm Trinity, your digital transformation assistant from Trinity Technology Solutions. I can help you with our IT consulting, software development, cloud solutions, data engineering services, and more. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickActions = [
    "What does Trinity Technology Solutions do?",
    "Databricks Partnership",
    "Contact Information",
    "Career Opportunities",
    "Marketing Services",
    "Schedule a Meeting"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Show greeting immediately when component mounts and keep it visible
  useEffect(() => {
    if (!greetingDismissed) {
      setShowGreeting(true);
    }
  }, [greetingDismissed]);

  const handleChatOpen = () => {
    setIsOpen(true);
    // Don't hide greeting when opening chat - let user manually dismiss it
  };

  const handleGreetingClick = () => {
    setIsOpen(true);
    // Keep greeting visible even when opening chat
  };

  const handleGreetingDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowGreeting(false);
    setGreetingDismissed(true);
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(text.trim());
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
   
    // Company Information
    if (input.includes('what does trinity') || input.includes('what do you do') || input.includes('tell me about trinity')) {
      return "Trinity Technology Solutions is a digital transformation company offering IT consulting, software development, cloud solutions, and data engineering services tailored for enterprises across various industries.";
    }
   
    if (input.includes('location') || input.includes('where are you') || input.includes('office')) {
      return "We are headquartered in Chennai, India, and serve clients globally across the U.S., Europe, and Asia-Pacific regions. Our office hours are Monday to Friday, 9:00 AM to 6:00 PM IST.";
    }
   
    if (input.includes('contact') || input.includes('reach') || input.includes('email') || input.includes('talk')) {
      return "You can contact us by emailing hello@trinitetech.com or using the contact form on our website. For meetings, partnerships, or any inquiries, just drop us an email and we'll assist you promptly!";
    }
   
    if (input.includes('schedule') || input.includes('meeting') || input.includes('appointment')) {
      return "Please submit a request via our Contact page or send an email to hello@trinitetech.com and we'll assist you in scheduling a meeting with our team.";
    }
   
    if (input.includes('brochure') || input.includes('company profile') || input.includes('profile')) {
      return "Yes! Drop us an email at hello@trinitetech.com and we'll send over our latest company profile and brochure.";
    }
   
    if (input.includes('collaboration') || input.includes('partnership') || input.includes('partner')) {
      return "For strategic partnerships and collaborations, please reach out to us at hello@trinitetech.com. We're partnered with Databricks, AWS, Microsoft Azure, and other major platforms to deliver enterprise-grade solutions.";
    }
   
    // Services & Solutions
    if (input.includes('service') || input.includes('what services') || input.includes('solutions')) {
      return "We provide end-to-end IT services including application development, cloud infrastructure, DevOps, data engineering, and digital marketing via our sister brand, Growthpulse. We specialize in custom enterprise solutions tailored to your business needs.";
    }
   
    if (input.includes('custom software') || input.includes('software development') || input.includes('development')) {
      return "Yes, we specialize in custom enterprise solutions including web apps, mobile platforms, and backend systems tailored to your business requirements using modern technologies.";
    }
   
    if (input.includes('industries') || input.includes('sectors') || input.includes('clients')) {
      return "We work with clients in Retail, Healthcare, Manufacturing, BFSI, Energy (Renewables & Oil & Gas), and Telecommunications sectors, providing industry-specific solutions.";
    }
   
    if (input.includes('technologies') || input.includes('tech stack') || input.includes('tools')) {
      return "Our tech stack includes AWS, Azure, GCP, Databricks, React, Node.js, .NET, Java, Python, and many more cutting-edge technologies to deliver scalable solutions.";
    }
   
    if (input.includes('legacy') || input.includes('modernization') || input.includes('migration')) {
      return "Yes, we modernize legacy systems into agile, cloud-native platforms using scalable and secure technologies. We also offer migration services including our Databricks Migration Accelerator.";
    }
   
    // Data & AI Services
    if (input.includes('databricks')) {
      return "Yes, we are a certified Databricks partner! We provide Modern Data Platform with Databricks Lakehouse, Migration Accelerator, Data Governance & Lineage using Unity Catalog, and Industry-Specific Accelerators for BFSI, Retail, Healthcare, and more.";
    }
   
    if (input.includes('certified') || input.includes('databricks professionals') || input.includes('experts')) {
      return "Yes, our team includes 10+ Databricks Certified Associates and 2 Certified Professional Data Engineers, ensuring expert-level implementation and support.";
    }
   
    if (input.includes('lakehouse') || input.includes('architecture')) {
      return "A Lakehouse combines the scalability of a data lake with the performance of a warehouse, enabling unified data and AI workflows. We help build and optimize these on Databricks for maximum efficiency.";
    }
   
    if (input.includes('analytics') || input.includes('data')) {
      return "Our data analytics solutions cover the full spectrum: from data collection and warehousing to advanced analytics and AI/ML implementations. We work with modern tech stacks to deliver scalable, production-ready solutions.";
    }
   
    // Marketing Services
    if (input.includes('marketing') || input.includes('growthpulse')) {
      return "Growthpulse, our sister brand, offers B2B lead generation, paid ad campaigns (Google, LinkedIn), SEO, content marketing, and marketing automation services to drive growth.";
    }
   
    if (input.includes('linkedin') || input.includes('lead generation') || input.includes('leads')) {
      return "Yes, we specialize in LinkedIn campaigns that generate qualified leads through targeted outreach and data-driven strategies via our Growthpulse brand.";
    }
   
    if (input.includes('seo') || input.includes('content marketing') || input.includes('content')) {
      return "Yes, we provide content strategy, SEO optimization, and performance monitoring to drive traffic and engagement through our marketing services.";
    }
   
    // Careers & Jobs
    if (input.includes('hiring') || input.includes('careers') || input.includes('jobs')) {
      return "Yes! We're always looking for talented individuals. Please check our Careers page or email your resume to hello@trinitetech.com.";
    }
   
    if (input.includes('apply') || input.includes('job application') || input.includes('resume')) {
      return "Send your updated resume to hello@trinitetech.com with a brief cover note, or apply directly through our Careers section on our website.";
    }
   
    if (input.includes('internship') || input.includes('intern')) {
      return "Yes, we offer internships in development, data science, marketing, and cloud operations for eligible candidates. Please reach out to us at hello@trinitetech.com.";
    }
   
    if (input.includes('recruitment') || input.includes('interview') || input.includes('hiring process')) {
      return "Our recruitment process typically includes application screening, a technical/aptitude test, followed by one or two rounds of interviews.";
    }
   
    // Sales & Support
    if (input.includes('quote') || input.includes('proposal') || input.includes('pricing') || input.includes('cost')) {
      return "Send your requirements to hello@trinitetech.com or fill out the form on our website, and our team will respond promptly with a customized proposal.";
    }
   
    if (input.includes('support') || input.includes('help') || input.includes('question')) {
      return "Please email hello@trinitetech.com and we'll direct your query to the appropriate support team member for assistance.";
    }
   
    if (input.includes('poc') || input.includes('proof of concept') || input.includes('pilot')) {
      return "Yes, we offer short-term POC projects to validate solution feasibility before full-scale implementation. Contact us to discuss your specific requirements.";
    }
   
    // Engagement
    if (input.includes('newsletter') || input.includes('subscribe') || input.includes('updates')) {
      return "Absolutely! Scroll to the bottom of our website and subscribe with your email address to receive insights and updates about our services and industry trends.";
    }
   
    if (input.includes('webinar') || input.includes('events') || input.includes('seminars')) {
      return "Yes, we regularly host industry-focused events and webinars. Check our Events section or follow us on LinkedIn for updates on upcoming events.";
    }
   
    if (input.includes('trinity') || input.includes('who are you') || input.includes('assistant')) {
      return "I'm Trinity, your dedicated digital transformation assistant! I'm here to help you understand how our comprehensive IT solutions can transform your business. Think of me as your first point of contact for all things related to Trinity Technology Solutions.";
    }
   
    return "That's a great question! I'm Trinity, and I'm here to help you explore how Trinity Technology Solutions can transform your business with our comprehensive IT services, data solutions, and digital transformation expertise. Would you like to know more about our services, partnerships, or discuss your specific business challenges?";
  };

  const handleQuickAction = (action: string) => {
    handleSendMessage(action);
  };

  return (
    <>
      {/* Greeting Popup - Always visible until manually dismissed */}
      <AnimatePresence>
        {showGreeting && !greetingDismissed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-40 max-w-xs"
          >
            <div
              className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 cursor-pointer hover:shadow-3xl transition-shadow duration-300 relative"
              onClick={handleGreetingClick}
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[#22396b] to-[#3d3dff] rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 pr-6">
                  <p className="text-sm text-gray-800 leading-relaxed">
                    👋 Hi! I'm Trinity. Need help with our IT solutions or data services?
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Click to chat with me!</p>
                </div>
                <button
                  onClick={handleGreetingDismiss}
                  className="absolute top-2 right-2 w-5 h-5 text-gray-400 hover:text-gray-600 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>
            {/* Speech bubble tail */}
            <div className="absolute bottom-0 right-8 transform translate-y-full">
              <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleChatOpen}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-[#22396b] to-[#3d3dff] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 ${isOpen ? 'hidden' : 'flex'} items-center justify-center`}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#22396b] to-[#3d3dff] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Trinity</h3>
                  <p className="text-xs text-white/80">Digital Transformation Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto max-h-[320px] space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user'
                      ? 'bg-[#3d3dff] text-white'
                      : 'bg-gray-100 text-[#22396b]'
                  }`}>
                    {message.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`max-w-[70%] p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-[#3d3dff] text-white rounded-br-md'
                      : 'bg-gray-100 text-gray-800 rounded-bl-md'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}
             
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-100 text-[#22396b] flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={action}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleQuickAction(action)}
                      className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors"
                    >
                      {action}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputText)}
                  placeholder="Ask Trinity about Trinity Technology Solutions..."
                  className="flex-1 px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#3d3dff] focus:bg-white transition-all"
                  disabled={isTyping}
                />
                <button
                  onClick={() => handleSendMessage(inputText)}
                  disabled={!inputText.trim() || isTyping}
                  className="w-10 h-10 bg-gradient-to-r from-[#22396b] to-[#3d3dff] text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;