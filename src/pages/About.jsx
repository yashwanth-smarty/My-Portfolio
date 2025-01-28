import "./about.css";

const About = () => {
  return (
    <div className="aboutme-container">
      <h1 className="aboutme-header">About Me</h1>

      <section className="aboutme-intro">
        <p className="intro-text">
          Hi, I’m <span className="highlight">Yashwanth</span>, a recent <strong>B.Tech graduate</strong> in Computer Science from MGIT, Gandipet. My passion for technology and problem-solving has driven me to explore and excel in Data Analytics, Data Science, and Software Development.
        </p>
      </section>

      <section className="aboutme-section">
        <h2 className="section-title">Education</h2>
        <ul>
          <li>B.Tech in Computer Science | Mahatma Gandhi Institute of Technology | CGPA: <strong>7.33</strong> | (2020-24)</li>
          <li>XII (Board of Intermediate Education) | Narayana Junior College | <strong>95.7%</strong> | (2018-20)</li>
        </ul>
      </section>

      <section className="aboutme-section">
        <h2 className="section-title">Internships</h2>
        <ul>
          <li>Data Analytics Intern | <strong>IBM SkillsBuild</strong></li>
          <li>Salesforce Developer Intern | <strong>Salesforce</strong></li>
          <li>Web Developer Intern | <strong>PHN Technologies</strong></li>
        </ul>
      </section>

      {/* <section className="aboutme-section">
        <h2 className="section-title">Projects</h2>
        <ul>
          <li>AI-powered interview bot that helps users practice for interviews using AI-driven responses.</li>
          <li>AI Toolkit for students: Includes coding assistance, document-based chat, speech-to-text note-taking, and more.</li>
          <li>Accused/Missing People Detection system using face recognition and real-time tracking.</li>
          <li>Movie Recommendation System based on users favorite movies.</li>
          <li>Mall Customer Pattern Analysis to identify distinct customer segments for marketing strategies.</li>
        </ul>
      </section> */}

      <section className="aboutme-section">
        <h2 className="section-title">Position of Responsibility</h2>
        <ul>
          <li>Student Coordinator | Coding Club, MGIT | Led 10+ events, including coding quizzes and DSA competitions engaging 100+ participants.</li>
          <li>Student Convenor | QUBIT 2022, MGIT | Organized a tech expo with 200+ participants, featuring technical games and competitions.</li>
        </ul>
      </section>

      <section className="aboutme-section">
        <h2 className="section-title">Achievements</h2>
        <ul>
          <li>Won the <strong>2023 CODE-FOR-INDIA</strong> 48-hour Hackathon, competing against 20+ teams.</li>
          <li>Secured first place at <strong>Shark Tank MGIT</strong> with an innovative business pitch among 15+ teams.</li>
        </ul>
      </section>

      <section className="aboutme-section">
        <h2 className="section-title">Skills</h2>
        <p>
          Python, SQL, C/C++, Java, HTML, CSS, JavaScript, React.js, Power BI, Flask, Git.
        </p>
      </section>

      <section className="aboutme-outro">
        <p className="outro-text">
          I am passionate about leveraging technology to solve real-world problems and am excited to contribute meaningfully to the tech field. Let’s <span className="highlight">connect and innovate together!</span>
        </p>
      </section>
    </div>
  );
};

export default About;
