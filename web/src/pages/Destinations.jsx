import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Destinations() {
  const destinations = [
    {
      name: "Sigiriya",
      image:
        "https://images.unsplash.com/photo-1592833159155-c0e9b48d46b4?auto=format&fit=crop&w=800&q=80",
      description:
        "Climb the ancient rock fortress of Sigiriya, one of Sri Lanka's most iconic landmarks and UNESCO World Heritage Sites.",
      category: "Cultural Heritage",
      bestTime: "Year-round",
      highlights: ["Lion Rock", "Ancient Frescoes", "Water Gardens"]
    },
    {
      name: "Ella",
      image:
        "https://images.unsplash.com/photo-1577968897966-3d62df5f4953?auto=format&fit=crop&w=800&q=80",
      description:
        "A picturesque mountain town surrounded by lush tea plantations, waterfalls, and scenic hiking trails.",
      category: "Hill Country",
      bestTime: "Dec-Mar",
      highlights: ["Nine Arch Bridge", "Ella Rock", "Tea Estates"]
    },
    {
      name: "Galle",
      image:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80",
      description:
        "A charming coastal city with colonial architecture, cobblestone streets, and stunning ocean views.",
      category: "Coastal",
      bestTime: "Nov-Apr",
      highlights: ["Galle Fort", "Lighthouse", "Dutch Architecture"]
    },
    {
      name: "Kandy",
      image:
        "https://images.unsplash.com/photo-1604328698692-71b3f6a2e54b?auto=format&fit=crop&w=800&q=80",
      description:
        "Home to the Temple of the Tooth Relic, Kandy offers rich culture, history, and beautiful lake views.",
      category: "Cultural",
      bestTime: "Year-round",
      highlights: ["Temple of Tooth", "Kandy Lake", "Cultural Shows"]
    },
    {
      name: "Mirissa",
      image:
        "https://images.unsplash.com/photo-1584801158908-4b9fbc74d59f?auto=format&fit=crop&w=800&q=80",
      description:
        "Relax on golden beaches, go whale watching, or enjoy beachside cafes and nightlife in this tropical paradise.",
      category: "Beach",
      bestTime: "Nov-Apr",
      highlights: ["Whale Watching", "Beach Parties", "Surfing"]
    },
    {
      name: "Nuwara Eliya",
      image:
        "https://images.unsplash.com/photo-1582967742001-97e96b1645e4?auto=format&fit=crop&w=800&q=80",
      description:
        "Known as 'Little England', Nuwara Eliya features cool weather, tea estates, and breathtaking mountain scenery.",
      category: "Hill Country",
      bestTime: "Mar-May",
      highlights: ["Tea Factories", "Gregory Lake", "Horse Racing"]
    },
    {
      name: "Yala National Park",
      image:
        "https://images.unsplash.com/photo-1549887534-3db1bd59dcca?auto=format&fit=crop&w=800&q=80",
      description:
        "Sri Lanka's top wildlife destination — spot elephants, leopards, and exotic birds in their natural habitat.",
      category: "Wildlife",
      bestTime: "Feb-Jul",
      highlights: ["Leopard Spotting", "Safari", "Bird Watching"]
    },
    {
      name: "Jaffna",
      image:
        "https://images.unsplash.com/photo-1579876578997-58f3e7f71b4b?auto=format&fit=crop&w=800&q=80",
      description:
        "Experience northern Sri Lanka's culture, temples, and beaches — a unique blend of heritage and spirituality.",
      category: "Cultural",
      bestTime: "Apr-Sep",
      highlights: ["Nallur Temple", "Jaffna Fort", "Local Cuisine"]
    },
  ];

  const categories = ["All", "Cultural", "Beach", "Hill Country", "Wildlife", "Coastal"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Modern Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background with Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80')",
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
              Discover Sri Lanka's Hidden Gems
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Explore <span className="text-white">Incredible</span> Destinations
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              From ancient cities to pristine beaches, discover the diverse beauty of Sri Lanka 
              through our carefully curated destinations.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {[
                { number: "8+", label: "Regions" },
                { number: "50+", label: "Attractions" },
                { number: "2000+", label: "Years of History" },
                { number: "All", label: "Seasons" }
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

      {/* Category Filter */}
      <section className="py-12 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Browse by <span className="text-[#4F6F52]">Category</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-2xl bg-white text-gray-700 font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#4F6F52] hover:text-white border border-gray-200"
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid Section */}
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
              Featured <span className="text-[#4F6F52]">Destinations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the most breathtaking places Sri Lanka has to offer. 
              Each destination offers unique experiences and unforgettable memories.
            </p>
          </motion.div>

          {/* Destinations Grid */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {dest.category}
                  </div>
                  
                  {/* Best Time Badge */}
                  <div className="absolute top-4 right-4 bg-[#4F6F52] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Best: {dest.bestTime}
                  </div>
                  
                  {/* Destination Name */}
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{dest.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {dest.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                      {dest.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-[#4F6F52]/10 text-[#4F6F52] rounded-full text-xs"
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
                      to={`/destinations/${dest.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="group/btn flex items-center gap-2 text-[#4F6F52] font-semibold hover:text-[#3b5540] transition-colors text-sm"
                    >
                      Explore Destination
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

      {/* Interactive Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Sri Lanka's <span className="text-[#4F6F52]">Geography</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how these amazing destinations are spread across the island paradise of Sri Lanka.
            </p>
          </motion.div>

          {/* Simplified Map Visualization */}
          <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-3 gap-8">
              {/* Regions */}
              {[
                { region: "Cultural Triangle", color: "bg-amber-500", destinations: ["Sigiriya", "Kandy"] },
                { region: "Hill Country", color: "bg-emerald-500", destinations: ["Ella", "Nuwara Eliya"] },
                { region: "Southern Coast", color: "bg-blue-500", destinations: ["Galle", "Mirissa"] },
                { region: "Wildlife Zones", color: "bg-orange-500", destinations: ["Yala National Park"] },
                { region: "Northern Province", color: "bg-purple-500", destinations: ["Jaffna"] },
              ].map((area, index) => (
                <motion.div
                  key={area.region}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`w-12 h-12 ${area.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <span className="text-white text-lg font-bold">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{area.region}</h3>
                  <div className="text-sm text-gray-600">
                    {area.destinations.join(", ")}
                  </div>
                </motion.div>
              ))}
            </div>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Explore?
                </h2>
                
                <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                  Let us create your perfect Sri Lankan adventure. Combine multiple destinations 
                  for an unforgettable journey through this beautiful island.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    to="/contact"
                    className="group bg-white text-[#4F6F52] px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg inline-flex items-center gap-3"
                  >
                    <span>Start Planning</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  
                  <Link
                    to="/packages"
                    className="group text-white/90 px-6 py-4 rounded-2xl font-medium text-lg transition-all duration-300 hover:text-white hover:bg-white/10 inline-flex items-center gap-2"
                  >
                    <span>View Tour Packages</span>
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