import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaClock,
  FaLeaf,
  FaCompass,
  FaQuestionCircle,
} from "react-icons/fa";
import { useState, useEffect } from "react";

export default function CustomTour() {
  const places = [
    {
      name: "Beaches of the South",
      image: "../assets/package-Detail-pics/Beach/coastline.jpeg",
    },
    {
      name: "Hill Country Escapes",
      image: "../assets/package-Detail-pics/Hill/tea.jpeg",
    },
    {
      name: "Wildlife Safaris",
      image: "../assets/package-Detail-pics/Wildlife/leopard-yala.jpg",
    },
    {
      name: "Ancient Cities",
      image: "../assets/package-Detail-pics/Cultural/polonnaruwa.jpg",
    },
    {
      name: "White water Rafting",
      image: "../assets/package-Detail-pics/Adventure/kitulgala.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6faf6]">
      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] sm:h-[70vh]">
        <img
          src="/assets/destinations-pics/gallefort.jpg"
          alt="Custom Sri Lanka Tour"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center text-white text-center sm:text-left"
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-3 leading-tight mt-20 sm:mt-0">
            Custom Sri Lanka Tour
          </h1>

          <p className="max-w-2xl mx-auto sm:mx-0 text-base sm:text-lg text-white/90 mb-6">
            Your journey, your pace — fully customized travel experiences across Sri Lanka.
          </p>

          <Link
            to="/contactus"
            className="mx-auto sm:mx-0 bg-[#4F6F52] w-fit px-7 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Start Planning
          </Link>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="relative py-8 sm:py-15">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4F6F52]/5 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-block text-sm font-semibold tracking-wide text-[#4F6F52] uppercase">
              Tailor-Made Experiences
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
              About Our <span className="text-[#4F6F52]">Custom Tours</span>
            </h2>

            <div className="w-20 h-1 bg-[#4F6F52] rounded-full" />

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Our custom tours are designed around your interests, travel style, and budget.
              Whether you love adventure, relaxation, culture, or luxury — we craft a
              personalized itinerary that fits you perfectly.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
              {[
                { value: "100%", label: "Customized" },
                { value: "Any", label: "Duration" },
                { value: "Island", label: "Wide Coverage" },
                { value: "Private", label: "Tours Only" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-4 shadow text-center"
                >
                  <p className="text-xl font-extrabold text-[#4F6F52]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="backdrop-blur-xl bg-white/80 border border-white/40 rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6">Why Choose Custom?</h3>

            <ul className="space-y-5">
              {[
                { icon: <FaCompass />, text: "Tailored itinerary just for you" },
                { icon: <FaMapMarkerAlt />, text: "Choose destinations you love" },
                { icon: <FaLeaf />, text: "Flexible travel pace & style" },
                { icon: <FaClock />, text: "Your dates, your schedule" },
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

      {/* ================= PLACES SLIDER ================= */}
      <section className="relative py-7 overflow-hidden">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Choose Your Destinations
        </h2>

        <AutoPlacesSlider places={places} />
      </section>

      {/* ================= EXPERIENCES ================= */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold mb-10">Popular Custom Experiences</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Beach & Relaxation",
              desc: "Sun-kissed beaches, luxury resorts, and coastal escapes.",
              icon: <FaLeaf />,
              duration: "Flexible",
            },
            {
              title: "Adventure & Nature",
              desc: "Hiking, safaris, waterfalls, and thrilling outdoor activities.",
              icon: <FaCompass />,
              duration: "Flexible",
            },
            {
              title: "Culture & Heritage",
              desc: "Ancient cities, temples, traditions, and local life.",
              icon: <FaMapMarkerAlt />,
              duration: "Flexible",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl shadow-md p-7"
            >
              <div className="w-14 h-14 rounded-xl bg-[#4F6F52]/10 flex items-center justify-center text-2xl text-[#4F6F52] mb-4">
                {item.icon}
              </div>

              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FaClock className="text-[#4F6F52]" />
                {item.duration}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold mb-8">FAQs</h2>

        <div className="space-y-4">
          {[
            {
              q: "Can I choose my own destinations?",
              a: "Yes, you can select any destinations across Sri Lanka.",
            },
            {
              q: "Is the itinerary flexible?",
              a: "Absolutely. Everything is planned around your preferences.",
            },
            {
              q: "Is private transport included?",
              a: "Yes, all custom tours include private vehicles and drivers.",
            },
          ].map((faq, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md"
            >
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-lg bg-[#4F6F52]/10 flex items-center justify-center text-[#4F6F52]">
                  <FaQuestionCircle />
                </div>
                <h4 className="font-semibold">{faq.q}</h4>
              </div>
              <p className="text-gray-600 mt-3 ml-12">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-[#4F6F52] to-[#5A7D5A] py-16 px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Design Your Dream Trip?
          </h2>
          <p className="text-white/90 mb-6">
            Tell us what you want — we’ll handle the rest.
          </p>

          <Link
            to="/contactus"
            className="inline-flex items-center justify-center bg-white text-[#4F6F52] px-8 py-4 rounded-xl font-semibold shadow-md hover:scale-105 transition"
          >
            Create My Custom Tour
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

/* ================= SAME AUTO SLIDER (UNCHANGED) ================= */

function AutoPlacesSlider({ places }) {
  const [active, setActive] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (isDragging) return;
    const timer = setInterval(
      () => setActive((p) => (p + 1) % places.length),
      4000
    );
    return () => clearInterval(timer);
  }, [places.length, isDragging]);

  const handleDragEnd = (_, info) => {
    setIsDragging(false);
    if (info.offset.x < -80)
      setActive((p) => (p + 1) % places.length);
    if (info.offset.x > 80)
      setActive((p) => (p === 0 ? places.length - 1 : p - 1));
  };

  return (
    <div className="relative max-w-6xl mx-auto px-6">
      <motion.img
        key={active}
        src={places[active].image}
        className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-110"
      />

      <div className="relative flex justify-center items-center h-[420px]">
        {places.map((place, i) => (
          <motion.div
            key={i}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            className="absolute rounded-3xl overflow-hidden shadow-2xl"
            animate={{
              x: (i - active) * 260,
              scale: i === active ? 1 : 0.85,
              opacity: i === active ? 1 : 0.4,
              zIndex: i === active ? 10 : 1,
            }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-[320px] h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-xl font-bold">{place.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-10 gap-3">
        {places.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-3 h-3 rounded-full ${
              active === i ? "bg-[#4F6F52] scale-125" : "bg-gray-400/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
