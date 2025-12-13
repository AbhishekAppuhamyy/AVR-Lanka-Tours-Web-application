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
      description:
        "Explore ancient wonders like Sigiriya, Dambulla, and Kandy while experiencing Sri Lanka’s rich heritage.",
      highlights: ["Sigiriya Rock", "Dambulla Cave", "Kandy Temple"],
    },
    {
      id: 2,
      name: "Hill Country Escape",
      image:
        "https://images.unsplash.com/photo-1577968897966-3d62df5f4953?auto=format&fit=crop&w=800&q=80",
      duration: "5 Days / 4 Nights",
      description:
        "Breathe fresh mountain air in Ella and Nuwara Eliya, surrounded by tea plantations and waterfalls.",
      highlights: ["Tea Estates", "Nine Arch Bridge", "Horton Plains"],
    },
    {
      id: 3,
      name: "Southern Beach Getaway",
      image:
        "https://images.unsplash.com/photo-1540206352-093d6281c5d3?auto=format&fit=crop&w=800&q=80",
      duration: "4 Days / 3 Nights",
      description:
        "Relax on golden beaches, enjoy whale watching, and explore the historic Galle Fort.",
      highlights: ["Whale Watching", "Galle Fort", "Beach Relaxation"],
    },
    {
      id: 4,
      name: "Wildlife & Safari Adventure",
      image:
        "https://images.unsplash.com/photo-1549887534-3db1bd59dcca?auto=format&fit=crop&w=800&q=80",
      duration: "5 Days / 4 Nights",
      description:
        "Get close to nature with unforgettable safaris in Yala and Udawalawe National Parks.",
      highlights: ["Yala Safari", "Elephants", "Leopards"],
    },
    {
      id: 5,
      name: "Luxury Honeymoon Escape",
      image:
        "https://images.unsplash.com/photo-1526768291563-3c8a8af6d9a2?auto=format&fit=crop&w=800&q=80",
      duration: "7 Days / 6 Nights",
      description:
        "Romantic stays, private beaches, and luxury experiences crafted for unforgettable honeymoons.",
      highlights: ["Private Villas", "Luxury Spas", "Romantic Dining"],
    },
    {
      id: 6,
      name: "Northern Heritage Tour",
      image:
        "https://images.unsplash.com/photo-1579876578997-58f3e7f71b4b?auto=format&fit=crop&w=800&q=80",
      duration: "6 Days / 5 Nights",
      description:
        "Explore Jaffna’s culture, ancient temples, and the unique charm of Sri Lanka’s north.",
      highlights: ["Jaffna Culture", "Historic Temples", "Coastal Views"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/destinations-pics/bentota.avif')" }}
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
    </div>
  );
}
