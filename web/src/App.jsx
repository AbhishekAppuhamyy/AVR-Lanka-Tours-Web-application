// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import Destinations from "./pages/Destinations";
import Review from "./pages/Review";
import Contact from "./pages/ContactUs";

// Destinations
import Sigiriya from "./Destinations/sigiriya.jsx";


// Packages
import Cultural from "./Packages/cultural-triangle.jsx";
import HillCountry from "./Packages/hill-country.jsx";


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<Contact />} />

        {/* Destinations */}
        <Route path="/destinations/sigiriya" element={<Sigiriya />} />
       
        {/* Packages */}
        <Route path="/packages/cultural-triangle" element={<Cultural />} />
        <Route path="/packages/hill-country" element={<HillCountry />} />
        
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
