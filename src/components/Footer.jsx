import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"; // Importing icons from react-icons
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://github.com/yashwanth-smarty" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/yashwanth-thota-50b51b239/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/yashwanth_smarty/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://x.com/YashwanthSmarty" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
        </div>
        <p className="footer-text">© {new Date().getFullYear()} Yashwanth Thota. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
