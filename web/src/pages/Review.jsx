import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft, FaMapMarkerAlt, FaCalendarAlt, FaHeart } from "react-icons/fa";

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
    { number: "4.9★", label: "Average Rating", icon: <FaStar className="text-yellow-400" /> },
    { number: "2K+", label: "Happy Travelers", icon: <FaHeart className="text-red-400" /> },
    { number: "98%", label: "Would Recommend", icon: <FaQuoteLeft className="text-blue-400" /> },
    { number: "50+", label: "Destinations Covered", icon: <FaMapMarkerAlt className="text-green-400" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Modern Header Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#4F6F52]/5 to-transparent"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#4F6F52]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#4F6F52]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4F6F52]/10 border border-[#4F6F52]/20 text-[#4F6F52] text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 bg-[#4F6F52] rounded-full animate-pulse"></span>
              Trusted by Thousands of Travelers Worldwide
            </motion.div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Real Stories from{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6F52] to-[#5A7D5A]">
                Real Travelers
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Don't just take our word for it. Read authentic experiences from travelers who've 
              explored Sri Lanka with us and created memories that last a lifetime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center text-2xl mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-[#4F6F52] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      

      {/* Main Reviews Widget Section */}
      <section className="py-12 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Background Decoration */}
            <div className="absolute -inset-4 bg-white/50 rounded-3xl blur-xl"></div>
            
            {/* Widget Container */}
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-[#4F6F52]/10 border border-gray-100 p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  More Traveler Reviews
                </h3>
                <p className="text-gray-600">
                  See what hundreds of other travelers are saying about their experiences
                </p>
              </div>
              
              <div className="flex justify-center">
                <div 
                  className="elfsight-app-2e49e47f-c2dc-4c48-83d7-3d01918e04e8 w-full min-h-[400px]"
                  data-elfsight-app-lazy
                ></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-r from-[#4F6F52] to-[#5A7D5A] rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>
            
            {/* Animated Background Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative py-16 px-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm mb-6"
              >
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
              </motion.div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Share Your Sri Lankan Journey
              </h2>
              
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Loved your adventure with AVR Lanka Tours? Your story could inspire the next traveler 
                to discover the magic of Sri Lanka. Share your experience and help others plan their perfect trip.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="https://g.page/YOUR_GOOGLE_BUSINESS_REVIEW_LINK/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-white text-[#4F6F52] px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl shadow-lg inline-flex items-center gap-3"
                >
                  <span>Share Your Review</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>
                
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group text-white/90 px-6 py-4 rounded-2xl font-medium transition-all duration-300 hover:text-white hover:bg-white/10 inline-flex items-center gap-2 border border-white/30"
                >
                  <span>Start Your Adventure</span>
                  <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.a>
              </div>
            </div>
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
              {["TripAdvisor", "Google Reviews", "Booking.com", "Trustpilot"].map((platform, index) => (
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