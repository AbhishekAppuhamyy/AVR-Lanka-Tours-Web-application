
export default function Footer() {
  return (
    <footer className="bg-[#739072] text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          
          {/* Brand */}
          <div className="text-xl font-bold text-[#D2E3C8]">
            AVR Lanka Tours
          </div>

          {/* Navigation */}
          <div className="flex space-x-6">
            <a href="/" className="hover:text-[#D2E3C8] transition duration-300">
              Home
            </a>
            <a href="/tours" className="hover:text-[#D2E3C8] transition duration-300">
              Tours
            </a>
            <a href="/about" className="hover:text-[#D2E3C8] transition duration-300">
              About
            </a>
            <a href="/contact" className="hover:text-[#D2E3C8] transition duration-300">
              Contact
            </a>
          </div>

          {/* Socials */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#D2E3C8] transition duration-300">
              FB
            </a>
            <a href="#" className="hover:text-[#D2E3C8] transition duration-300">
              IG
            </a>
            <a href="#" className="hover:text-[#D2E3C8] transition duration-300">
              TW
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-[#D2E3C8]">
          &copy; {new Date().getFullYear()} AVR Lanka Tours. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
