import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaClock,
  FaLeaf,
  FaLandmark,
  FaQuestionCircle,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaPause,
} from "react-icons/fa";
import { useState, useEffect } from "react";

export default function CulturalTriangle() {
  const places = [
    {
      name: "Anuradhapura",
      image: "/assets/places/anuradhapura.jpg",
      description: "Ancient capital with sacred Buddhist stupas",
      highlight: "UNESCO World Heritage Site",
      color: "#4F6F52",
    },
    {
      name: "Sigiriya Rock Fortress",
      image: "/assets/places/sigiriya.jpg",
      description: "Lion Rock with ancient palace ruins",
      highlight: "8th Wonder of the World",
      color: "#8B4513",
    },
    {
      name: "Dambulla Cave Temple",
      image: "/assets/places/dambulla.jpg",
      description: "Golden Buddha statues in cave temples",
      highlight: "Largest cave temple complex",
      color: "#D4A017",
    },
    {
      name: "Polonnaruwa",
      image: "/assets/places/polonnaruwa.jpg",
      description: "Medieval capital with well-preserved ruins",
      highlight: "Ancient irrigation systems",
      color: "#2E8B57",
    },
    {
      name: "Temple of the Tooth – Kandy",
      image: "/assets/places/kandy.jpg",
      description: "Sacred tooth relic of Buddha",
      highlight: "Cultural heart of Sri Lanka",
      color: "#8B0000",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Auto-rotate places
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % places.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, places.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % places.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + places.length) % places.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="min-h-screen bg-[#f6faf6]">
      {/* ================= HERO ================= */}
      <section className="relative h-[75vh]">
        <img
          src="/assets/packages-pic/cultural.webp"
          alt="Cultural Triangle Tour"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-white"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Cultural Triangle Tour
          </h1>
          <p className="max-w-2xl text-lg text-white/90 mb-6">
            Explore Sri Lanka's ancient capitals including Anuradhapura,
            Sigiriya, Dambulla, Polonnaruwa, and Kandy — a journey through
            history, spirituality, and culture.
          </p>

          <Link
            to="/contact"
            className="bg-[#4F6F52] w-fit px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Plan Your Tour
          </Link>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">
            About the Cultural Triangle
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The Cultural Triangle represents the heart of Sri Lanka's ancient
            civilization. Dating back to the 4th century BC, this region is
            home to UNESCO World Heritage Sites, sacred Buddhist monuments,
            royal palaces, and some of the world's most impressive dagobas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 shadow"
        >
          <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
          <ul className="space-y-3 text-gray-700">
            <li>✔ UNESCO World Heritage region</li>
            <li>✔ Ancient capitals: Anuradhapura & Polonnaruwa</li>
            <li>✔ World's oldest living tree (Sri Maha Bodhi)</li>
            <li>✔ Sacred Buddhist pilgrimage sites</li>
            <li>✔ Massive stone stupas & temples</li>
          </ul>
        </motion.div>
      </section>

      {/* ================= MODERN PLACES GALLERY ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Places You'll Visit</h2>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 rounded-full bg-white shadow hover:shadow-lg transition"
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            
            <div className="flex gap-2">
              {places.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "bg-[#4F6F52] scale-125"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main Carousel */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div
            className="relative h-[500px] md:h-[600px] overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Background Image with Parallax Effect */}
            <motion.div
              key={activeIndex}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <img
                src={places[activeIndex].image}
                alt={places[activeIndex].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </motion.div>

            {/* Content Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 text-white"
            >
              <div className="max-w-2xl">
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-sm mb-4">
                  {places[activeIndex].highlight}
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-3">
                  {places[activeIndex].name}
                </h3>
                <p className="text-lg text-white/90 mb-6">
                  {places[activeIndex].description}
                </p>
                
                {/* Progress Bar */}
                <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 4, ease: "linear" }}
                    className="h-full bg-white"
                    key={activeIndex}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all"
            aria-label="Previous place"
          >
            <FaChevronLeft className="text-white text-xl" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all"
            aria-label="Next place"
          >
            <FaChevronRight className="text-white text-xl" />
          </button>

          {/* Thumbnail Preview */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
            {places.map((place, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  idx === activeIndex
                    ? "border-white scale-110"
                    : "border-transparent opacity-70"
                }`}
                aria-label={`View ${place.name}`}
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover"
                />
                {idx === activeIndex && (
                  <div className="absolute inset-0 bg-white/20" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Place Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
          {places.map((place, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveIndex(idx)}
              className={`p-4 rounded-xl text-center transition-all duration-300 ${
                idx === activeIndex
                  ? "bg-[#4F6F52] text-white shadow-lg"
                  : "bg-white text-gray-700 shadow hover:shadow-md"
              }`}
            >
              <div
                className="w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center text-white"
                style={{ backgroundColor: place.color }}
              >
                {idx + 1}
              </div>
              <span className="font-medium text-sm">{place.name}</span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* ================= EXPERIENCES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">Featured Experiences</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Sacred City Exploration",
              desc:
                "Guided visits to ancient monasteries, stupas, and the sacred Sri Maha Bodhi tree.",
              icon: <FaLandmark />,
              duration: "6 Hours",
            },
            {
              title: "Cycling Heritage Trail",
              desc:
                "Cycle through archaeological ruins and hidden historical sites.",
              icon: <FaLeaf />,
              duration: "4 Hours",
            },
            {
              title: "Cultural & Spiritual Tour",
              desc:
                "Experience Buddhist traditions, rituals, and sacred landmarks.",
              icon: <FaMapMarkerAlt />,
              duration: "5 Hours",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl shadow p-6"
            >
              <div className="text-3xl text-[#4F6F52] mb-4">
                {item.icon}
              </div>
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
        <h2 className="text-3xl font-bold mb-8">
          Frequently Asked Questions
        </h2>

        {[
          {
            q: "What should I wear when visiting temples?",
            a:
              "Modest clothing is required. Shoulders and knees must be covered, and shoes removed.",
          },
          {
            q: "Is cycling suitable for all travelers?",
            a:
              "Yes. Routes are mostly flat and suitable for all fitness levels.",
          },
          {
            q: "Is a guide recommended?",
            a:
              "Yes. A licensed guide enriches the historical and cultural experience.",
          },
        ].map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-5 shadow mb-4"
          >
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
          Tell us your preferences and we'll craft a personalized itinerary.
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