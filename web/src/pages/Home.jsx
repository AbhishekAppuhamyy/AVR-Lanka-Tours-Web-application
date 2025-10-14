import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaMapMarkedAlt, FaPlaneDeparture, FaHotel, FaUmbrellaBeach } from "react-icons/fa";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center text-white px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Discover Sri Lanka with AVR Lanka Tours
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Experience paradise — from beaches to highlands, culture to adventure.
          </p>
          <Link
            to="/tours"
            className="bg-[#4F6F52] hover:bg-[#3b5540] transition px-6 py-3 rounded-lg text-white font-semibold"
          >
            Explore Tours
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Travel With Us?</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          AVR Lanka Tours is a trusted Sri Lankan travel agency offering customized packages,
          local expertise, and unforgettable experiences across the island. From golden beaches
          to misty mountains — we make every journey special.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: <FaMapMarkedAlt />, title: "Custom Tour Plans" },
            { icon: <FaPlaneDeparture />, title: "Airport Transfers" },
            { icon: <FaHotel />, title: "Comfortable Stays" },
            { icon: <FaUmbrellaBeach />, title: "Relaxing Beaches" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
            >
              <div className="text-[#4F6F52] text-4xl mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popular Tours Section */}
      <section className="bg-[#F3F4F6] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Popular Sri Lanka Tours</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cultural Triangle Tour",
                image:
                  "https://images.unsplash.com/photo-1602934585418-8ec9b8b3d08f?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Hill Country Escape",
                image:
                  "https://images.unsplash.com/photo-1577968897966-3d62df5f4953?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Southern Beach Getaway",
                image:
                  "https://images.unsplash.com/photo-1540206352-093d6281c5d3?auto=format&fit=crop&w=800&q=80",
              },
            ].map((tour, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white shadow-lg rounded-2xl overflow-hidden"
              >
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-xl mb-2">{tour.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Explore Sri Lanka’s beauty with guided tours and unique local experiences.
                  </p>
                  <Link
                    to="/tours"
                    className="inline-block bg-[#4F6F52] hover:bg-[#3b5540] text-white px-4 py-2 rounded-lg"
                  >
                    View Tour
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#4F6F52] text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready for Your Next Adventure?</h2>
        <p className="text-lg mb-6">
          Contact AVR Lanka Tours today and let us craft your dream Sri Lankan holiday.
        </p>
        <Link
          to="/contact"
          className="bg-white text-[#4F6F52] hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
