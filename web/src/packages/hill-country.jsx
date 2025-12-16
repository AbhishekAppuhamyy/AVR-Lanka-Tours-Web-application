import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaClock,
  FaLeaf,
  FaLandmark,
  FaQuestionCircle,
  FaMountain,
} from "react-icons/fa";
import { useState, useEffect } from "react";

export default function HillCountryEscape() {
  const places = [
    {
      name: "Ella",
      image:
        "https://images.unsplash.com/photo-1591172419968-3b90c8c7c8d3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Nine Arch Bridge",
      image:
        "https://images.unsplash.com/photo-1601121141528-4308f7c6b52f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Nuwara Eliya",
      image:
        "https://images.unsplash.com/photo-1624029353681-8f87f5fa1c64?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Tea Plantations",
      image:
        "https://images.unsplash.com/photo-1586500036706-41963de24d8b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Horton Plains",
      image:
        "https://images.unsplash.com/photo-1610878180933-1236b3c4b7fa?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6faf6]">
      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] sm:h-[70vh]">
        <img
          src="/assets/packages-pic/hill.jpg"
          alt="Hill Country Escape"
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
            Hill Country Escape
          </h1>

          <p className="max-w-2xl mx-auto sm:mx-0 text-base sm:text-lg text-white/90 mb-6">
            Breathe fresh mountain air in Ella and Nuwara Eliya, surrounded by
            misty hills, tea estates, and waterfalls.
          </p>

          <Link
            to="/contact"
            className="mx-auto sm:mx-0 bg-[#4F6F52] w-fit px-7 py-3 rounded-xl font-semibold
                 hover:scale-105 transition"
          >
            Plan Your Tour
          </Link>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="relative py-8 sm:py-15">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4F6F52]/5 to-transparent pointer-events-none" />

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
              Sri Lanka Highlands
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
              About the <span className="text-[#4F6F52]">Hill Country</span>
            </h2>

            <div className="w-20 h-1 bg-[#4F6F52] rounded-full" />

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Sri Lanka’s hill country is a cool-climate paradise known for lush
              tea plantations, rolling mountains, colonial towns, and scenic
              hiking trails. This region offers a peaceful escape into nature,
              culture, and breathtaking landscapes.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 sm:pt-6">
              {[
                { value: "5 Days", label: "Duration" },
                { value: "1,800m+", label: "Altitude" },
                { value: "20°C", label: "Cool Climate" },
                { value: "100+", label: "Waterfalls" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow text-center"
                >
                  <p className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#4F6F52]">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT – QUICK FACTS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="backdrop-blur-xl bg-white/80 border border-white/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-lg sm:shadow-xl"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Quick Facts
            </h3>

            <ul className="space-y-5">
              {[
                {
                  icon: <FaMountain />,
                  text: "Cool climate & misty mountains",
                },
                {
                  icon: <FaLeaf />,
                  text: "Endless tea plantations",
                },
                {
                  icon: <FaMapMarkerAlt />,
                  text: "Ella, Nuwara Eliya & Horton Plains",
                },
                {
                  icon: <FaClock />,
                  text: "Perfect 5-day getaway",
                },
                {
                  icon: <FaLandmark />,
                  text: "Colonial architecture & viewpoints",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="text-[#4F6F52] text-xl mt-0.5">
                    {item.icon}
                  </span>
                  <span className="text-sm sm:text-base text-gray-700">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= PLACES SLIDER ================= */}
      <section className="relative py-7 sm:py-8 overflow-hidden">
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
              title: "Tea Plantation Walks",
              desc: "Explore lush tea estates and learn about Ceylon tea production.",
              icon: <FaLeaf />,
              duration: "3 Hours",
            },
            {
              title: "Scenic Train Ride",
              desc: "Enjoy one of the world’s most beautiful train journeys.",
              icon: <FaMapMarkerAlt />,
              duration: "4 Hours",
            },
            {
              title: "Nature & Hiking",
              desc: "Hike Horton Plains and witness breathtaking viewpoints.",
              icon: <FaMountain />,
              duration: "5 Hours",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white rounded-2xl shadow-md p-6 sm:p-7 text-center sm:text-left"
            >
              <div className="flex justify-center sm:justify-start mb-4">
                <div className="w-14 h-14 rounded-xl bg-[#4F6F52]/10 flex items-center justify-center text-2xl text-[#4F6F52]">
                  {item.icon}
                </div>
              </div>

              <h3 className="font-bold text-lg sm:text-xl mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base mb-4">
                {item.desc}
              </p>

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
            title="Hill Country Map"
            src="https://www.google.com/maps?q=Nuwara%20Eliya%20Sri%20Lanka&output=embed"
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
              q: "What is the best time to visit the hill country?",
              a: "The best time is from January to April when the weather is cool and dry.",
            },
            {
              q: "Is the hill country suitable for families?",
              a: "Yes. The destinations are family-friendly with scenic views and easy walks.",
            },
            {
              q: "Do we need warm clothing?",
              a: "Yes. Nuwara Eliya and Horton Plains can be quite cool, especially in the mornings.",
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
            Ready for a Hill Country Escape?
          </h2>

          <p className="text-white/90 text-sm sm:text-base mb-6">
            Let us plan the perfect mountain retreat for you.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center w-full sm:w-auto
                 bg-white text-[#4F6F52] px-8 py-4 rounded-xl font-semibold
                 shadow-md hover:scale-105 transition"
          >
            Customize My Trip
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

/* ================= AUTO SLIDER (UNCHANGED) ================= */

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
      <motion.img
        key={active}
        src={places[active].image}
        className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-110"
      />

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
              <p className="text-sm text-white/80">Hill Country Landmark</p>
            </div>
          </motion.div>
        ))}
      </div>

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
