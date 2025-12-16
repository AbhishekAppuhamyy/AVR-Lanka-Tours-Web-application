import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaCompass,
  FaFilter,
  FaMountain,
  FaUmbrellaBeach,
  FaMonument,
  FaPaw,
  FaWater,
  FaCity,
  FaChevronDown,
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

export default function Destinations() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const destinations = [
    {
      name: "Sigiriya Rock Fortress",
      image: "/assets/destinations-pics/sigiriya.jpg",
      description:
        "Climb the ancient rock fortress of Sigiriya, one of Sri Lanka's most iconic landmarks and UNESCO World Heritage Sites.",
      category: "Cultural Heritage",
      bestTime: "Jan-Jul",
      highlights: ["Lion Rock", "Ancient Frescoes", "Water Gardens"],
    },
    {
      name: "Temple of the Tooth, Kandy",
      image: "/assets/destinations-pics/kandytemple.jpg",
      description:
        "Home to the sacred tooth relic of Buddha, a must-visit spiritual and cultural site in Kandy.",
      category: "Cultural",
      bestTime: "Year-round",
      highlights: ["Temple of Tooth", "Kandy Lake", "Cultural Shows"],
    },
    {
      name: "Galle Fort",
      image: "/assets/destinations-pics/gallefort.jpg",
      description:
        "A charming coastal city with colonial architecture, cobblestone streets, and stunning ocean views.",
      category: "Coastal",
      bestTime: "Nov-Apr",
      highlights: ["Galle Fort", "Lighthouse", "Dutch Architecture"],
    },
    {
      name: "Dambulla Cave Temple",
      image: "/assets/destinations-pics/dambulla.jpg",
      description:
        "Explore Sri Lanka's largest cave temple complex, with impressive Buddhist murals and statues.",
      category: "Cultural Heritage",
      bestTime: "Jan-Jul",
      highlights: ["Cave Murals", "Golden Buddha", "Ancient Artifacts"],
    },
    {
      name: "Adam's Peak (Sri Pada)",
      image: "/assets/destinations-pics/adamspeak.jpeg",
      description:
        "Famous pilgrimage mountain with a sacred footprint, offering spectacular sunrise views.",
      category: "Hill Country",
      bestTime: "Dec-May",
      highlights: ["Sunrise Views", "Pilgrimage Path", "Sacred Footprint"],
    },
    {
      name: "Polonnaruwa",
      image: "/assets/destinations-pics/polonaruwa.jpg",
      description:
        "Ancient city with well-preserved ruins of palaces, temples, and statues from Sri Lanka's medieval period.",
      category: "Cultural Heritage",
      bestTime: "Jan-Jul",
      highlights: ["Royal Palace", "Gal Vihara", "Ancient Statues"],
    },
    {
      name: "Yala National Park",
      image: "/assets/destinations-pics/yala.avif",
      description:
        "Experience wildlife safaris with leopards, elephants, and exotic birds in Sri Lanka's famous national park.",
      category: "Wildlife",
      bestTime: "Feb-Jul",
      highlights: ["Leopards", "Elephants", "Birdwatching"],
    },
    {
      name: "Nuwara Eliya",
      image: "/assets/destinations-pics/nuwaraeliya.webp",
      description:
        "Also called 'Little England', known for tea plantations, waterfalls, and cool hill country scenery.",
      category: "Hill Country",
      bestTime: "Dec-Mar",
      highlights: ["Tea Plantations", "Gregory Lake", "Waterfalls"],
    },
    {
      name: "Ella",
      image: "assets/destinations-pics/ella.jpg",
      description:
        "A picturesque mountain town surrounded by lush tea plantations, waterfalls, and scenic hiking trails.",
      category: "Hill Country",
      bestTime: "Dec-Mar",
      highlights: ["Nine Arch Bridge", "Ella Rock", "Tea Estates"],
    },
    {
      name: "Bentota",
      image: "/assets/destinations-pics/bentota.avif",
      description:
        "A coastal town famous for beaches, water sports, and luxury resorts.",
      category: "Beach",
      bestTime: "Nov-Apr",
      highlights: ["Beaches", "Water Sports", "Luxury Resorts"],
    },
    {
      name: "Mirissa",
      image: "/assets/destinations-pics/mirissa.webp",
      description:
        "Popular beach destination ideal for whale watching, surfing, and relaxing on golden sands.",
      category: "Beach",
      bestTime: "Nov-Apr",
      highlights: ["Whale Watching", "Surfing", "Beaches"],
    },
    {
      name: "Hikkaduwa",
      image: "/assets/destinations-pics/hikaduwa.webp",
      description:
        "Vibrant beach town known for coral reefs, snorkeling, and lively nightlife.",
      category: "Beach",
      bestTime: "Nov-Apr",
      highlights: ["Coral Reefs", "Snorkeling", "Nightlife"],
    },
    {
      name: "Anuradhapura",
      image: "/assets/destinations-pics/ruwanwalisaya.jpg",
      description:
        "Ancient city with sacred Buddhist stupas, monasteries, and archaeological treasures.",
      category: "Cultural Heritage",
      bestTime: "Jan-Jul",
      highlights: ["Ruwanwelisaya", "Isurumuniya", "Ancient Monasteries"],
    },
    {
      name: "Knuckles Mountain Range",
      image: "/assets/destinations-pics/knuckles.avif",
      description:
        "UNESCO-listed mountains with trekking routes, rivers, and rich biodiversity.",
      category: "Hill Country",
      bestTime: "Jan-Apr",
      highlights: ["Trekking", "Rivers", "Biodiversity"],
    },
    {
      name: "Arugam Bay",
      image: "/assets/destinations-pics/arugambay.jpg",
      description:
        "World-class surfing destination with laid-back beach vibes and vibrant nightlife.",
      category: "Beach",
      bestTime: "Apr-Sep",
      highlights: ["Surfing", "Beaches", "Nightlife"],
    },
  ];

  const stats = [
    { number: "50+", label: "Destinations" },
    { number: "6+", label: "Categories" },
    { number: "Year-round", label: "Best Time" },
    { number: "4.9★", label: "Traveler Rating" },
  ];

  const categories = [
    { name: "All", count: 15, icon: <FaCompass className="inline mr-2" /> },
    {
      name: "Cultural Heritage",
      count: 5,
      icon: <FaMonument className="inline mr-2" />,
    },
    { name: "Cultural", count: 1, icon: <FaCity className="inline mr-2" /> },
    {
      name: "Beach",
      count: 4,
      icon: <FaUmbrellaBeach className="inline mr-2" />,
    },
    {
      name: "Hill Country",
      count: 4,
      icon: <FaMountain className="inline mr-2" />,
    },
    { name: "Wildlife", count: 1, icon: <FaPaw className="inline mr-2" /> },
    { name: "Coastal", count: 1, icon: <FaWater className="inline mr-2" /> },
  ];

  // Filter destinations based on selected category
  const filteredDestinations =
    selectedCategory === "All"
      ? destinations
      : destinations.filter(
          (destination) => destination.category === selectedCategory
        );

  const getCategoryIcon = (categoryName) => {
    const category = categories.find((cat) => cat.name === categoryName);
    return category ? category.icon : <FaCompass className="inline mr-2" />;
  };

  // OPTION 1: special route for Sigiriya, default index-based for others
  const getDetailsLink = (destination, index) => {
    if (destination.name === "Sigiriya Rock Fortress")
      return "/destinations/sigiriya";

    if (destination.name === "Temple of the Tooth, Kandy")
      return "/destinations/templeofthetooth";

    if (destination.name === "Galle Fort") return "/destinations/galle-fort";

    if (destination.name === "Dambulla Cave Temple")
      return "/destinations/dambulla";

    if (destination.name === "Adam's Peak (Sri Pada)")
      return "/destinations/adams-peak";

    if (destination.name === "Polonnaruwa") return "/destinations/polonaruwa";

    if (destination.name === "Yala National Park")
      return "/destinations/yala-national-park";

    if (destination.name === "Nuwara Eliya")
      return "/destinations/nuwara-eliya";

    if (destination.name === "Ella") return "/destinations/ella";

    if (destination.name === "Bentota") return "/destinations/bentota";

    if (destination.name === "Mirissa") return "/destinations/mirissa";

    if (destination.name === "Hikkaduwa") return "/destinations/hikkaduwa";

    if (destination.name === "Anuradhapura")
      return "/destinations/anuradhapura";

    if (destination.name === "Knuckles Mountain Range")
      return "/destinations/knuckles-mountain-range";

    if (destination.name === "Arugam Bay") return "/destinations/arugam-bay";

    // ✅ fallback (important)
    return `/destinations/${index}`;
  };

  // Get the full object for the selected category to display its icon
  const selectedCategoryObject =
    categories.find((cat) => cat.name === selectedCategory) || categories[0];

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* HERO SECTION */}
      <section className="relative min-h-[75vh] lg:min-h-[70vh] flex items-center justify-center ">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/destination.avif')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-[32px] sm:text-6xl lg:text-7xl font-bold leading-none drop-shadow-lg mt-20 sm:mt-10 mb-1">
              Discover{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9]">
                Sri Lanka
              </span>
            </h1>

            <p className="text-base sm:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md leading-snug">
              From ancient cultural wonders to pristine beaches and wildlife
              adventures.
            </p>
          </motion.div>

          {/* FILTER SECTION */}
          <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="mt-10"
>
  <div className="flex justify-center">
    {/* === HERO COMMAND DROPDOWN === */}
    <div
      ref={dropdownRef}
      className="relative w-full max-w-xl z-20"
    >
      {/* BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full flex items-center justify-between
          px-6 py-4 rounded-2xl
          bg-white/90 backdrop-blur-xl
          border border-white/40
          shadow-2xl
          hover:shadow-3xl
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-[#4F6F52]
        "
      >
        <span className="flex items-center gap-4 text-lg font-semibold text-gray-900">
          {selectedCategoryObject.icon}
          {selectedCategoryObject.name}
        </span>

        <FaChevronDown
          className={`text-gray-600 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="
              absolute top-full left-0 right-0 mt-3
              bg-white/95 backdrop-blur-xl
              rounded-2xl shadow-2xl
              border border-gray-100
              overflow-hidden
            "
          >
            <ul className="max-h-64 overflow-y-auto py-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <button
                    onClick={() => {
                      setSelectedCategory(category.name);
                      setIsOpen(false);
                    }}
                    className="
                      w-full flex items-center gap-4
                      px-5 py-3
                      text-gray-900
                      hover:bg-[#E8F5E9]
                      transition-colors
                    "
                  >
                    <span className="text-lg">{category.icon}</span>

                    <span className="font-medium">
                      {category.name}
                    </span>

                    <span className="ml-auto text-sm text-gray-500">
                      {category.count}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HELPER TEXT */}
      <p className="mt-2 text-xs text-white/70 text-center">
        Choose a destination category
      </p>
    </div>
  </div>
</motion.div>

              {/* === CUSTOM DROPDOWN END === */}

              <button
                onClick={() => setSelectedCategory("All")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#4F6F52] text-white rounded-2xl hover:bg-[#3b5540] transition shadow-md"
              >
                <FaFilter /> Reset Filters
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DESTINATIONS GRID */}
      <section className="py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="relative h-48">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-[#4F6F52] text-white rounded-full text-xs font-medium flex items-center gap-1">
                      {getCategoryIcon(destination.category)}
                      {destination.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 text-white font-semibold text-lg">
                    {destination.name}
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {destination.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span className="font-medium">Best Time:</span>
                    <span className="text-[#4F6F52]">
                      {destination.bestTime}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.highlights.slice(0, 3).map((highlight, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-[#4F6F52]/10 text-[#4F6F52] rounded-full text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Link
                      to={getDetailsLink(destination, index)}
                      className="flex-1 bg-[#4F6F52] text-white py-2 rounded-xl text-center font-semibold text-sm hover:bg-[#3b5540] transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <FaCompass className="text-4xl text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No destinations found
              </h3>
              <p className="text-gray-500">
                Try selecting a different category to see more destinations.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* REGIONS OVERVIEW */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Sri Lanka&apos;s <span className="text-[#4F6F52]">Regions</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Discover the unique character of each region across the island
              paradise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                region: "Cultural Triangle",
                description: "Ancient cities and UNESCO heritage sites",
                destinations: "Sigiriya, Kandy, Dambulla",
                color: "from-amber-500 to-orange-500",
                icon: <FaMonument />,
              },
              {
                region: "Hill Country",
                description: "Tea plantations and mountain scenery",
                destinations: "Ella, Nuwara Eliya, Hatton",
                color: "from-emerald-500 to-green-600",
                icon: <FaMountain />,
              },
              {
                region: "Southern Coast",
                description: "Beaches and coastal adventures",
                destinations: "Galle, Mirissa, Tangalle",
                color: "from-blue-500 to-cyan-500",
                icon: <FaUmbrellaBeach />,
              },
              {
                region: "Wildlife Zones",
                description: "National parks and safari experiences",
                destinations: "Yala, Wilpattu, Udawalawe",
                color: "from-orange-500 to-red-500",
                icon: <FaPaw />,
              },
              {
                region: "Northern Province",
                description: "Cultural heritage and unique landscapes",
                destinations: "Jaffna, Mannar, Vavuniya",
                color: "from-purple-500 to-indigo-500",
                icon: <FaCity />,
              },
              {
                region: "Eastern Coast",
                description: "Pristine beaches and water sports",
                destinations: "Arugam Bay, Trincomalee, Batticaloa",
                color: "from-teal-500 to-blue-600",
                icon: <FaWater />,
              },
            ].map((region, index) => (
              <motion.div
                key={region.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${region.color} text-white rounded-2xl flex items-center justify-center text-2xl mb-4`}
                >
                  {region.icon}
                </div>
                <h3 className="font-semibold text-lg sm:text-xl mb-2">
                  {region.region}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {region.description}
                </p>
                <p className="text-[#4F6F52] text-sm font-medium">
                  {region.destinations}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#4F6F52] to-[#5A7D5A] text-center text-white px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <FaCompass className="text-5xl mx-auto mb-2 text-white/90" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Ready to Explore Sri Lanka?
          </h2>
          <p className="text-white/90 text-sm sm:text-base mb-4">
            Let us craft your perfect journey through paradise with personalized
            itineraries and unforgettable experiences across multiple
            destinations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/contact"
              className="bg-white text-[#4F6F52] px-6 py-3 rounded-xl font-semibold text-base hover:scale-105 shadow-lg transition-all"
            >
              Start Your Journey
            </Link>
            <Link
              to="/Packages"
              className="border border-white/40 px-6 py-3 rounded-xl text-base text-white/90 hover:bg-white/10"
            >
              Browse Tours
            </Link>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="relative py-16 bg-gradient-to-r from-[#E8F5E9]/50 to-[#C8E6C9]/50">
        <div className="absolute inset-0 bg-gradient-to-r from-[#A5D6A7]/40 to-[#81C784]/30 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="text-center bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-2xl sm:text-3xl font-bold mb-1">
                  {s.number}
                </div>
                <div className="text-gray-700 text-sm">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
