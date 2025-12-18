import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaMapMarkedAlt,
  FaPlaneDeparture,
  FaHotel,
  FaUmbrellaBeach,
  FaCompass,
  FaHeart,
  FaShieldAlt,
  FaShuttleVan,
} from "react-icons/fa";

export default function Home() {
  const features = [
    {
      icon: <FaMapMarkedAlt />,
      title: "Custom Tour Plans",
      description:
        "Tailored itineraries designed around your preferences and travel style",
    },
    {
      icon: <FaShuttleVan />,
      title: "Private Transport",
      description:
        "Comfortable private vehicles for safe and reliable travel across destinations",
    },
    {
      icon: <FaHotel />,
      title: "Premium Stays",
      description:
        "Carefully selected accommodations for maximum comfort and authenticity",
    },
    {
      icon: <FaUmbrellaBeach />,
      title: "Beach Experiences",
      description:
        "Exclusive access to pristine beaches and coastal adventures",
    },
    {
      icon: <FaCompass />,
      title: "Expert Guides",
      description:
        "Local guides with deep knowledge of Sri Lankan culture and history",
    },
    {
      icon: <FaShieldAlt />,
      title: "Travel Safe",
      description: "24/7 support and comprehensive travel insurance options",
    },
  ];

  const popularTours = [
    {
      title: "Cultural Triangle Tour",
      image:
        "https://images.unsplash.com/photo-1602934585418-8ec9b8b3d08f?auto=format&fit=crop&w=800&q=80",
      duration: "6 Days",
      price: "From LKR 85,000",
      highlights: ["Sigiriya", "Dambulla", "Ancient Cities"],
    },
    {
      title: "Hill Country Escape",
      image:
        "https://images.unsplash.com/photo-1577968897966-3d62df5f4953?auto=format&fit=crop&w=800&q=80",
      duration: "5 Days",
      price: "From LKR 72,000",
      highlights: ["Tea Plantations", "Ella", "Waterfalls"],
    },
    {
      title: "Southern Beach Getaway",
      image:
        "https://images.unsplash.com/photo-1540206352-093d6281c5d3?auto=format&fit=crop&w=800&q=80",
      duration: "4 Days",
      price: "From LKR 65,000",
      highlights: ["Mirissa", "Galle", "Whale Watching"],
    },
  ];

  const stats = [
    { number: "2K+", label: "Happy Travelers" },
    { number: "50+", label: "Destinations" },
    { number: "4.9★", label: "Customer Rating" },
    { number: "15+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* HERO SECTION */}
      <section className="relative min-h-[100svh] sm:min-h-screen flex items-center justify-center overflow-hidden">
  
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    preload="none"
    className="absolute inset-0 w-full h-full object-cover"
    poster="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
  >
    <source src="/assets/beach.mp4" type="video/mp4" />
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center text-white">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-5 sm:space-y-8"
    >
      {/* Title */}
      <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight mt-10">
        Discover The{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9]">
          Pearl of the Indian Ocean
        </span>
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-lg text-white/90 max-w-xl sm:max-w-2xl mx-auto">
        From sun-kissed beaches to misty highlands, ancient cities to wildlife
        adventures — experience Sri Lanka like never before.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-3 pt-3 sm:pt-4">
        <Link
          to="/tours"
          className="flex items-center gap-2
            bg-white text-[#4F6F52]
            px-5 py-2.5 sm:px-6 sm:py-3
            rounded-full font-semibold
            text-sm sm:text-lg shadow-lg"
        >
          Tours
        </Link>

        <Link
          to="/destinations"
          className="flex items-center gap-2
            border border-white/40 text-white
            px-5 py-2.5 sm:px-6 sm:py-3
            rounded-full text-sm sm:text-lg"
        >
          Destinations
        </Link>
      </div>
    </motion.div>
  </div>

  {/* Scroll Indicator */}
  {/* Scroll Indicator */}
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
  <div className="relative flex items-center justify-center w-9 h-14 rounded-full
                  border border-white/40 bg-white/10 backdrop-blur-md">

    {/* Inner moving dot */}
    <motion.div
      animate={{ y: [0, 14, 0], opacity: [1, 0.4, 1] }}
      transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
      className="w-1.5 h-1.5 rounded-full bg-[#C8E6C9]"
    />
  </div>

  <motion.span
    animate={{ opacity: [0.6, 1, 0.6] }}
    transition={{ repeat: Infinity, duration: 1.6 }}
    className="mt-2 text-[11px] font-semibold tracking-widest text-[#E8F5E9]"
  >
    SCROLL
  </motion.span>
</div>

</section>


      {/* FEATURES SECTION */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Why Choose <span className="text-[#4F6F52]">AVR Lanka Tours</span>
              ?
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              We combine local expertise with personalized service to create
              unforgettable Sri Lankan adventures.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all"
              >
                <div className="text-[#4F6F52] text-3xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR TOURS SECTION */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Most <span className="text-[#4F6F52]">Popular Tours</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Handpicked experiences loved by travelers. Discover the best of
              Sri Lanka.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTours.map((tour, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="relative h-56 sm:h-64">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-3 left-3 bg-white/90 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                    {tour.duration}
                  </div>
                  <div className="absolute bottom-3 left-3 text-white font-semibold text-lg">
                    {tour.price}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">{tour.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tour.highlights.map((h, j) => (
                      <span
                        key={j}
                        className="px-2 py-1 bg-[#4F6F52]/10 text-[#4F6F52] rounded-full text-xs"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/tours"
                    className="block w-full bg-[#4F6F52] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#3b5540] transition"
                  >
                    Explore Tour
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/packages"
              className="text-[#4F6F52] font-semibold hover:text-[#3b5540]"
            >
              View All Tour Packages →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-gradient-to-r from-[#4F6F52] to-[#5A7D5A] text-center text-white px-4">
        <div className="max-w-3xl mx-auto">
          <FaHeart className="text-5xl mx-auto mb-4 text-white/90" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready for Your Sri Lankan Adventure?
          </h2>
          <p className="text-white/90 text-base sm:text-lg mb-8">
            Let us craft your perfect journey through paradise with personalized
            itineraries and unforgettable experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/contact"
              className="bg-white text-[#4F6F52] px-6 py-3 rounded-xl font-semibold text-base hover:scale-105 shadow-lg transition-all"
            >
              Start Your Journey
            </Link>
            <Link
              to="/about"
              className="border border-white/40 px-6 py-3 rounded-xl text-base text-white/90 hover:bg-white/10"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
