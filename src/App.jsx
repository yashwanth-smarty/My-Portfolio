import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Optional: Add your Navbar component
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import Footer from "./components/Footer"; // Import the Footer component
import "./index.css";

const App = () => {
  return (
    <div className="wholepage">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer component added below */}
      <Footer />
    </div>
  );
};

export default App;
