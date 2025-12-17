import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="relative  text-white">
      {/* ===== FULL PAGE BACKGROUND ===== */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/destinations-pics/bentota.avif')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* ================= HERO ================= */}
      <section className="mt-40 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center space-y-2"
        >
          <h1 className="text-4xl sm:text-6xl font-bold">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9]">
              AVR Lanka Tours
            </span>
          </h1>

          <p className="text-base sm:text-xl text-white/90 max-w-2xl mx-auto">
            Let’s plan your perfect Sri Lankan journey — authentic, curated, and
            unforgettable
          </p>
        </motion.div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="px-4 py-12 sm:py-16 mb-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl 
                 p-6 sm:p-10 lg:p-12 text-gray-900"
          >
            {/* Header */}
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-3xl font-bold">
                Get in Touch With Us
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-2xl mx-auto">
                Custom tours, bookings, or travel advice — our team is ready to
                assist you anytime.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Phone */}
              <div className="flex items-center gap-4 p-5 sm:p-6 rounded-2xl bg-[#4F6F52]/10">
                <FaPhoneAlt className="text-2xl text-[#4F6F52] shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Phone</p>
                  <p className="font-semibold text-sm sm:text-base">
                    +94 77 334 4167
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-5 sm:p-6 rounded-2xl bg-[#4F6F52]/10">
                <FaEnvelope className="text-2xl text-[#4F6F52] shrink-0" />
                <div className="break-all">
                  <p className="text-xs sm:text-sm text-gray-500">Email</p>
                  <p className="font-semibold text-sm sm:text-base">
                    avrtourss@gmail.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-5 sm:p-6 rounded-2xl bg-[#4F6F52]/10">
                <FaMapMarkerAlt className="text-2xl text-[#4F6F52] shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Location</p>
                  <p className="font-semibold text-sm sm:text-base">
                    Colombo, Sri Lanka
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/94773344167"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2
                     bg-[#4F6F52] text-white px-6 py-4 rounded-2xl
                     font-semibold shadow-lg hover:bg-[#3b5540] transition"
              >
                <FaWhatsapp />
                Chat on WhatsApp
              </a>

              <Link
                to="/packages"
                className="w-full sm:w-auto inline-flex items-center justify-center
                     border border-[#4F6F52] text-[#4F6F52]
                     px-6 py-4 rounded-2xl font-semibold
                     hover:bg-[#4F6F52] hover:text-white transition"
              >
                View Tour Packages
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
