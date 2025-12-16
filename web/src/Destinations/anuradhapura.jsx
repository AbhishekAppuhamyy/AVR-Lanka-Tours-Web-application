import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaMountain,
  FaClock,
  FaSun,
  FaCamera,
  FaHiking,
  FaMonument,
  FaInfoCircle,
  FaRoute,
  FaQuestionCircle,
  FaTicketAlt,
  FaWater,
  FaHistory,
  FaCrown,
  FaLandmark,
  FaArrowRight
} from "react-icons/fa";

export default function Anuradhapura() {
  const highlights = [
    "UNESCO World Heritage Site",
    "Sacred Bodhi Tree",
    "Ancient stupas & monasteries",
    "First capital of Sri Lanka",
  ];

  const experiencePoints = [
    {
      icon: <FaHistory />,
      title: "Ancient Capital",
      description: "Sri Lanka’s first capital with over 2,000 years of history",
      color: "bg-amber-50",
      iconColor: "text-amber-600"
    },
    {
      icon: <FaLandmark />,
      title: "Sacred Bodhi Tree",
      description: "Oldest documented living tree in the world",
      color: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      icon: <FaMonument />,
      title: "Massive Stupas",
      description: "Ruwanwelisaya, Jetavanaramaya & Abhayagiri Dagobas",
      color: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: <FaCamera />,
      title: "Cultural Exploration",
      description: "Cycling through vast archaeological ruins",
      color: "bg-purple-50",
      iconColor: "text-purple-600"
    }
  ];

  const quickFacts = [
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Anuradhapura", detail: "North Central Province" },
    { icon: <FaCrown />, label: "Capital Era", value: "377 BC", detail: "Founded by King Pandukabhaya" },
    { icon: <FaClock />, label: "Visit Duration", value: "4–6 Hours", detail: "Full heritage tour" },
    { icon: <FaSun />, label: "Best Time", value: "Morning", detail: "Cooler weather" },
    { icon: <FaTicketAlt />, label: "Entry", value: "Ticket Required", detail: "Sacred city pass" },
    { icon: <FaLandmark />, label: "UNESCO", value: "Since 1982", detail: "World Heritage Site" },
  ];

  const faqs = [
    {
      question: "Why is Anuradhapura important?",
      answer: "Anuradhapura is Sri Lanka’s first capital and a sacred Buddhist city with immense historical and religious significance.",
    },
    {
      question: "What is the Sri Maha Bodhi Tree?",
      answer: "It is the oldest recorded living tree in the world, grown from a cutting of the Bodhi Tree in India.",
    },
    {
      question: "How should I explore Anuradhapura?",
      answer: "Cycling is the best way to explore the vast archaeological area comfortably.",
    },
    {
      question: "Is there a dress code?",
      answer: "Yes. Modest clothing covering shoulders and knees is required at religious sites.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex">
        <div
          className="absolute inset-0 bg-cover bg-[50%_30%]"
          style={{
            backgroundImage: "url('/assets/destinations-pics/ruwanwalisaya.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-40">
          <div className="max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
            >
              Anuradhapura
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-white/90 max-w-md"
            >
              Step into Sri Lanka’s ancient past — a sacred city of towering
              stupas, holy relics, and timeless spiritual heritage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex justify-center items-center px-6 py-3 rounded-xl text-sm sm:text-base font-semibold bg-[#4F6F52] text-white hover:bg-[#3b5540] transition shadow-lg shadow-black/30"
              >
                Plan Your Visit
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* QUICK FACTS BAR */}
      <section className="relative -mt-8 sm:-mt-12 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickFacts.map((fact, idx) => (
              <div key={idx} className="text-center group">
                <div className="flex justify-center mb-2">
                  <div className="p-2 rounded-lg bg-[#4F6F52]/10 group-hover:bg-[#4F6F52]/20 transition">
                    <span className="text-lg sm:text-xl text-[#4F6F52]">
                      {fact.icon}
                    </span>
                  </div>
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {fact.label}
                </p>
                <p className="text-sm sm:text-base font-bold text-gray-900 mt-1">
                  {fact.value}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {fact.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#4F6F52]/10">
                  <FaLandmark className="text-2xl text-[#4F6F52]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Sacred City of Anuradhapura
                  </h2>
                  <p className="text-gray-600">Sri Lanka’s First Kingdom</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                Anuradhapura is one of the world’s oldest continuously inhabited
                cities. It remains a sacred pilgrimage site, showcasing advanced
                ancient engineering, Buddhist heritage, and monumental stupas.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#4F6F52]" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#4F6F52] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#3b5540] transition shadow-md"
                >
                  Book Guided Tour
                  <FaArrowRight />
                </Link>
                <Link
                  to="/destinations"
                  className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-[#4F6F52] text-[#4F6F52] px-6 py-3 rounded-xl font-semibold hover:bg-[#4F6F52] hover:text-white transition"
                >
                  More Destinations
                </Link>
              </div>
            </motion.div>

            {/* EXPERIENCE CARDS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <FaRoute className="text-[#4F6F52]" />
                Key Experiences
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {experiencePoints.map((exp, idx) => (
                  <div
                    key={idx}
                    className={`${exp.color} rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl ${exp.iconColor} bg-white`}>
                        <span className="text-xl">{exp.icon}</span>
                      </div>
                      <h4 className="font-bold text-lg text-gray-900">
                        {exp.title}
                      </h4>
                    </div>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-8">
              <div className="bg-gradient-to-br from-[#4F6F52] to-[#3b5540] rounded-2xl shadow-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <FaInfoCircle />
                  Visit Information
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Best Time to Visit</h4>
                    <p className="text-sm">Early morning or late afternoon</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Getting Around</h4>
                    <p className="text-sm">Bicycle, tuk-tuk, or guided tour</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Dress Code</h4>
                    <p className="text-sm">Modest attire required</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <Link
                    to="/contact"
                    className="block w-full bg-white text-[#4F6F52] text-center font-semibold py-3 rounded-xl hover:bg-gray-100 transition"
                  >
                    Book Your Visit
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* FAQ SECTION */}
      <section className="py-2 sm:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 flex items-center justify-center gap-2">
              <div className="p-2 rounded-lg bg-[#4F6F52]/10">
                <FaQuestionCircle className="text-[#4F6F52]" />
              </div>
              Visitor FAQs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know before visiting Sigiriya Rock Fortress
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-5 sm:p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-lg bg-[#4F6F52]/10 flex items-center justify-center group-hover:bg-[#4F6F52]/20 transition">
                        <FaInfoCircle className="text-[#4F6F52] text-sm" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                        {item.question}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-10 pt-8 border-t border-gray-200"
          >
            <p className="text-gray-600 mb-4">
              Still have questions about visiting Sigiriya?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-[#4F6F52] font-semibold hover:text-[#3b5540] transition"
            >
              Contact our travel experts
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
