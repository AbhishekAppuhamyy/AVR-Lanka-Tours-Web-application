import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaStar,
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaHeart,
} from "react-icons/fa";

export default function Reviews() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const stats = [
    {
      number: "4.9★",
      label: "Average Rating",
      icon: <FaStar className="text-yellow-400" />,
    },
    {
      number: "2K+",
      label: "Happy Travelers",
      icon: <FaHeart className="text-red-400" />,
    },
    {
      number: "98%",
      label: "Would Recommend",
      icon: <FaQuoteLeft className="text-blue-400" />,
    },
    {
      number: "50+",
      label: "Destinations Covered",
      icon: <FaMapMarkerAlt className="text-green-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* ===== REVIEWS HERO ===== */}
      <section className="relative py-16 sm:py-24 lg:py-36 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/destinations-pics/sigiriya.jpg"
            alt="Sri Lanka Traveler Reviews"
            className="w-full h-full object-cover"
            style={{
              objectPosition: "center 24% ", // safer on mobile
            }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/75" />
        </div>

        {/* Subtle texture */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-2 sm:mb-4 text-[11px] sm:text-xs tracking-[0.28em] uppercase 
                     text-white/80 font-semibold mt-20"
            >
              Traveler Reviews
            </motion.span>

            {/* Heading */}
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl 
                     font-serif font-bold leading-tight sm:leading-tight 
                     mt-2"
            >
              Journeys remembered.
              <br className="hidden sm:block" />
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r 
                       from-[#E8F5E9] to-[#C8E6C9]"
              >
                Stories shared.
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ================= TRAVELER VIEWS ================= */}
      <section
        className="relative py-6 sm:py-6  
                    bg-gradient-to-br from-[#f7faf7] via-white to-[#eef5f0] 
                    overflow-hidden "
      >
        {/* Soft background accents (extra small on mobile) */}
        <div
          className="absolute -top-24 -left-24 
                  w-56 h-56 sm:w-80 sm:h-80 lg:w-96 lg:h-96 
                  bg-[#4F6F52]/10 rounded-full blur-3xl"
        />
        <div
          className="absolute -bottom-24 -right-24 
                  w-56 h-56 sm:w-80 sm:h-80 lg:w-96 lg:h-96 
                  bg-[#4F6F52]/10 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Glass Card */}
            <div
              className="bg-white/85 backdrop-blur-xl 
                      rounded-2xl sm:rounded-3xl 
                      border border-white/60 
                      p-5 sm:p-8 lg:p-12"
            >
              {/* Header */}
              <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
                <span
                  className="inline-block text-[11px] sm:text-sm 
                           font-semibold tracking-widest 
                           text-[#4F6F52] uppercase mb-2"
                >
                  Real Experiences
                </span>

                <h3
                  className="text-2xl sm:text-3xl lg:text-4xl 
                         font-extrabold text-gray-900 
                         leading-tight sm:leading-snug mb-3"
                >
                  Traveler Views
                </h3>

                <p
                  className="text-sm sm:text-base lg:text-lg 
                        text-gray-600 leading-relaxed 
                        px-1 sm:px-0 text-balance"
                >
                  Honest stories, real moments, and unforgettable journeys
                  shared by travelers who explored Sri Lanka with us.
                </p>

                {/* Accent line */}
                <div className="mt-4 sm:mt-6 flex justify-center">
                  <div
                    className="w-14 sm:w-20 h-[3px] rounded-full 
                            bg-gradient-to-r from-[#4F6F52] to-[#88a98c]"
                  />
                </div>
              </div>

              {/* Reviews Widget */}
              <div className="flex justify-center">
                <div
                  className="elfsight-app-2e49e47f-c2dc-4c48-83d7-3d01918e04e8 
                       w-full 
                       min-h-[320px] sm:min-h-[380px] lg:min-h-[420px]
                       rounded-xl sm:rounded-2xl 
                       "
                  data-elfsight-app-lazy
                ></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative bg-gradient-to-r from-[#4F6F52] to-[#5A7D5A] 
                 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>

            {/* Soft blobs (smaller on mobile) */}
            <div
              className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 
                      bg-white/10 rounded-full -translate-y-12 translate-x-12"
            />
            <div
              className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 
                      bg-white/5 rounded-full translate-y-10 -translate-x-10"
            />

            {/* Content */}
            <div className="relative px-5 sm:px-8 py-12 sm:py-16 text-center">
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="mx-auto w-16 h-16 sm:w-20 sm:h-20 
                     bg-white/20 rounded-2xl backdrop-blur-sm 
                     flex items-center justify-center mb-5 sm:mb-6"
              >
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                </svg>
              </motion.div>

              {/* Heading */}
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl 
                       font-extrabold text-white 
                       leading-tight mb-3 sm:mb-4"
              >
                Share Your Sri Lankan Journey
              </h2>

              {/* Description */}
              <p
                className="text-white/90 text-sm sm:text-base lg:text-lg 
                      max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 px-1"
              >
                Loved your adventure with AVR Lanka Tours? Your story could
                inspire the next traveler to discover the magic of Sri Lanka.
                Share your experience and help others plan their perfect trip.
              </p>

              {/* Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 
                        justify-center items-stretch sm:items-center"
              >
                <motion.a
                  href="https://g.page/YOUR_GOOGLE_BUSINESS_REVIEW_LINK/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto 
                       bg-white text-[#4F6F52] 
                       px-6 sm:px-8 py-4 
                       rounded-2xl font-semibold 
                       shadow-lg hover:shadow-2xl 
                       transition-all inline-flex 
                       items-center justify-center gap-3"
                >
                  <span>Share Your Review</span>
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== Bold Modern Stats Section ===== */}
      <section className="relative py-20 bg-[#0F1F17] overflow-hidden">
        {/* background accents */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4F6F52]/20 via-transparent to-transparent" />
        <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-[#4F6F52]/30 rounded-full blur-[140px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -8 }}
                className="relative p-8 rounded-3xl border border-white/10 
                     bg-white/5 backdrop-blur-sm 
                     hover:bg-white/10 transition-all duration-300"
              >
                {/* Accent bar */}
                <span
                  className="absolute top-0 left-8 right-8 h-[2px] 
                           bg-gradient-to-r from-transparent via-[#8BC4A4] to-transparent"
                />

                {/* Icon */}
                <div className="mb-6 text-[#8BC4A4] text-2xl">{stat.icon}</div>

                {/* Number */}
                <div className="text-4xl font-extrabold text-white mb-2">
                  {stat.number}
                </div>

                {/* Label */}
                <div className="text-sm uppercase tracking-widest text-white/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Trusted By Travelers Worldwide
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center opacity-60">
              {[
                "TripAdvisor",
                "Google Reviews",
                "Booking.com",
                "Trustpilot",
              ].map((platform, index) => (
                <motion.div
                  key={platform}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-700 font-semibold text-lg"
                >
                  {platform}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
