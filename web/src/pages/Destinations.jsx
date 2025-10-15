import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaCompass, FaSearch, FaFilter } from "react-icons/fa";

export default function Destinations() {
  const destinations = [
    {
      name: "Sigiriya Rock Fortress",
      image: "https://images.unsplash.com/photo-1592833159155-c0e9b48d46b4?auto=format&fit=crop&w=800&q=80",
      description: "Climb the ancient rock fortress of Sigiriya, one of Sri Lanka's most iconic landmarks and UNESCO World Heritage Sites.",
      category: "Cultural Heritage",
      bestTime: "Jan-Jul",
      highlights: ["Lion Rock", "Ancient Frescoes", "Water Gardens"]
    },
    {
      name: "Temple of the Tooth, Kandy",
      image: "https://images.unsplash.com/photo-1604328698692-71b3f6a2e54b?auto=format&fit=crop&w=800&q=80",
      description: "Home to the sacred tooth relic of Buddha, a must-visit spiritual and cultural site in Kandy.",
      category: "Cultural",
      bestTime: "Year-round",
      highlights: ["Temple of Tooth", "Kandy Lake", "Cultural Shows"]
    },
    {
      name: "Galle Fort",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80",
      description: "A charming coastal city with colonial architecture, cobblestone streets, and stunning ocean views.",
      category: "Coastal",
      bestTime: "Nov-Apr",
      highlights: ["Galle Fort", "Lighthouse", "Dutch Architecture"]
    },
    {
      name: "Dambulla Cave Temple",
      image: "https://images.unsplash.com/photo-1613026263091-f4e8289d92ff?auto=format&fit=crop&w=800&q=80",
      description: "Explore Sri Lanka's largest cave temple complex, with impressive Buddhist murals and statues.",
      category: "Cultural Heritage",
      bestTime: "Jan-Jul",
      highlights: ["Cave Murals", "Golden Buddha", "Ancient Artifacts"]
    },
    {
      name: "Adam’s Peak (Sri Pada)",
      image: "https://images.unsplash.com/photo-1603354351366-9d13f5f0f1c8?auto=format&fit=crop&w=800&q=80",
      description: "Famous pilgrimage mountain with a sacred footprint, offering spectacular sunrise views.",
      category: "Hill Country",
      bestTime: "Dec-May",
      highlights: ["Sunrise Views", "Pilgrimage Path", "Sacred Footprint"]
    },
    {
      name: "Polonnaruwa",
      image: "https://images.unsplash.com/photo-1571127331850-3ec1f7e15f68?auto=format&fit=crop&w=800&q=80",
      description: "Ancient city with well-preserved ruins of palaces, temples, and statues from Sri Lanka's medieval period.",
      category: "Cultural Heritage",
      bestTime: "Jan-Jul",
      highlights: ["Royal Palace", "Gal Vihara", "Ancient Statues"]
    },
    {
      name: "Yala National Park",
      image: "https://images.unsplash.com/photo-1587825140708-6aa6ecf0529d?auto=format&fit=crop&w=800&q=80",
      description: "Experience wildlife safaris with leopards, elephants, and exotic birds in Sri Lanka's famous national park.",
      category: "Wildlife",
      bestTime: "Feb-Jul",
      highlights: ["Leopards", "Elephants", "Birdwatching"]
    },
    {
      name: "Nuwara Eliya",
      image: "https://images.unsplash.com/photo-1577968897966-3d62df5f4953?auto=format&fit=crop&w=800&q=80",
      description: "Also called 'Little England', known for tea plantations, waterfalls, and cool hill country scenery.",
      category: "Hill Country",
      bestTime: "Dec-Mar",
      highlights: ["Tea Plantations", "Gregory Lake", "Waterfalls"]
    },
    {
      name: "Ella",
      image: "https://images.unsplash.com/photo-1577968897966-3d62df5f4953?auto=format&fit=crop&w=800&q=80",
      description: "A picturesque mountain town surrounded by lush tea plantations, waterfalls, and scenic hiking trails.",
      category: "Hill Country",
      bestTime: "Dec-Mar",
      highlights: ["Nine Arch Bridge", "Ella Rock", "Tea Estates"]
    },
    {
      name: "Bentota",
      image: "https://images.unsplash.com/photo-1582719478173-1f0b27a0f7be?auto=format&fit=crop&w=800&q=80",
      description: "A coastal town famous for beaches, water sports, and luxury resorts.",
      category: "Beach",
      bestTime: "Nov-Apr",
      highlights: ["Beaches", "Water Sports", "Luxury Resorts"]
    },
    {
      name: "Mirissa",
      image: "https://images.unsplash.com/photo-1583337130417-50c9c07c8495?auto=format&fit=crop&w=800&q=80",
      description: "Popular beach destination ideal for whale watching, surfing, and relaxing on golden sands.",
      category: "Beach",
      bestTime: "Nov-Apr",
      highlights: ["Whale Watching", "Surfing", "Beaches"]
    },
    {
      name: "Hikkaduwa",
      image: "https://images.unsplash.com/photo-1549887536-40b4cf96ee35?auto=format&fit=crop&w=800&q=80",
      description: "Vibrant beach town known for coral reefs, snorkeling, and lively nightlife.",
      category: "Beach",
      bestTime: "Nov-Apr",
      highlights: ["Coral Reefs", "Snorkeling", "Nightlife"]
    },
    {
      name: "Anuradhapura",
      image: "https://images.unsplash.com/photo-1577968897806-3e4d9cf8d1c1?auto=format&fit=crop&w=800&q=80",
      description: "Ancient city with sacred Buddhist stupas, monasteries, and archaeological treasures.",
      category: "Cultural Heritage",
      bestTime: "Jan-Jul",
      highlights: ["Ruwanwelisaya", "Isurumuniya", "Ancient Monasteries"]
    },
    {
      name: "Knuckles Mountain Range",
      image: "https://images.unsplash.com/photo-1615383707467-4f7a9d2ff3e1?auto=format&fit=crop&w=800&q=80",
      description: "UNESCO-listed mountains with trekking routes, rivers, and rich biodiversity.",
      category: "Hill Country",
      bestTime: "Jan-Apr",
      highlights: ["Trekking", "Rivers", "Biodiversity"]
    },
    {
      name: "Arugam Bay",
      image: "https://images.unsplash.com/photo-1591107100251-ef4b9b6e99b2?auto=format&fit=crop&w=800&q=80",
      description: "World-class surfing destination with laid-back beach vibes and vibrant nightlife.",
      category: "Beach",
      bestTime: "Apr-Sep",
      highlights: ["Surfing", "Beaches", "Nightlife"]
    },
  ];

  const stats = [
    { number: "15+", label: "Destinations" },
    { number: "6+", label: "Categories" },
    { number: "Year-round", label: "Best Time" },
    { number: "4.9★", label: "Traveler Rating" },
  ];

  const regions = [
    { name: "All", count: 15 },
    { name: "Cultural Heritage", count: 5 },
    { name: "Cultural", count: 1 },
    { name: "Beach", count: 4 },
    { name: "Hill Country", count: 4 },
    { name: "Wildlife", count: 1 },
    { name: "Coastal", count: 1 },
  ];

  const types = ["All", "Cultural Heritage", "Cultural", "Beach", "Hill Country", "Wildlife", "Coastal"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/destination.avif')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 text-sm sm:text-base backdrop-blur-md">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Explore Sri Lanka's Diversity
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
              Discover Amazing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9]">
                Destinations
              </span>
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
              From ancient cultural sites to pristine beaches and wildlife adventures — explore the diverse landscapes and rich heritage of Sri Lanka.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <Link to="/tours" className="bg-white text-[#4F6F52] px-6 py-3 rounded-xl font-semibold text-base sm:text-lg hover:scale-105 transition-all duration-300 shadow-lg">
                Book Tours
              </Link>
              <Link to="/contact" className="border border-white/40 text-white px-6 py-3 rounded-xl text-base sm:text-lg hover:bg-white/10 transition-all">
                Get Custom Plan
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 pt-8 sm:pt-12">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl sm:text-2xl font-bold">{s.number}</div>
                  <div className="text-white/70 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEARCH AND FILTER */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-2xl">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search destinations..." className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4F6F52] focus:border-transparent" />
          </div>
          <div className="flex flex-wrap gap-3">
            <select className="px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4F6F52]">
              {regions.map((region, index) => <option key={index} value={region.name}>{region.name} ({region.count})</option>)}
            </select>
            <select className="px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4F6F52]">
              {types.map((type, index) => <option key={index} value={type}>{type}</option>)}
            </select>
            <button className="flex items-center gap-2 px-4 py-3 bg-[#4F6F52] text-white rounded-2xl hover:bg-[#3b5540] transition">
              <FaFilter /> Filter
            </button>
          </div>
        </div>
      </section>

      {/* DESTINATIONS GRID */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Explore <span className="text-[#4F6F52]">Destinations</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Curated selection of Sri Lanka's most breathtaking locations and cultural landmarks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -5 }} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                <div className="relative h-48">
                  <img src={destination.image} alt={destination.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white font-semibold">{destination.name}</div>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{destination.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.highlights.slice(0, 3).map((highlight, i) => (
                      <span key={i} className="px-2 py-1 bg-[#4F6F52]/10 text-[#4F6F52] rounded-full text-xs">{highlight}</span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Link to={`/destinations/${index}`} className="flex-1 bg-[#4F6F52] text-white py-2 rounded-xl text-center font-semibold text-sm hover:bg-[#3b5540] transition">View Details</Link>
                    <Link to="/contact" className="flex-1 border border-[#4F6F52] text-[#4F6F52] py-2 rounded-xl text-center font-semibold text-sm hover:bg-[#4F6F52] hover:text-white transition">Book Tour</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REGIONS OVERVIEW */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Sri Lanka's <span className="text-[#4F6F52]">Regions</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Discover the unique character of each region across the island paradise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              region: "Cultural Triangle", description: "Ancient cities and UNESCO heritage sites", destinations: "Sigiriya, Kandy, Dambulla", color: "from-amber-500 to-orange-500"
            }, {
              region: "Hill Country", description: "Tea plantations and mountain scenery", destinations: "Ella, Nuwara Eliya, Hatton", color: "from-emerald-500 to-green-600"
            }, {
              region: "Southern Coast", description: "Beaches and coastal adventures", destinations: "Galle, Mirissa, Tangalle", color: "from-blue-500 to-cyan-500"
            }, {
              region: "Wildlife Zones", description: "National parks and safari experiences", destinations: "Yala, Wilpattu, Udawalawe", color: "from-orange-500 to-red-500"
            }, {
              region: "Northern Province", description: "Cultural heritage and unique landscapes", destinations: "Jaffna, Mannar, Vavuniya", color: "from-purple-500 to-indigo-500"
            }, {
              region: "Eastern Coast", description: "Pristine beaches and water sports", destinations: "Arugam Bay, Trincomalee, Batticaloa", color: "from-teal-500 to-blue-600"
            }].map((region, index) => (
              <motion.div key={region.region} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -4 }} className="flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
                <div className={`w-16 h-16 bg-gradient-to-r ${region.color} text-white rounded-2xl flex items-center justify-center text-2xl mb-4`}>
                  <FaMapMarkerAlt />
                </div>
                <h3 className="font-semibold text-lg sm:text-xl mb-2">{region.region}</h3>
                <p className="text-gray-600 text-sm mb-3">{region.description}</p>
                <p className="text-[#4F6F52] text-sm font-medium">{region.destinations}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#4F6F52] to-[#5A7D5A] text-center text-white px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <FaCompass className="text-5xl mx-auto mb-2 text-white/90" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Ready to Explore Sri Lanka?</h2>
          <p className="text-white/90 text-sm sm:text-base mb-4">
            Let us craft your perfect journey through paradise with personalized itineraries and unforgettable experiences across multiple destinations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/contact" className="bg-white text-[#4F6F52] px-6 py-3 rounded-xl font-semibold text-base hover:scale-105 shadow-lg transition-all">Start Your Journey</Link>
            <Link to="/tours" className="border border-white/40 px-6 py-3 rounded-xl text-base text-white/90 hover:bg-white/10">Browse Tours</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
