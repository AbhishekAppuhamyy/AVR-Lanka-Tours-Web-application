import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaClock,
  FaMountain,
  FaTree,
  FaTrain,
  FaLandmark,
  FaQuestionCircle,
} from "react-icons/fa";

export default function HillCountryEscape() {
  return (
    <div className="min-h-screen bg-[#f6faf6]">

      {/* ================= HERO ================= */}
      <section className="relative h-[75vh]">
        <img
          src="/assets/packages-pic/hill.jpg"
          alt="Hill Country Escape"
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
            Hill Country Escape
          </h1>
          <p className="max-w-2xl text-lg text-white/90 mb-6">
            Journey through Sri Lanka’s scenic highlands — Ella, Nuwara Eliya,
            and Kandy — filled with misty mountains, tea plantations,
            waterfalls, and cultural heritage.
          </p>

          <Link
            to="/contact"
            className="bg-[#4F6F52] w-fit px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Plan Your Escape
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
            About Hill Country Escape
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This tour blends breathtaking landscapes with rich cultural
            heritage. Explore the relaxed charm of Ella, the colonial elegance
            of Nuwara Eliya, and the spiritual heart of Kandy — home to the
            sacred Temple of the Tooth Relic.
          </p>
        </motion.div>

        {/* QUICK FACTS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 shadow"
        >
          <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
          <ul className="space-y-3 text-gray-700">
            <li>✔ Cool mountain climate</li>
            <li>✔ Tea estates & waterfalls</li>
            <li>✔ Scenic train journeys</li>
            <li>✔ Colonial & cultural towns</li>
            <li>✔ Perfect for relaxation & nature lovers</li>
          </ul>
        </motion.div>
      </section>

      {/* ================= EXPERIENCES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">
          Highlights & Experiences
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Ella Nature Experience",
              desc:
                "Visit Nine Arch Bridge, Little Adam’s Peak, and enjoy panoramic mountain views.",
              icon: <FaMountain />,
              duration: "Full Day",
            },
            {
              title: "Nuwara Eliya Tea Country",
              desc:
                "Explore tea plantations, waterfalls, Gregory Lake, and colonial architecture.",
              icon: <FaTree />,
              duration: "Full Day",
            },
            {
              title: "Kandy Cultural Tour",
              desc:
                "Discover the Temple of the Tooth Relic, Kandy Lake, and cultural performances.",
              icon: <FaLandmark />,
              duration: "Half Day",
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

      {/* ================= SCENIC TRAIN ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col md:flex-row gap-6 items-center">
          <FaTrain className="text-5xl text-[#4F6F52]" />
          <div>
            <h3 className="text-2xl font-bold mb-2">
              World-Famous Scenic Train Ride
            </h3>
            <p className="text-gray-600">
              Enjoy one of the world’s most beautiful train journeys between
              Kandy, Nuwara Eliya, and Ella, passing through misty hills and tea
              estates.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Tour Route</h2>
        <div className="rounded-2xl overflow-hidden shadow">
          <iframe
            title="Kandy Ella Nuwara Eliya Map"
            src="https://www.google.com/maps?q=Kandy%20Nuwara%20Eliya%20Ella&output=embed"
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
            q: "What is the best time to visit the hill country?",
            a:
              "February to September is ideal for clear views and pleasant weather.",
          },
          {
            q: "Will it be cold?",
            a:
              "Evenings in Nuwara Eliya can be chilly. Light jackets are recommended.",
          },
          {
            q: "Is this tour suitable for families?",
            a:
              "Yes, it’s a relaxed itinerary suitable for couples, families, and seniors.",
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
          Ready for a Hill Country Escape?
        </h2>
        <p className="mb-6 text-white/90">
          We’ll customize your Ella, Nuwara Eliya & Kandy journey.
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
