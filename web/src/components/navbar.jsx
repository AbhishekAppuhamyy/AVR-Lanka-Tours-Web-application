import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Packages", path: "/packages" },
    { name: "Destinations", path: "/destinations" },
    { name: "Review", path: "/review" },
  ];

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[94%] max-w-7xl z-50">
      {/* ================= NAVBAR ================= */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="relative flex items-center justify-between h-16 px-6 sm:px-8
        rounded-2xl
        bg-gradient-to-b from-[#1f2f2a]/80 to-[#0f1a17]/80
        backdrop-blur-2xl backdrop-saturate-150
        border border-white/10
        shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
      >
        {/* LOGO */}
        <motion.div
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link
              to="/"
              className="text-2xl font-bold tracking-tight bg-gradient-to-r 
                         from-[#86a789] via-white to-[#b6c9b8] bg-clip-text text-transparent
                         hover:opacity-90 transition-opacity"
            >
              AVR Lanka Tours
              <div className="h-0.5 w-full bg-gradient-to-r from-[#4F6F52]/50 to-transparent mt-1" />
            </Link>
          </motion.div>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-medium transition
                ${
                  isActive
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.name}

                {/* Active underline */}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 w-full h-[2px] rounded-full bg-[#7FBF9B]"
                  />
                )}
              </Link>
            );
          })}

          {/* CONTACT BUTTON */}
          <Link
            to="/ContactUs"
            className="ml-2 px-5 py-2 rounded-xl text-sm font-semibold
            bg-[#4F6F52] text-white
            hover:bg-[#3b5540]
            hover:scale-105
            transition-all shadow-lg"
          >
            Contact Us
          </Link>
        </div>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
          </div>
        </button>
      </motion.div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mt-3 rounded-2xl overflow-hidden
            bg-gradient-to-b from-[#1b2a25]/90 to-[#0b1411]/95
            backdrop-blur-xl border border-white/10
            shadow-2xl md:hidden"
          >
            <div className="flex flex-col divide-y divide-white/10">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="block px-6 py-4 text-white/90 font-medium
                    hover:bg-white/10 transition"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* MOBILE CONTACT */}
              <div className="p-4">
                <Link
                  to="/ContactUs"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center px-5 py-3 rounded-xl
                  bg-[#4F6F52] text-white font-semibold
                  hover:bg-[#3b5540] transition"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
