import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuItems = ["Home", "Packages", "Destinations", "Review"];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl z-50">
      {/* Navbar Container */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className="flex justify-between items-center h-16 px-6 rounded-xl backdrop-blur-xl bg-white/20 border border-white/10 shadow-lg"
      >
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-[#4F6F52] tracking-tight"
        >
          AVR Lanka Tours
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-[#4F6F52] font-medium hover:text-[#86A789] transition duration-300"
              >
                {item}
              </Link>
            </motion.div>
          ))}

          {/* Contact Button */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/contact"
              className="ml-4 px-5 py-2 rounded-full bg-[#86A789] text-white font-semibold shadow-lg hover:bg-[#739072] transition duration-300"
            >
              Contact us
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-[#4F6F52] focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/20 backdrop-blur-xl border-t border-white/10 rounded-b-xl overflow-hidden"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="block px-6 py-3 text-[#4F6F52] font-medium hover:bg-[#86A789]/20 transition duration-300"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                to="/contact"
                className="block mx-4 my-2 px-5 py-2 rounded-full text-white bg-[#86A789] text-center font-semibold hover:bg-[#739072] transition duration-300"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
