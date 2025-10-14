import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaMapMarkedAlt, 
  FaPlaneDeparture, 
  FaHotel, 
  FaUmbrellaBeach,
  FaStar,
  FaCompass,
  FaHeart,
  FaShieldAlt
} from "react-icons/fa";

export default function Home() {
  const features = [
    {
      icon: <FaMapMarkedAlt />,
      title: "Custom Tour Plans",
      description: "Tailored itineraries designed around your preferences and travel style"
    },
    {
      icon: <FaPlaneDeparture />,
      title: "Seamless Transfers",
      description: "Hassle-free airport pickups and comfortable transportation throughout"
    },
    {
      icon: <FaHotel />,
      title: "Premium Stays",
      description: "Carefully selected accommodations for maximum comfort and authenticity"
    },
    {
      icon: <FaUmbrellaBeach />,
      title: "Beach Experiences",
      description: "Exclusive access to pristine beaches and coastal adventures"
    },
    {
      icon: <FaCompass />,
      title: "Expert Guides",
      description: "Local guides with deep knowledge of Sri Lankan culture and history"
    },
    {
      icon: <FaShieldAlt />,
      title: "Travel Safe",
      description: "24/7 support and comprehensive travel insurance options"
    }
  ];

  const popularTours = [
    {
      title: "Cultural Triangle Tour",
      image: "https://images.unsplash.com/photo-1602934585418-8ec9b8b3d08f?auto=format&fit=crop&w=800&q=80",
      duration: "6 Days",
      price: "From LKR 85,000",
      highlights: ["Sigiriya", "Dambulla", "Ancient Cities"]
    },
    {
      title: "Hill Country Escape",
      image: "https://images.unsplash.com/photo-1577968897966-3d62df5f4953?auto=format&fit=crop&w=800&q=80",
      duration: "5 Days",
      price: "From LKR 72,000",
      highlights: ["Tea Plantations", "Ella", "Waterfalls"]
    },
    {
      title: "Southern Beach Getaway",
      image: "https://images.unsplash.com/photo-1540206352-093d6281c5d3?auto=format&fit=crop&w=800&q=80",
      duration: "4 Days",
      price: "From LKR 65,000",
      highlights: ["Mirissa", "Galle", "Whale Watching"]
    }
  ];

  const stats = [
    { number: "2K+", label: "Happy Travelers" },
    { number: "50+", label: "Destinations" },
    { number: "4.9★", label: "Customer Rating" },
    { number: "15+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Modern Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#4F6F52]/80 to-[#4F6F52]/60" />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#4F6F52]/20 rounded-full blur-2xl"></div>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium"
            >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Sri Lanka's Premier Tour Experience
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              Discover The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                Pearl of the Indian Ocean
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            >
              From sun-kissed beaches to misty highlands, ancient cities to wildlife adventures — 
              experience Sri Lanka like never before with our curated journeys.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <Link
                to="/tours"
                className="group bg-white text-[#4F6F52] px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg inline-flex items-center gap-3"
              >
                <span>Explore Tours</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link
                to="/destinations"
                className="group text-white px-6 py-4 rounded-2xl font-medium text-lg transition-all duration-300 hover:bg-white/10 inline-flex items-center gap-2 border border-white/30"
              >
                <span>View Destinations</span>
                <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl lg:text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-[#4F6F52]">AVR Lanka Tours</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine local expertise with personalized service to create unforgettable 
              Sri Lankan adventures that go beyond the ordinary.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Icon Container */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#4F6F52]/10 text-[#4F6F52] rounded-2xl text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#4F6F52]/20 transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tours Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Most <span className="text-[#4F6F52]">Popular Tours</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked experiences loved by our travelers. Each tour is designed to 
              showcase the very best of Sri Lanka.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {popularTours.map((tour, index) => (
              <motion.div
                key={tour.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {tour.duration}
                  </div>
                  
                  {/* Price */}
                  <div className="absolute bottom-4 left-4">
                    <div className="text-2xl font-bold text-white">{tour.price}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-gray-900">
                    {tour.title}
                  </h3>
                  
                  {/* Highlights */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-[#4F6F52]/10 text-[#4F6F52] rounded-full text-sm"
                        >
                          <span className="w-1.5 h-1.5 bg-[#4F6F52] rounded-full"></span>
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to="/tours"
                    className="group/btn w-full flex items-center justify-center gap-2 bg-[#4F6F52] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-[#3b5540] transition-all duration-300 hover:scale-105"
                  >
                    <span>Explore Tour</span>
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Tours CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 text-[#4F6F52] font-semibold text-lg hover:text-[#3b5540] transition-colors"
            >
              View All Tour Packages
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4F6F52] to-[#5A7D5A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-black/10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>
            
            <div className="relative py-16 px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm mb-6">
                  <FaHeart className="w-10 h-10 text-white" />
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready for Your Sri Lankan Adventure?
                </h2>
                
                <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                  Let us craft your perfect journey through paradise. From personalized itineraries 
                  to exclusive experiences, we'll make your Sri Lankan dreams come true.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    to="/contact"
                    className="group bg-white text-[#4F6F52] px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg inline-flex items-center gap-3"
                  >
                    <span>Start Your Journey</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  
                  <Link
                    to="/about"
                    className="group text-white/90 px-6 py-4 rounded-2xl font-medium text-lg transition-all duration-300 hover:text-white hover:bg-white/10 inline-flex items-center gap-2"
                  >
                    <span>Learn About Us</span>
                    <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}