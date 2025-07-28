import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../layout/Header';
import {
  BarChart2,
  Database,
  ShieldCheck,
  Monitor,
  Cloud,
  Activity,
  Users,
  Briefcase,
  CheckCircle,
  Award,
  TrendingUp,
  Clock,
  ArrowLeft,
} from 'lucide-react';

const ServicesPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  // Reset scroll position when component mounts or serviceId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  const servicesSections = [
    {
      id: 'data-strategy',
      icon: BarChart2,
      title: 'Data Strategy & Analytics',
      subtitle: 'Transform Raw Data Into Strategic Advantage',
      description:
        'Unlock the full potential of your data with our comprehensive analytics and AI solutions that transform raw information into actionable business intelligence. Our expert team specializes in creating data-driven strategies that align with your business objectives and drive measurable outcomes',
      image:
        'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Advanced Predictive Analytics',
        'Real-time Data Processing',
        'Machine Learning Integration',
        'Custom Dashboard Development',
        'ROI-focused Insights',
      ],
      stats: [
        { label: 'Data Accuracy', value: '99.8%' },
        { label: 'Processing Speed', value: '10x Faster' },
        { label: 'Cost Reduction', value: '40%' },
      ],
    },
    {
      id: 'data-engineering',
      icon: Database,
      title: 'Data Engineering & Infrastructure',
      subtitle: 'Build Robust Data Foundations',
      description:
        'Create scalable, reliable data infrastructures that grow with your organization and handle enterprise-scale workloads. Our data engineering services ensure your data is accessible, reliable, and ready for analysis at any scale',
      image:
        'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Cloud-native Architecture',
        'Real-time Data Pipelines',
        'Automated Data Quality',
        'Scalable Storage Solutions',
        'API Integration',
      ],
      stats: [
        { label: 'Uptime Guarantee', value: '99.9%' },
        { label: 'Data Processing', value: '1TB/hour' },
        { label: 'Integration APIs', value: '500+' },
      ],
    },
    {
      id: 'data-governance',
      icon: ShieldCheck,
      title: 'Data Governance & Security',
      subtitle: 'Ensure Quality, Security & Compliance',
      description:
        'Protect your most valuable asset with comprehensive data governance frameworks and enterprise-grade security measures. Our governance solutions ensure your data remains secure, compliant, and trustworthy across all business operations.',
      image:
        'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'GDPR & CCPA Compliance',
        'Data Quality Monitoring',
        'Role-based Access Control',
        'Audit Trail Management',
        'Risk Assessment Tools',
      ],
      stats: [
        { label: 'Security Score', value: '98%' },
        { label: 'Compliance Rate', value: '100%' },
        { label: 'Risk Reduction', value: '85%' },
      ],
    },
    {
      id: 'business-intelligence',
      icon: Monitor,
      title: 'Business Intelligence & Reporting',
      subtitle: 'Transform Data Into Actionable Insights',
      description:
        'Empower decision-makers with intuitive dashboards and comprehensive reporting that drives strategic decisions. Our BI solutions provide real-time visibility into your business performance with actionable insights that matter.',
      image:
        'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Interactive Dashboards',
        'Automated Reporting',
        'Mobile-first Design',
        'Self-service Analytics',
        'Advanced Visualizations',
      ],
      stats: [
        { label: 'Report Generation', value: '10x Faster' },
        { label: 'User Adoption', value: '95%' },
        { label: 'Decision Speed', value: '60% Faster' },
      ],
    },
    {
      id: 'cloud-migration',
      icon: Cloud,
      title: 'Cloud Migration & Modernization',
      subtitle: 'Modernize Your Data Infrastructure',
      description:
        'Migrate to modern cloud platforms for enhanced performance, scalability, and cost-effectiveness. Our cloud migration services ensure seamless transition with minimal downtime while maximizing the benefits of cloud computing.',
      image:
        'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Zero-downtime Migration',
        'Multi-cloud Strategy',
        'Cost Optimization',
        'Security Enhancement',
        'Performance Monitoring',
      ],
      stats: [
        { label: 'Migration Success', value: '100%' },
        { label: 'Cost Savings', value: '50%' },
        { label: 'Performance Boost', value: '3x' },
      ],
    },
    {
      id: 'artificial-intelligence',
      icon: Activity,
      title: 'Artificial Intelligence & Machine Learning',
      subtitle: 'Innovate with AI-Powered Solutions',
      description:
        'Harness the power of artificial intelligence to automate processes, predict outcomes, and unlock new business opportunities. Our AI solutions are designed to integrate seamlessly with your existing operations while delivering measurable results.',
      image:
        'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Custom AI Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Automated Decision Making',
      ],
      stats: [
        { label: 'Model Accuracy', value: '96%' },
        { label: 'Process Automation', value: '80%' },
        { label: 'Time Savings', value: '70%' },
      ],
    },
    {
      id: 'erp-planning',
      icon: Briefcase,
      title: 'ERP Evolution & Planning',
      subtitle: 'Streamline Business Operations',
      description:
        'Transform your business processes with modern ERP solutions that integrate all aspects of your operations. Our ERP services help you streamline workflows, improve efficiency, and gain real-time visibility into your business performance.',
      image:
        'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Integrated Business Processes',
        'Real-time Operations View',
        'Scalable Architecture',
        'Custom Workflows',
        'Mobile Accessibility',
      ],
      stats: [
        { label: 'Process Efficiency', value: '90%' },
        { label: 'Implementation Time', value: '60% Faster' },
        { label: 'User Satisfaction', value: '4.9/5' },
      ],
    },
    {
      id: 'staffing-solutions',
      icon: Users,
      title: 'Expert Staffing Solutions',
      subtitle: 'Build Your Dream Data Team',
      description:
        'Access top-tier data professionals to strengthen your team with skilled experts in data science, analytics, and engineering. Our staffing solutions provide flexible engagement models to meet your specific talent needs.',
      image:
        'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Vetted Data Specialists',
        'Flexible Engagement Models',
        'Rapid Team Scaling',
        'Skills Assessment',
        'Cultural Fit Evaluation',
      ],
      stats: [
        { label: 'Placement Success', value: '98%' },
        { label: 'Time to Hire', value: '14 Days' },
        { label: 'Retention Rate', value: '95%' },
      ],
    },
  ];

  const currentService = servicesSections.find((service) => service.id === serviceId);
  const Icon = currentService?.icon;

  const handleBackClick = () => {
    navigate('/', { replace: true });
    // Small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!currentService || !Icon) return null;

  if (!currentService || !Icon) return null;

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24 font-sans">
        {/* Banner */}
        <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20 mt-4 font-sans">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-6">
            {/* Back Button */}
            <div className="mb-8">
              <button
                onClick={handleBackClick}
                className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors duration-200 group"
              >
                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="font-medium">Back to Services</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-8 mb-10">
                  <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white">{currentService.title}</h1>
                    <p className="text-xl text-blue-100 mt-2">{currentService.subtitle}</p>
                  </div>
                </div>
                <p className="text-lg text-blue-100 mb-8 leading-relaxed">{currentService.description}</p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                    <Award className="h-5 w-5 mr-2 text-yellow-400" />
                    <span className="text-sm">Enterprise Grade</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                    <TrendingUp className="h-5 w-5 mr-2 text-green-400" />
                    <span className="text-sm">Proven Results</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                    <Clock className="h-5 w-5 mr-2 text-blue-400" />
                    <span className="text-sm">24/7 Support</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={currentService.image}
                    alt={currentService.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features + Metrics */}
        <div className="max-w-7xl mx-auto px-6 py-16 font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features & Capabilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentService.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Proven Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {['Discovery', 'Planning', 'Implementation', 'Optimization'].map((step, idx) => (
                    <div key={step} className="text-center">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                        {idx + 1}
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{step}</h4>
                      <p className="text-sm text-gray-600">
                        {idx === 0 && 'Understanding your unique requirements and challenges'}
                        {idx === 1 && 'Creating a strategic roadmap for success'}
                        {idx === 2 && 'Executing with precision and expertise'}
                        {idx === 3 && 'Continuous improvement and optimization'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Performance Metrics</h3>
                <div className="space-y-4">
                  {currentService.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg"
                    >
                      <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Custom Font Style */}
        <style>{`
          .font-sans {
            font-family: 'Roboto', 'Arial', 'Helvetica Neue', Arial, sans-serif !important;
            font-style: normal !important;
            font-weight: 400 !important;
            letter-spacing: 0.01em;
          }
        `}</style>
      </div>
    </>
  );
};

export default ServicesPage;