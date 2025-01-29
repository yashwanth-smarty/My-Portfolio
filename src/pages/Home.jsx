import { Typewriter } from "react-simple-typewriter";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home-container">
        {/* Left Section */}
        <div className="home-content">
          <h1 className="title">
            Hi, I’m <span className="highlight">Yashwanth</span>
          </h1>
          <p className="description">
          A recent B.Tech graduate in Computer Science, with a strong foundation in Data analysis, AI/ML, and Full Stack. Skilled in Python, SQL, React.js, Power BI. I have hands-on experience in developing scalable web applications, exploaratory data analysis, AI based applications. My passion lies in leveraging data to solve real-world problems and delivering impactful solutions.   </p>
          <p className="dynamic-text">
            <span className="typing">
              <Typewriter
                words={[
                  "Data Analyst",
                  "Full Stack Developer",
                  "AI Enthusiast",
                ]}
                loop={Infinity}
                typeSpeed={120}
                deleteSpeed={90}
                delaySpeed={90}
              />
            </span>
          </p>
          <div>
            <h2 className="tagline">Explore to discover something intriguing about me!</h2>
          </div>
        </div>

        {/* Right Section */}
        <div className="home-image-container">
          <img
            src="Profile.jpg" // Replace this with your image URL or path
            alt="Yashwanth"
            className="home-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
