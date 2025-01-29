import { Link } from 'react-router-dom';
import {
  FaLaptopCode,
  FaProjectDiagram,
  FaInfoCircle,
  FaEnvelope,
  FaCertificate,
} from 'react-icons/fa'; // Import icons
import './navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo Icon on the left side */}
      <div className="navbar-logo">
        <Link to="/My-Portfolio" className="navbar-logo-link">
          <FaLaptopCode className="logo-icon" /> {/* Icon representing your portfolio */}
          <span className="logo-text">MyPortfolio</span> {/* Optional text beside icon */}
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="navbar-links">
        <Link to="/projects" className="navbar-link">
          <FaProjectDiagram className="icon" /> Projects
        </Link>
        <Link to="/about" className="navbar-link">
          <FaInfoCircle className="icon" /> About
        </Link>
        <Link to="/certifications" className="navbar-link">
          <FaCertificate className="icon" /> Certifications
        </Link>
        <Link to="/contact" className="navbar-link">
          <FaEnvelope className="icon" /> Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
