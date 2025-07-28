import { TrendingUp, Database, ExternalLink, Building2, Users, GraduationCap, Globe, ArrowUpRight } from 'lucide-react';
import KalloriConnect from "../../Assets/logo/KalloriConnect.png";

function App() {
  const businesses = [
    {
      id: 1,
      name: "Hotelierlinks",
      shortDescription: "Hotelierlinks specializes in transforming the hospitality industry through innovative technology solutions.",
      fullDescription: "Hotelierlinks specializes in transforming the hospitality industry through innovative technology solutions that seamlessly connect hotels with cutting-edge management systems. Our comprehensive platform integrates property management, guest services, and operational analytics to create exceptional experiences for both guests and hotel staff. We partner with leading hospitality brands to implement scalable solutions that drive revenue growth, enhance guest satisfaction, and streamline daily operations across all property types.",
      logo: "https://hotelierlinks.com/wp-content/uploads/2022/08/Footer-Logo.png",
      website: "https://hotelierlinks.com/about-us/",
      industry: "Hospitality Technology",
      preview: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: "500+ Hotels Connected"
    },
    {
      id: 2,
      name: "GrowthPulse",
      shortDescription: "Full-service digital marketing agency driving measurable business growth through strategic optimization.",
      fullDescription: "GrowthPulse is a full-service digital marketing agency that specializes in driving measurable business growth through strategic online presence optimization. We combine creative marketing campaigns with advanced analytics to deliver results that matter. Our team of experts crafts personalized marketing strategies that encompass social media marketing, search engine optimization, content creation, and conversion rate optimization. We work closely with businesses of all sizes to build strong brand identities and sustainable growth trajectories in the digital landscape.",
      logo: null,
      website: "https://growthpulss.com",
      industry: "Digital Marketing",
      icon: TrendingUp,
      color: "from-emerald-500 to-emerald-600",
      preview: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: "300% Average Growth"
    },
    {
      id: 3,
      name: "TNova",
      shortDescription: "Leading provider of ERPNext implementation and customization services for business optimization.",
      fullDescription: "TNova is a leading provider of ERPNext implementation and customization services, dedicated to streamlining business operations through intelligent enterprise resource planning solutions. We specialize in end-to-end ERP implementations that integrate seamlessly with existing business processes, providing real-time insights and automated workflows. Our experienced consultants work with organizations to optimize their operations, improve data visibility, and enhance decision-making capabilities through tailored ERPNext solutions that scale with business growth.",
      logo: null,
      website: "#",
      industry: "ERP Solutions",
      icon: Database,
      color: "from-indigo-500 to-indigo-600",
      preview: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: "50+ ERP Deployments"
    },
    {
      id: 4,
      name: "Kalloori Connect",
      shortDescription: "Comprehensive educational networking platform bridging students, institutions, and career opportunities.",
      fullDescription: "Kalloori Connect is a comprehensive educational networking platform designed to bridge the gap between students, educational institutions, and career opportunities. Our innovative platform facilitates meaningful connections within the academic community, offering students access to mentorship programs, career guidance, and professional networking opportunities. We empower educational institutions with tools to enhance student engagement, track academic progress, and build stronger alumni networks that foster long-term success and community growth.",
      logo: KalloriConnect,
      website: "https://kallooriconnect.com/",
      industry: "Educational Technology",
      icon: GraduationCap,
      color: "from-purple-500 to-purple-600",
      preview: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: "10K+ Students Connected"
    }
  ];

  const handleVisitWebsite = (url: string) => {
    if (url !== "#") window.open(url, "_blank");
  };

  const LogoComponent = ({ business, size = "large" }: {
    business: typeof businesses[0],
    size?: "small" | "medium" | "large"
  }) => {
    const sizeClasses = size === "large" ? "h-16 w-16" : size === "medium" ? "h-12 w-12" : "h-10 w-10";
    const iconSizeClasses = size === "large" ? "w-8 h-8" : size === "medium" ? "w-6 h-6" : "w-5 w-5";
    const paddingClasses = size === "large" ? "p-3" : size === "medium" ? "p-2" : "p-1.5";

    if (business.logo) {
      return (
        <div className={`${sizeClasses} rounded-xl bg-white border border-gray-200 flex items-center justify-center ${paddingClasses} shadow-lg`}>
          <img
            src={business.logo}
            alt={`${business.name} logo`}
            className="h-full w-auto object-contain"
          />
        </div>
      );
    }

    const Icon = business.icon!;
    return (
      <div className={`${sizeClasses} rounded-xl bg-gradient-to-br ${business.color} flex items-center justify-center shadow-lg`}>
        <Icon className={`${iconSizeClasses} text-white`} />
      </div>
    );
  };

 return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Centered Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12 font-sans">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Business Portfolio</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Innovative companies delivering cutting-edge solutions across multiple industries
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 font-sans">
        {/* Business Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {businesses.map((business) => (
            <div
              key={business.id}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-gray-300"
            >
              {/* Preview Image */}
              <div className="relative h-44 overflow-hidden bg-gray-100">
                <img
                  src={business.preview}
                  alt={`${business.name} preview`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                {/* Large Logo overlay - centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <LogoComponent business={business} size="large" />
                </div>

                {/* Visit button */}
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => handleVisitWebsite(business.website)}
                    className={`p-3 rounded-xl transition-all duration-200 ${business.website === "#"
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 shadow-lg hover:shadow-xl"
                      }`}
                    disabled={business.website === "#"}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{business.name}</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {business.industry}
                      </span>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{business.stats}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-3">
                  {business.shortDescription}
                </p>

                {/* Action Button */}
                <button
                  onClick={() => handleVisitWebsite(business.website)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${business.website === "#"
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg transform hover:scale-105"
                    }`}
                  disabled={business.website === "#"}
                >
                  {business.website === "#" ? (
                    <>
                      <Globe className="w-4 h-4" />
                      Coming Soon
                    </>
                  ) : (
                    <>
                      <ExternalLink className="w-4 h-4" />
                      Visit Website
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
