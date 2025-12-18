import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden">
      {/* ===== BACKGROUND LAYERS ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1a17] via-[#14221e] to-[#0b1411]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#4F6F52]/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-20">
        {/* ===== TOP GRID ===== */}
        <div className="grid gap-16 lg:grid-cols-12 text-center lg:text-left">

          {/* ===== BRAND ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-5"
          >
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight
              bg-gradient-to-r from-[#86a789] via-white to-[#b6c9b8]
              bg-clip-text text-transparent"
            >
              AVR Lanka Tours
            </h2>

            <p className="text-white/70 max-w-md mx-auto lg:mx-0">
              Curated journeys across Sri Lanka — crafted for comfort,
              culture, and unforgettable memories.
            </p>

            {/* SOCIALS */}
            <div className="flex justify-center lg:justify-start gap-4 pt-4">
              {[FaFacebookF, FaInstagram, FaTiktok].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -4, scale: 1.1 }}
                  href="#"
                  className="w-12 h-12 flex items-center justify-center
                  rounded-full bg-white/5 hover:bg-[#4F6F52]
                  text-white backdrop-blur-md
                  border border-white/10 shadow-lg transition"
                >
                  <Icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ===== LINKS ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 space-y-4"
          >
            <h3 className="text-white font-semibold text-lg">Explore</h3>

            <ul className="space-y-3 text-white/65 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "Packages", path: "/packages" },
                { name: "Destinations", path: "/destinations" },
                { name: "Reviews", path: "/review" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="hover:text-white transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ===== CONTACT ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 space-y-4"
          >
            <h3 className="text-white font-semibold text-lg">
              Get in Touch
            </h3>

            <div className="space-y-3 text-white/65 text-sm">
              <p>
                📍 Negombo, Sri Lanka
              </p>

              <p>
                📞{" "}
                <a
                  href="tel:+94773344167"
                  className="hover:text-white transition"
                >
                  +94 077 334 4167
                </a>
              </p>

              <p>
                ✉️{" "}
                <a
                  href="mailto:avrtourss@gmail.com"
                  className="hover:text-white transition"
                >
                  avrlankatours@gmail.com
                </a>
              </p>
            </div>

            {/* CTA BUTTON */}
            <a
              href="/ContactUs"
              className="inline-block mt-4 px-6 py-3 rounded-xl
              bg-[#4F6F52] hover:bg-[#3b5540]
              text-white font-semibold text-sm
              transition shadow-lg"
            >
              Plan Your Trip
            </a>
          </motion.div>
        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="mt-20 pt-6 border-t border-white/10
        flex flex-col sm:flex-row gap-4 items-center justify-center text-xs text-white/50">
          <span>
            © {new Date().getFullYear()} AVR Lanka Tours. All rights reserved.
          </span>

          
        </div>
      </div>
    </footer>
  );
}
