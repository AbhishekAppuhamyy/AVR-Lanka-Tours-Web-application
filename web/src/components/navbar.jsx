import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuItems = ["Home", "Packages", "Destinations", "Review"];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      {/* NAVBAR CONTAINER */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="relative flex items-center justify-between h-16 px-6 rounded-xl
                   bg-black/50 backdrop-blur-xl border border-black/30 shadow-xl"
      >
        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-white tracking-tight"
        >
          AVR Lanka Tours
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-white/90 font-medium hover:text-[#86A789] transition"
              >
                {item}
              </Link>
            </motion.div>
          ))}

          {/* CONTACT BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/ContactUs"
              className="px-5 py-2 rounded-full bg-[#86A789] text-white
                         font-semibold shadow-md hover:bg-[#739072]
                         hover:scale-105 transition-all"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2 rounded-xl overflow-hidden
                       bg-black/60 backdrop-blur-xl border border-black/30 shadow-lg"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="block px-6 py-3 text-white/90 font-medium
                             hover:bg-white/10 transition"
                >
                  {item}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              <Link
                to="/ContactUs"
                onClick={() => setMobileOpen(false)}
                className="block mx-4 my-3 px-5 py-2 rounded-full
                           bg-[#86A789] text-white text-center font-semibold
                           hover:bg-[#739072] transition"
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
