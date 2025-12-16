import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaClock,
  FaLeaf,
  FaLandmark,
  FaQuestionCircle,
} from "react-icons/fa";

export default function CulturalTriangle() {
  const places = [
    {
      name: "Anuradhapura",
      image: "/assets/places/anuradhapura.jpg",
    },
    {
      name: "Sigiriya Rock Fortress",
      image: "/assets/places/sigiriya.jpg",
    },
    {
      name: "Dambulla Cave Temple",
      image: "/assets/places/dambulla.jpg",
    },
    {
      name: "Polonnaruwa",
      image: "/assets/places/polonnaruwa.jpg",
    },
    {
      name: "Temple of the Tooth – Kandy",
      image: "/assets/places/kandy.jpg",
    },
  ];

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
            Explore Sri Lanka’s ancient capitals including Anuradhapura,
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
            The Cultural Triangle represents the heart of Sri Lanka’s ancient
            civilization. Dating back to the 4th century BC, this region is
            home to UNESCO World Heritage Sites, sacred Buddhist monuments,
            royal palaces, and some of the world’s most impressive dagobas.
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
            <li>✔ World’s oldest living tree (Sri Maha Bodhi)</li>
            <li>✔ Sacred Buddhist pilgrimage sites</li>
            <li>✔ Massive stone stupas & temples</li>
          </ul>
        </motion.div>
      </section>

      {/* ================= PLACES GALLERY ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Places You’ll Visit
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {places.map((place, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl overflow-hidden shadow group"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg font-semibold">
                  {place.name}
                </h3>
              </div>
            </motion.div>
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
