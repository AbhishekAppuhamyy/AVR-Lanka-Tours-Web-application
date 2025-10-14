import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Packages() {
  const packages = [
    {
      id: 1,
      name: "Cultural Triangle Tour",
      image:
        "https://images.unsplash.com/photo-1602934585418-8ec9b8b3d08f?auto=format&fit=crop&w=800&q=80",
      duration: "6 Days / 5 Nights",
      price: "LKR 85,000",
      description:
        "Explore ancient wonders like Sigiriya, Dambulla, and Kandy — experience the rich history and culture of Sri Lanka.",
      highlights: ["Sigiriya Rock", "Dambulla Cave Temple", "Sacred City of Kandy"]
    },
    {
      id: 2,
      name: "Hill Country Escape",
      image:
        "https://images.unsplash.com/photo-1577968897966-3d62df5f4953?auto=format&fit=crop&w=800&q=80",
      duration: "5 Days / 4 Nights",
      price: "LKR 72,000",
      description:
        "Visit Nuwara Eliya, Ella, and the stunning tea plantations. Perfect for nature lovers and adventurers.",
      highlights: ["Tea Plantations", "Nine Arch Bridge", "Horton Plains"]
    },
    {
      id: 3,
      name: "Southern Beach Getaway",
      image:
        "https://images.unsplash.com/photo-1540206352-093d6281c5d3?auto=format&fit=crop&w=800&q=80",
      duration: "4 Days / 3 Nights",
      price: "LKR 65,000",
      description:
        "Relax on golden beaches in Mirissa and Galle, go whale watching, and enjoy fresh seafood by the sea.",
      highlights: ["Whale Watching", "Galle Fort", "Beach Relaxation"]
    },
    {
      id: 4,
      name: "Wildlife & Safari Adventure",
      image:
        "https://images.unsplash.com/photo-1549887534-3db1bd59dcca?auto=format&fit=crop&w=800&q=80",
      duration: "5 Days / 4 Nights",
      price: "LKR 78,000",
      description:
        "Discover Yala National Park and Udawalawe. Get close to elephants, leopards, and exotic wildlife.",
      highlights: ["Yala National Park", "Wildlife Safari", "Elephant Spotting"]
    },
    {
      id: 5,
      name: "Luxury Honeymoon Escape",
      image:
        "https://images.unsplash.com/photo-1526768291563-3c8a8af6d9a2?auto=format&fit=crop&w=800&q=80",
      duration: "7 Days / 6 Nights",
      price: "LKR 120,000",
      description:
        "Romantic resorts, candlelight dinners, and private beach views — the perfect honeymoon in paradise.",
      highlights: ["Private Villas", "Romantic Dinners", "Luxury Spas"]
    },
    {
      id: 6,
      name: "Northern Heritage Tour",
      image:
        "https://images.unsplash.com/photo-1579876578997-58f3e7f71b4b?auto=format&fit=crop&w=800&q=80",
      duration: "6 Days / 5 Nights",
      price: "LKR 90,000",
      description:
        "Discover Jaffna and the northern charm of Sri Lanka — rich culture, temples, and stunning coastal beauty.",
      highlights: ["Jaffna Culture", "Ancient Temples", "Coastal Exploration"]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Modern Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background with Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1600&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#4F6F52]/80 to-[#4F6F52]/60" />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Discover Your Perfect Sri Lankan Adventure
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Curated <span className="text-white">Tour Packages</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Handcrafted journeys through paradise. From ancient cities to pristine beaches, 
              experience Sri Lanka like never before.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {[
                { number: "50+", label: "Destinations" },
                { number: "2K+", label: "Happy Travelers" },
                { number: "4.9★", label: "Rated Experience" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="text-center"
                >
                  <div className="text-2xl lg:text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
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

      {/* Packages Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="text-[#4F6F52]">Packages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Carefully designed itineraries that showcase the very best of Sri Lanka. 
              All packages include accommodation, transport, and expert guides.
            </p>
          </motion.div>

          {/* Packages Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {pkg.duration}
                  </div>
                  
                  {/* Price Tag */}
                  <div className="absolute bottom-4 left-4">
                    <div className="text-2xl font-bold text-white">{pkg.price}</div>
                    <div className="text-white/80 text-sm">Starting from</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-[#4F6F52] transition-colors">
                    {pkg.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {pkg.highlights.map((highlight, idx) => (
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
                  <div className="flex justify-between items-center">
                    <Link
                      to={`/packages/${pkg.id}`}
                      className="group/btn flex items-center gap-2 text-[#4F6F52] font-semibold hover:text-[#3b5540] transition-colors"
                    >
                      Explore Package
                      <svg 
                        className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                    
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 hover:bg-gray-100 rounded-lg">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Customize Your Dream Tour
                </h2>
                
                <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                  Can't find exactly what you're looking for? We specialize in creating 
                  personalized itineraries that match your unique travel style and preferences.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    to="/contact"
                    className="group bg-white text-[#4F6F52] px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg inline-flex items-center gap-3"
                  >
                    <span>Design Your Tour</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  
                  <Link
                    to="/packages"
                    className="group text-white/90 px-6 py-4 rounded-2xl font-medium text-lg transition-all duration-300 hover:text-white hover:bg-white/10 inline-flex items-center gap-2"
                  >
                    <span>View All Packages</span>
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