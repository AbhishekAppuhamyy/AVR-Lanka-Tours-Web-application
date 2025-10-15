import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const iconHover = { scale: 1.3, color: "#D2E3C8" };
  const linkHover = { scale: 1.05, color: "#D2E3C8", textDecoration: "underline" };

  return (
    <footer className="bg-gradient-to-tr from-[#2c3e2b] to-[#4f6f52] text-white mt- relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* Brand & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <h2 className="text-3xl font-extrabold text-[#D2E3C8]">AVR Lanka Tours</h2>
          <p className="text-[#D2E3C8] italic">Best Journeys, Not Just Trips!</p>
          <p className="text-[#D2E3C8]">More Than a Destination, It’s an Experience</p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-3"
        >
          <h3 className="text-lg font-semibold text-[#D2E3C8]">Contact Us</h3>
          <p>
            Phone: <a href="tel:+94773344167" className="underline hover:text-[#86A789] transition">+94 077 334 4167</a>
          </p>
          <p>
            Email: <a href="mailto:avrtourss@gmail.com" className="underline hover:text-[#86A789] transition">avrtourss@gmail.com</a>
          </p>
          <p>Location: Colombo, Sri Lanka</p>
        </motion.div>

        {/* Socials & Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Socials */}
          <div>
            <h3 className="text-lg font-semibold text-[#D2E3C8]">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  whileHover={iconHover}
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-[#D2E3C8] shadow-lg transition"
                >
                  <Icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#D2E3C8]">Quick Links</h3>
            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 mt-2">
              {["Home", "Packages", "Destinations", "Contact"].map((link) => (
                <motion.a
                  key={link}
                  whileHover={linkHover}
                  href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="text-[#D2E3C8] font-medium transition"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 mt-12"></div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-6 text-center text-sm text-[#D2E3C8] "
      >
        &copy; {new Date().getFullYear()} AVR Lanka Tours. All rights reserved.
      </motion.div>
    </footer>
  );
}
