import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl z-50 backdrop-blur-xl bg-white/20 border border-white/10 rounded-xl shadow-lg">
      <div className="flex justify-between items-center h-16 px-6">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-[#4F6F52] tracking-tight"
        >
          AVR Lanka Tours
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {["Home", "Packages", "Destinations", "Review"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-[#4F6F52] font-medium hover:text-[#86A789] transition duration-300"
            >
              {item}
            </Link>
          ))}

          {/* Contact Button */}
          <Link
            to="/contact"
            className="ml-4 px-5 py-2 rounded-full bg-[#86A789] text-white font-semibold shadow-lg hover:bg-[#739072] transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              menu.classList.toggle("hidden");
            }}
            className="text-[#4F6F52] focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="hidden md:hidden bg-white/20 backdrop-blur-xl border-t border-white/10 rounded-b-xl"
      >
        {["Home", "Packages", "Destinations", "Review"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="block px-6 py-3 text-[#4F6F52] font-medium hover:bg-[#86A789]/20 transition duration-300"
          >
            {item}
          </Link>
        ))}
        <Link
          to="/contact"
          className="block mx-4 my-2 px-5 py-2 rounded-full text-white bg-[#86A789] text-center font-semibold hover:bg-[#739072] transition duration-300"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
