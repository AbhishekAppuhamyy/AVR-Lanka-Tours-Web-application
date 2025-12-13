import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Packages() {
  const packages = [
    {
      id: 1,
      name: "Cultural Triangle Tour",
      image:
        "/assets/packages-pic/cultural.webp",
      duration: "6 Days / 5 Nights",
      description:
        "Explore ancient wonders like Sigiriya, Dambulla, and Kandy while experiencing Sri Lanka’s rich heritage.",
      highlights: ["Sigiriya Rock", "Dambulla Cave", "Kandy Temple"],
    },
    {
      id: 2,
      name: "Hill Country Escape",
      image:
        "/assets/packages-pic/hill.jpg",
      duration: "5 Days / 4 Nights",
      description:
        "Breathe fresh mountain air in Ella and Nuwara Eliya, surrounded by tea plantations and waterfalls.",
      highlights: ["Tea Estates", "Nine Arch Bridge", "Horton Plains"],
    },
    {
      id: 3,
      name: "Southern Beach Getaway",
      image:
        "/assets/packages-pic/beach.webp",
      duration: "4 Days / 3 Nights",
      description:
        "Relax on golden beaches, enjoy whale watching, and explore the historic Galle Fort.",
      highlights: ["Whale Watching", "Galle Fort", "Beach Relaxation"],
    },
    {
      id: 4,
      name: "Wildlife & Safari Adventure",
      image:
        "/assets/packages-pic/wildlife.jpg",
      duration: "5 Days / 4 Nights",
      description:
        "Get close to nature with unforgettable safaris in Yala and Udawalawe National Parks.",
      highlights: ["Yala Safari", "Elephants", "Leopards"],
    },
    {
      id: 5,
      name: "Ultimate Adventure Expedition",
      image:
        "/assets/packages-pic/adventure.jpg",
      duration: "7 Days / 6 Nights",
      description:
        "An action-packed journey featuring thrilling outdoor adventures, rugged landscapes, and unforgettable adrenaline-filled experiences.",
      highlights: ["Mountain Hiking", "White Water Rafting", "Jungle Camping"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/destinations-pics/bentota.avif')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
              Tour{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9]">
                Packages
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Carefully curated journeys across Sri Lanka — culture, nature,
              beaches, and unforgettable experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PACKAGES GRID */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                <div className="relative h-52">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold">
                    {pkg.duration}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">
                    {pkg.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {pkg.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#4F6F52]/10 text-[#4F6F52] rounded-full text-xs"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Link
                      to={`/packages/${pkg.id}`}
                      className="flex-1 bg-[#4F6F52] text-white py-2 rounded-xl text-center text-sm font-semibold hover:bg-[#3b5540] transition"
                    >
                      View Details
                    </Link>
                    <Link
                      to="/contact"
                      className="flex-1 border border-[#4F6F52] text-[#4F6F52] py-2 rounded-xl text-center text-sm font-semibold hover:bg-[#4F6F52] hover:text-white transition"
                    >
                      Book Now
                    </Link>
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
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>

            <div className="relative py-16 px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm mb-6">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Customize Your Dream Tour
                </h2>

                <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                  Can't find exactly what you're looking for? We specialize in
                  creating personalized itineraries that match your unique
                  travel style and preferences.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    to="/contact"
                    className="group bg-white text-[#4F6F52] px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg inline-flex items-center gap-3"
                  >
                    <span>Design Your Tour</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
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
