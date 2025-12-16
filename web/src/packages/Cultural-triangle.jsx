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
      <section className="relative py-8 sm:py-15">
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

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
              About the{" "}
              <span className="text-[#4F6F52]">Cultural Triangle</span>
            </h2>

            <div className="w-20 h-1 bg-[#4F6F52] rounded-full" />

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              The Cultural Triangle represents the heart of Sri Lanka’s ancient
              civilization. Dating back to the 4th century BC, this region
              preserves sacred Buddhist cities, royal capitals, and monumental
              architecture that shaped the island’s history for over 2,000
              years.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 sm:pt-6">
              {[
                { value: "4th BC", label: "Origins" },
                { value: "6+", label: "UNESCO Sites" },
                { value: "2,000+", label: "Years Old" },
                { value: "100+", label: "Sacred Monuments" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow text-center"
                >
                  <p className="text-lg sm:text-xl  font-extrabold text-[#4F6F52]">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {stat.label}
                  </p>
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
            className="relative
            backdrop-blur-xl
            bg-white/80
            border border-white/40
            rounded-2xl sm:rounded-3xl  
            p-5 sm:p-8
            shadow-lg sm:shadow-xl"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Quick Facts
            </h3>

            <ul className="pace-y-4 sm:space-y-5">
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
                <li
                  key={i}
                  className="flex gap-3 sm:gap-4 items-start mb-2 sm:mb-3"
                >
                  <span className="text-[#4F6F52] text-lg sm:text-xl mt-0.5">
                    {item.icon}
                  </span>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= PLACES YOU’LL VISIT (MODERN AUTO SLIDER) ================= */}
      <section className="relative py-7 sm:py-8 overflow-hidden ">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Places You’ll Visit
        </h2>

        <AutoPlacesSlider places={places} />
      </section>

      {/* ================= EXPERIENCES ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-center md:text-left">
          Featured Experiences
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
              whileTap={{ scale: 0.97 }}
              className="bg-white rounded-2xl shadow-md p-6 sm:p-7 text-center sm:text-left"
            >
              {/* Icon */}
              <div className="flex justify-center sm:justify-start mb-4">
                <div className="w-14 h-14 rounded-xl bg-[#4F6F52]/10 flex items-center justify-center text-2xl text-[#4F6F52]">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-bold text-lg sm:text-xl mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                {item.desc}
              </p>

              {/* Duration */}
              <div className="flex justify-center sm:justify-start items-center gap-2 text-sm text-gray-500">
                <FaClock className="text-[#4F6F52]" />
                {item.duration}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="max-w-7xl mx-auto px-6 py-0 sm:py-2">
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
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center md:text-left">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-md"
            >
              {/* Question */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 shrink-0 rounded-lg bg-[#4F6F52]/10 flex items-center justify-center text-[#4F6F52]">
                  <FaQuestionCircle />
                </div>

                <h4 className="font-semibold text-sm sm:text-base">{faq.q}</h4>
              </div>

              {/* Answer */}
              <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed ml-12">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-[#4F6F52] to-[#5A7D5A] py-14 sm:py-16 px-4 sm:px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Want a Custom Cultural Triangle Tour?
          </h2>

          <p className="text-white/90 text-sm sm:text-base mb-6 leading-relaxed">
            Tell us your preferences and we’ll craft a personalized itinerary
            just for you.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center w-full sm:w-auto
                 bg-white text-[#4F6F52] px-8 py-4 rounded-xl
                 font-semibold text-sm sm:text-base
                 shadow-md transition
                 hover:scale-105 active:scale-95"
          >
            Customize My Trip
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

/* ================= AUTO SLIDER COMPONENT ================= */

function AutoPlacesSlider({ places }) {
  const [active, setActive] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // ---------- AUTO SLIDE ----------
  useEffect(() => {
    if (isDragging) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % places.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [places.length, isDragging]);

  // ---------- SWIPE HANDLER ----------
  const handleDragEnd = (_, info) => {
    setIsDragging(false);

    if (info.offset.x < -80) {
      // swipe left → next
      setActive((prev) => (prev + 1) % places.length);
    } else if (info.offset.x > 80) {
      // swipe right → prev
      setActive((prev) =>
        prev === 0 ? places.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto px-6 ">
      {/* ===== BLURRED BACKGROUND ===== */}
      <motion.img
        key={active}
        src={places[active].image}
        className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-110"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      />

      {/* ===== SLIDER ===== */}
      <div className="relative flex justify-center items-center h-[420px]">
        {places.map((place, index) => (
          <motion.div
            key={index}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            className="absolute rounded-3xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing"
            animate={{
              x: (index - active) * 260,
              scale: index === active ? 1 : 0.85,
              opacity: index === active ? 1 : 0.4,
              zIndex: index === active ? 10 : 1,
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-[300px] sm:w-[320px] h-[420px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            {/* Text */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-xl font-bold">{place.name}</h3>
              <p className="text-sm text-white/80">
                Cultural & Historical Landmark
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ===== DOTS ===== */}
      <div className="flex justify-center mt-10 gap-3">
        {places.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              active === i
                ? "bg-[#4F6F52] scale-125"
                : "bg-gray-400/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
