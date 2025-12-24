import { motion } from "framer-motion";
import React, { useEffect } from "react";
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
  FaStar,
  FaRoute,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
        "Comfortable private vehicles for safe and reliable travel across destinationshgjdsrjsrhrth",
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

  const homePackages = [
    {
      name: "Cultural Triangle Tour",
      image: "/assets/packages-pic/cultural.webp",
      duration: "6 Days / 5 Nights",
      description:
        "Explore ancient wonders like Sigiriya, Dambulla, and Kandy while experiencing Sri Lanka’s rich heritage.",
      highlights: ["Sigiriya", "Dambulla", "Kandy"],
      link: "/packages/Cultural-triangle",
    },
    {
      name: "Hill Country Escape",
      image: "/assets/packages-pic/hill.jpg",
      duration: "5 Days / 4 Nights",
      description:
        "Misty mountains, tea plantations, waterfalls, and scenic train rides.",
      highlights: ["Ella", "Tea Estates", "Waterfalls"],
      link: "/packages/hill-country",
    },
    {
      name: "Southern Beach Getaway",
      image: "/assets/packages-pic/beach.webp",
      duration: "4 Days / 3 Nights",
      description:
        "Golden beaches, whale watching, and colonial charm in Galle.",
      highlights: ["Mirissa", "Galle", "Beaches"],
      link: "/packages/southern-beach",
    },
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
            {/* Logo */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <div
                className="flex items-center justify-center
                  h-12 sm:h-16 lg:h-25
                  px-4 sm:px-6
                  rounded-xl
                  "
              >
                {/* Replace with your logo */}
                <img
                  src="/assets/AVRLogo.png"
                  alt="AVR Logo"
                  className="h-[54px] sm:h-[70px] lg:h-[80px] object-contain"
                />
              </div>
            </div>
            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold leading-snug sm:leading-tight mt-10">
              An Island of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9]">
                Endless Wonders to Explore
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-lg text-white/90 max-w-xl sm:max-w-2xl mx-auto">
              From beaches to highlands, history to wildlife, discover Sri Lanka
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-3 pt-3 sm:pt-4">
              <Link
                to="/Packages"
                className="flex items-center gap-2
             bg-white text-[#4F6F52]
             px-5 py-2.5 sm:px-6 sm:py-3
             rounded-full font-semibold
             text-sm sm:text-lg shadow-lg"
              >
                <FaRoute className="text-base sm:text-lg" />
                Tours
              </Link>

              <Link
                to="/destinations"
                className="flex items-center gap-2
             border border-white/40 text-white
             px-5 py-2.5 sm:px-6 sm:py-3
             rounded-full text-sm sm:text-lg"
              >
                <FaMapMarkerAlt className="text-base sm:text-lg" />
                Destinations
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div
            className="relative flex items-center justify-center w-9 h-14 rounded-full
                  border border-white/40 bg-white/10 backdrop-blur-md"
          >
            {/* Inner moving dot */}
            <motion.div
              animate={{ y: [0, 14, 0], opacity: [1, 0.4, 1] }}
              transition={{
                repeat: Infinity,
                duration: 1.4,
                ease: "easeInOut",
              }}
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

      {/* ================= FEATURES SECTION ================= */}
      <section className="py-12 sm:py-[47px] bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* ================= HEADER ================= */}
          <div className="relative mb-12 sm:mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-end">
              {/* LEFT — TITLE */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="mb-3 w-14 h-[3px] bg-gradient-to-r from-[#4F6F52] to-[#88a98c] rounded-full" />

                <span className="block text-[#4F6F52] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">
                  Our Expertise
                </span>

                <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-tight">
                  Redefining
                  <span className="block text-[#4F6F52] mt-1 sm:mt-2">
                    Travel in
                  </span>
                  <span className="block mt-1 sm:mt-2">Sri Lanka</span>
                </h2>
              </motion.div>

              {/* RIGHT — DESCRIPTION */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative mt-6 lg:mt-0 lg:pl-12"
              >
                <div className="hidden lg:block absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />

                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
                  We blend traditional Sri Lankan hospitality with modern
                  innovation to create journeys that feel authentic, personal,
                  and unforgettable.
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-[2px] bg-[#4F6F52]" />
                  <span className="text-sm text-gray-500 tracking-wide">
                    Established 2015
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ================= FEATURES GRID ================= */}
          <div className="relative mb-10">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => {
                const isLarge = i === 1 || i === 4;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.12,
                      type: "spring",
                      stiffness: 100,
                    }}
                    viewport={{ once: true }}
                    className={`relative ${
                      isLarge ? "sm:col-span-2 lg:col-span-1" : ""
                    }
                lg:${i % 2 === 0 ? "-translate-y-6" : "translate-y-6"}`}
                  >
                    <div className="group h-full bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-[#4F6F52]/30 relative overflow-hidden">
                      {/* Hover glow */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#4F6F52]/5 to-transparent rounded-full translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500" />

                      <div className="relative">
                        {/* Icon */}
                        <div className="relative mb-6 sm:mb-8">
                          <div className="absolute -inset-3 bg-gradient-to-r from-[#4F6F52]/10 to-transparent rounded-xl -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
                          <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-100 flex items-center justify-center shadow-sm">
                            <div className="text-xl sm:text-2xl text-[#4F6F52]">
                              {f.icon}
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-3 group-hover:text-[#4F6F52] transition-colors">
                          {f.title}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                          {f.description}
                        </p>

                        {/* Progress */}
                        <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.2, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-[#4F6F52] to-[#3A5A40]"
                          />
                        </div>
                      </div>

                      {/* Index badge */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#4F6F52] to-[#3A5A40] rounded-lg flex items-center justify-center text-xs font-bold text-white rotate-12 group-hover:rotate-0 transition-transform">
                        {i + 1}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ================= CTA ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-8 bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-lg sm:text-xl text-gray-900 mb-1">
                  Ready to explore?
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Get your personalized itinerary in 24 hours
                </p>
              </div>

              <Link to="/contactus">
                <button className="group px-8 py-3 bg-gradient-to-r from-[#4F6F52] to-[#3A5A40] text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    Start Planning
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Grid background */}
        <style jsx>{`
          .bg-grid-pattern {
            background-image: linear-gradient(
                to right,
                #00000008 1px,
                transparent 1px
              ),
              linear-gradient(to bottom, #00000008 1px, transparent 1px);
            background-size: 48px 48px;
          }
        `}</style>
      </section>

      {/* FEATURED PACKAGES SECTION */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Featured <span className="text-[#4F6F52]">Tour Packages</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Carefully curated journeys across Sri Lanka — culture, nature, and
              unforgettable experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homePackages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                {/* Image */}
                <div className="relative h-56">
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

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    {pkg.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {pkg.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.highlights.map((h, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 bg-[#4F6F52]/10 text-[#4F6F52] rounded-full text-xs"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Link
                      to={pkg.link}
                      className="flex-1 bg-[#4F6F52] text-white py-2 rounded-xl text-center text-sm font-semibold hover:bg-[#3b5540] transition"
                    >
                      View Details
                    </Link>

                    <Link
                      to="/contactus"
                      className="flex-1 border border-[#4F6F52] text-[#4F6F52] py-2 rounded-xl text-center text-sm font-semibold hover:bg-[#4F6F52] hover:text-white transition"
                    >
                      Book Now
                    </Link>
                  </div>
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

      {/* ================= HOME REVIEWS SECTION ================= */}
      {/* ================= HOME REVIEWS SECTION ================= */}
      <section className="relative py-20 bg-gradient-to-br from-[#f7faf7] via-white to-[#eef5f0] overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#4F6F52]/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#4F6F52]/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-xs tracking-widest uppercase font-semibold text-[#4F6F52]">
              Traveler Reviews
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
              Loved by Travelers Worldwide
            </h2>

            <p className="text-gray-600 text-base sm:text-lg">
              Real stories from travelers who explored Sri Lanka with AVR Lanka
              Tours.
            </p>
          </motion.div>

          {/* Reviews Widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl 
                 border border-white/60 shadow-xl p-6 sm:p-8"
          >
            <div
              className="elfsight-app-2e49e47f-c2dc-4c48-83d7-3d01918e04e8 
                   min-h-[320px] sm:min-h-[380px]"
              data-elfsight-app-lazy
            />
          </motion.div>

          {/* Write Review – UNDER REVIEWS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-10"
          >
            <div
              className="relative bg-gradient-to-r from-[#4F6F52] to-[#5A7D5A]
                   rounded-3xl p-8 sm:p-10 text-white shadow-2xl
                   flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              {/* Left */}
              <div className="flex items-start gap-4 text-center sm:text-left">
                <FaStar className="text-4xl text-white/90 shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-1">
                    Share Your Experience
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base max-w-xl">
                    Traveled with us? Your review helps future travelers plan
                    their perfect Sri Lankan journey.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://g.page/r/CRsm9F0Mya_mEAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#4F6F52]
                     px-7 py-3 rounded-xl font-semibold
                     hover:scale-105 transition-all shadow-lg"
              >
                Write a Review
              </a>
            </div>
          </motion.div>
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
              to="/contactus"
              className="bg-white text-[#4F6F52] px-6 py-3 rounded-xl font-semibold text-base hover:scale-105 shadow-lg transition-all"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
