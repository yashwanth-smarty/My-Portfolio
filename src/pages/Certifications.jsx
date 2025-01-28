import { motion } from "framer-motion"; // Import for animations
import "./certifications.css"
const Certifications = () => {
  const certifications = [
    {
      title: "Data Analytics Internship",
      issuer: "IBM SkillsBuild",
      date: "July 2023",
      link: "https://drive.google.com/file/d/1GUE99W7ucexS8foUIiFa0weobuL-oSwk/view?usp=drive_link",
    },
    {
      title: "Salesforce Developer Internship",
      issuer: "Salesforce",
      date: "May 2023",
      link: "https://drive.google.com/file/d/11rW1tuOQpos2FdO-ANWwycZ9TAmq0iOZ/view?usp=drive_link",
    },
    {
        title: "Web Developer Internship",
        issuer: "PHN Technologies",
        date: "June 2023",
        link: "https://drive.google.com/file/d/1zO8GTT8NbRuQqWC6GRWgsg6Bh1Oe1RpD/view?usp=drive_link",
      },
    
    {
      title: "Machine Learning Fundamentals",
      issuer: "YBI Foundation",
      date: "April 2023",
      link: "https://drive.google.com/file/d/1zKovhUIDieuVyODAZCm-fW5nHF6kC8Ne/view?usp=drive_link",
    },
    {
        title: "Web Development Course",
        issuer: "John Hopkins University",
        date: "April 2022",
        link: "https://drive.google.com/file/d/1mnD0UcM4UrhUzyJGulYZIto3_Yq7cw7z/view?usp=drive_link",
      },
    {
        title: "Programming Essentials in Python",
        issuer: "Cisco",
        date: "March 2023",
        link: "https://drive.google.com/file/d/1z7rbJRXeozRrp733I3eLHKL56LZmoBWM/view?usp=drive_link",
      },
      {
        title: "Data Analyst Course",
        issuer: "Udemy",
        date: "February 2025",
        link: "#",
      },
      {
        title: "Python with DSA",
        issuer: "Udemy",
        date: "January 2025",
        link: "#",
      },
  ];

  return (
    <div className="certifications">
      <motion.h1
        className="certifications-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Certifications
      </motion.h1>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.link} // Redirects to the certificate link
            target="_blank"
            rel="noopener noreferrer"
            className="certification-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="certification-title">{cert.title}</h2>
            <p className="certification-issuer">{cert.issuer}</p>
            <p className="certification-date">{cert.date}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
