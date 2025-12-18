// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

// Pages
import Home from "./pages/Home.jsx";
import Packages from "./pages/Packages.jsx";
import Destinations from "./pages/Destinations.jsx";
import Review from "./pages/Review.jsx";
import Contact from "./pages/ContactUs.jsx";

// Destinations
import Sigiriya from "./Destinations/sigiriya.jsx";
import TempleOfTooth from "./Destinations/templeofthetooth.jsx"
import GalleFort from "./Destinations/galle-fort.jsx";
import Dambulla from "./Destinations/dambulla.jsx";
import AdamsPeak from "./Destinations/adams-peak.jsx";
import Polonaruwa from "./Destinations/polonaruwa.jsx";
import Yala from "./Destinations/yala-national-park.jsx";
import NuwaraEliya from "./Destinations/nuwara-eliya.jsx";
import Ella from "./Destinations/ella.jsx";
import Bentota from "./Destinations/bentota.jsx";
import Mirissa from "./Destinations/mirissa.jsx";
import Hikkaduwa from "./Destinations/hikkaduwa.jsx";
import Anuradhapura from "./Destinations/anuradhapura.jsx";
import KnucklesMountainRange from "./Destinations/knuckles-mountain-range.jsx";
import ArugamBay from "./Destinations/arugam-bay.jsx";


// Packages
import Cultural from "./packages/Cultural-triangle.jsx";
import HillCountry from "./packages/hill-country.jsx";
import SouthernBeachGetaway from "./packages/southern-beach.jsx";
import WildlifeSafariAdventure from "./packages/wildlife-safari.jsx";
import UltimateAdventureExpedition from "./packages/adventure.jsx";
import Custom from "./packages/custom.jsx";



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
        <Route path="/ContactUs" element={<Contact />} />

        {/* Destinations */}
        <Route path="/destinations/sigiriya" element={<Sigiriya />} />
        <Route path="/destinations/templeofthetooth" element={<TempleOfTooth />} />
        <Route path="/destinations/galle-fort" element={<GalleFort />} />
        <Route path="/destinations/dambulla" element={<Dambulla />} />
        <Route path="/destinations/adams-peak" element={<AdamsPeak />} />
        <Route path="/destinations/polonaruwa" element={<Polonaruwa />} />
        <Route path="/destinations/yala-national-park" element={<Yala />} />
        <Route path="/destinations/nuwara-eliya" element={<NuwaraEliya />} />
        <Route path="/destinations/ella" element={<Ella />} />
        <Route path="/destinations/bentota" element={<Bentota />} />
        <Route path="/destinations/mirissa" element={<Mirissa />} />
        <Route path="/destinations/hikkaduwa" element={<Hikkaduwa />} />
        <Route path="/destinations/anuradhapura" element={<Anuradhapura />} />
        <Route path="/destinations/knuckles-mountain-range" element={<KnucklesMountainRange />} />
        <Route path="/destinations/arugam-bay" element={<ArugamBay />} />

        
        {/* Packages */}
        <Route path="/packages/cultural-triangle" element={<Cultural />} />
        <Route path="/packages/hill-country" element={<HillCountry />} />
        <Route path="/packages/southern-beach" element={<SouthernBeachGetaway />} />
        <Route path="/packages/wildlife-safari" element={<WildlifeSafariAdventure />} />
        <Route path="/packages/adventure" element={<UltimateAdventureExpedition />} />
        <Route path="/packages/custom" element={<Custom />} />
        
        
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
