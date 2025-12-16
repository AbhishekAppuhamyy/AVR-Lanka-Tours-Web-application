import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaClock,
  FaLeaf,
  FaLandmark,
  FaQuestionCircle,
} from "react-icons/fa";
import { useState, useEffect } from "react";

export default function CulturalTriangle() {
  const places = [
    {
      name: "Anuradhapura",
      image:
        "https://images.unsplash.com/photo-1588159343745-445ae0b16383?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Sigiriya Rock Fortress",
      image:
        "https://images.unsplash.com/photo-1602934585418-8ec9b8b3d08f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Dambulla Cave Temple",
      image:
        "https://images.unsplash.com/photo-1598940603846-a1edd0ef2574?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Polonnaruwa",
      image:
        "https://images.unsplash.com/photo-1624029353681-8f87f5fa1c64?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Temple of the Tooth – Kandy",
      image:
        "https://images.unsplash.com/photo-1586500036706-41963de24d8b?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6faf6]">
      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] sm:h-[70vh] ">
        <img
          src="/assets/packages-pic/cultural.webp"
          alt="Cultural Triangle Tour"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center text-white
               text-center sm:text-left"
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-3 sm:mb-4 leading-tight mt-20 sm:mt-0">
            Cultural Triangle Tour
          </h1>

          <p className="max-w-2xl mx-auto sm:mx-0 text-base sm:text-lg text-white/90 mb-6">
            Journey through Sri Lanka’s ancient capitals — where history comes
            alive.
          </p>

          <Link
            to="/contact"
            className="mx-auto sm:mx-0 bg-[#4F6F52] w-fit px-7 py-3 rounded-xl font-semibold
                 hover:scale-105 transition "
          >
            Plan Your Tour
          </Link>
        </motion.div>
      </section>

      {/* ================= ABOUT (MODERN) ================= */}
      <section className="relative py-20">
        {/* subtle background accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#4F6F52]/5 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-block text-sm font-semibold tracking-wide text-[#4F6F52] uppercase ">
              Ancient Sri Lanka
            </span>

            <h2 className="text-4xl font-extrabold leading-tight">
              About the{" "}
              <span className="text-[#4F6F52]">Cultural Triangle</span>
            </h2>

            <div className="w-20 h-1 bg-[#4F6F52] rounded-full" />

            <p className="text-gray-700 text-lg leading-relaxed">
              The Cultural Triangle represents the heart of Sri Lanka’s ancient
              civilization. Dating back to the 4th century BC, this region
              preserves sacred Buddhist cities, royal capitals, and monumental
              architecture that shaped the island’s history for over 2,000
              years.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {[
                { value: "4th  BC", label: "Origins" },
                { value: "6+", label: "UNESCO Sites" },
                { value: "2,000+", label: "Years Old" },
                { value: "100+", label: "Sacred Monuments" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-4 shadow text-center"
                >
                  <p className="text-2xl font-extrabold text-[#4F6F52]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT – QUICK FACTS (GLASS CARD) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>

            <ul className="space-y-5">
              {[
                {
                  icon: <FaLandmark />,
                  text: "UNESCO World Heritage region",
                },
                {
                  icon: <FaMapMarkerAlt />,
                  text: "Ancient capitals: Anuradhapura & Polonnaruwa",
                },
                {
                  icon: <FaLeaf />,
                  text: "World’s oldest living tree (Sri Maha Bodhi)",
                },
                {
                  icon: <FaClock />,
                  text: "Over 2,000 years of continuous history",
                },
                {
                  icon: <FaLandmark />,
                  text: "Massive stone stupas & sacred temples",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="text-[#4F6F52] text-xl mt-1">
                    {item.icon}
                  </span>
                  <span className="text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= PLACES YOU’LL VISIT (MODERN AUTO SLIDER) ================= */}
      <section className="relative py-20 overflow-hidden">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Places You’ll Visit
        </h2>

        <AutoPlacesSlider places={places} />
      </section>

      {/* ================= EXPERIENCES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">Featured Experiences</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Sacred City Exploration",
              desc: "Guided visits to ancient monasteries, stupas, and the sacred Sri Maha Bodhi tree.",
              icon: <FaLandmark />,
              duration: "6 Hours",
            },
            {
              title: "Cycling Heritage Trail",
              desc: "Cycle through archaeological ruins and hidden historical sites.",
              icon: <FaLeaf />,
              duration: "4 Hours",
            },
            {
              title: "Cultural & Spiritual Tour",
              desc: "Experience Buddhist traditions, rituals, and sacred landmarks.",
              icon: <FaMapMarkerAlt />,
              duration: "5 Hours",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl shadow p-6"
            >
              <div className="text-3xl text-[#4F6F52] mb-4">{item.icon}</div>
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <span className="text-sm text-gray-500 flex items-center gap-2">
                <FaClock /> {item.duration}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Tour Location</h2>
        <div className="rounded-2xl overflow-hidden shadow">
          <iframe
            title="Cultural Triangle Map"
            src="https://www.google.com/maps?q=Anuradhapura%20Sri%20Lanka&output=embed"
            className="w-full h-[400px]"
            loading="lazy"
          />
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>

        {[
          {
            q: "What should I wear when visiting temples?",
            a: "Modest clothing is required. Shoulders and knees must be covered, and shoes removed.",
          },
          {
            q: "Is cycling suitable for all travelers?",
            a: "Yes. Routes are mostly flat and suitable for all fitness levels.",
          },
          {
            q: "Is a guide recommended?",
            a: "Yes. A licensed guide enriches the historical and cultural experience.",
          },
        ].map((faq, index) => (
          <div key={index} className="bg-white rounded-xl p-5 shadow mb-4">
            <h4 className="font-semibold flex items-center gap-2">
              <FaQuestionCircle className="text-[#4F6F52]" />
              {faq.q}
            </h4>
            <p className="text-gray-600 mt-2">{faq.a}</p>
          </div>
        ))}
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-[#4F6F52] to-[#5A7D5A] text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Want a Custom Cultural Triangle Tour?
        </h2>
        <p className="mb-6 text-white/90">
          Tell us your preferences and we’ll craft a personalized itinerary.
        </p>
        <Link
          to="/contact"
          className="bg-white text-[#4F6F52] px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Customize My Trip
        </Link>
      </section>
    </div>
  );
}

/* ================= AUTO SLIDER COMPONENT ================= */

function AutoPlacesSlider({ places }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % places.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [places.length]);

  return (
    <div className="relative max-w-6xl mx-auto px-6">
      {/* Blurred Background */}
      <motion.img
        key={active}
        src={places[active].image}
        className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-110"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      />

      {/* Slider Cards */}
      <div className="relative flex justify-center items-center h-[420px]">
        {places.map((place, index) => (
          <motion.div
            key={index}
            className="absolute rounded-3xl overflow-hidden shadow-2xl"
            animate={{
              x: (index - active) * 260,
              scale: index === active ? 1 : 0.85,
              opacity: index === active ? 1 : 0.4,
              zIndex: index === active ? 10 : 1,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-[320px] h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-xl font-bold">{place.name}</h3>
              <p className="text-sm text-white/80">
                Cultural & Historical Landmark
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-10 gap-3">
        {places.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              active === i ? "bg-[#4F6F52] scale-125" : "bg-gray-400/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
