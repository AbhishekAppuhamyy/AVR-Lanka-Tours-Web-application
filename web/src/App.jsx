// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
