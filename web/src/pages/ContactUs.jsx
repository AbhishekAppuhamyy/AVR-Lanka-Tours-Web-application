import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4f8f4] to-white">
      {/* HERO */}
      <section className="bg-gradient-to-r from-[#2c3e2b] to-[#4f6f52] text-white py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center space-y-4"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            Contact <span className="text-[#D2E3C8]">Us</span>
          </h1>
          <p className="text-white/90 text-lg">
            Let’s plan your next unforgettable journey together 🌍
          </p>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        {/* CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-[#2c3e2b]">
            Get in Touch
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Have questions, need a custom tour, or ready to book?  
            Our team is here to help you every step of the way.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-[#4f6f52] text-xl" />
              <span className="text-gray-700 font-medium">
                +94 077 334 4167
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-[#4f6f52] text-xl" />
              <span className="text-gray-700 font-medium">
                avrtourss@gmail.com
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-[#4f6f52] text-xl" />
              <span className="text-gray-700 font-medium">
                Colombo, Sri Lanka
              </span>
            </div>
          </div>
        </motion.div>

        {/* CONTACT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
        >
          <h3 className="text-2xl font-semibold text-[#2c3e2b]">
            Send Us a Message
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#86A789]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#86A789]"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#86A789]"
          />

          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#86A789]"
          ></textarea>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#4f6f52] hover:bg-[#3f5f45] text-white px-6 py-3 rounded-xl font-semibold transition shadow-lg hover:scale-105"
          >
            <FaPaperPlane />
            Send Message
          </button>
        </motion.form>
      </section>
    </div>
  );
}
