import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-[#4F6F52]">
            AVR Lanka Tours
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-[#86A789] transition duration-300">
              Home
            </Link>
            <Link to="/packages" className="hover:text-[#86A789] transition duration-300">
              Packages
            </Link>
            <Link to="/destinations" className="hover:text-[#86A789] transition duration-300">
              Destinations
            </Link>
            <Link to="/review" className="hover:text-[#86A789] transition duration-300">
              Review
            </Link>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="ml-4 bg-[#86A789]/80 text-[#4F6F52] font-semibold px-4 py-2 rounded-lg backdrop-blur-sm hover:bg-[#D2E3C8]/80 transition duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="focus:outline-none"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu.classList.toggle("hidden");
              }}
            >
              <svg
                className="h-6 w-6 text-[#4F6F52]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="md:hidden hidden bg-white/30 backdrop-blur-md border-t border-white/20">
        <Link to="/" className="block px-4 py-2 text-[#4F6F52] hover:bg-[#86A789]/30 rounded transition duration-300">
          Home
        </Link>
        <Link to="/packages" className="block px-4 py-2 text-[#4F6F52] hover:bg-[#86A789]/30 rounded transition duration-300">
          Packages
        </Link>
        <Link to="/destinations" className="block px-4 py-2 text-[#4F6F52] hover:bg-[#86A789]/30 rounded transition duration-300">
          Destinations
        </Link>
        <Link to="/review" className="block px-4 py-2 text-[#4F6F52] hover:bg-[#86A789]/30 rounded transition duration-300">
          Review
        </Link>
        <Link
          to="/contact"
          className="block px-4 py-2 text-[#4F6F52] bg-[#86A789]/50 rounded m-2 text-center hover:bg-[#D2E3C8]/50 transition duration-300"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
