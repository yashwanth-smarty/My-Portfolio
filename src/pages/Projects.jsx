import "./projects.css"; // Import CSS for styling

const Projects = () => {
  const projectData = [
    // Conversational AI Projects
    {
      id: 1,
      name: "Conversational Chatbot with Message History",
      description: "A chatbot that maintains conversational context by storing and utilizing message history for seamless interactions.",
      technologies: "Python, LangChain, Flask",
      image: "/ChatBot.jpeg",
      link: "https://your-project-link.com",
    },
    {
      id: 2,
      name: "Conversational Chat with PDF along with History",
      description: "Built a conversational chatbot capable of querying information from PDFs while preserving chat history.",
      technologies: "Python, LangChain, PDF Libraries",
      image: "/ChatBot.jpeg",
      link: "https://your-project-link.com",
    },

    // Generative AI Projects
    {
      id: 3,
      name: "Search Engine Gen AI App using Open Source LLM",
      description: "Designed a search engine application powered by an open-source language model for generating human-like responses.",
      technologies: "Python, Open Source LLM, Flask",
      image: "/ChatBot.jpeg",
      link: "https://your-project-link.com",
    },
    {
      id: 4,
      name: "Blog Generation using AWS Lambda and Bedrock",
      description: "Developed a blog generation tool leveraging AWS Lambda and Amazon Bedrock to create dynamic content efficiently.",
      technologies: "AWS Lambda, Amazon Bedrock, Python",
      image: "/ChatBot.jpeg",
      link: "https://your-project-link.com",
    },
    {
      id: 5,
      name: "YouTube to Blog Page using CrewAI Agents",
      description: "Automated the conversion of YouTube videos into detailed blog pages using CrewAI Agents.",
      technologies: "CrewAI, Python, NLP",
      image: "/ChatBot.jpeg",
      link: "https://your-project-link.com",
    },

    // Data and Knowledge Integration Projects
    {
      id: 6,
      name: "Chat with SQL DB using LangChain SQL Toolkit and AgentType",
      description: "Created a system for interacting with SQL databases using LangChain's SQL toolkit and an AgentType framework for intelligent querying.",
      technologies: "Python, LangChain, SQL Toolkit",
      image: "/ChatBot.jpeg",
      link: "https://your-project-link.com",
    },
    {
      id: 7,
      name: "PDF Query with LangChain and AstraDB",
      description: "Implemented a query tool combining LangChain and AstraDB to extract and retrieve relevant information from PDFs.",
      technologies: "LangChain, AstraDB, Python",
      image: "/ChatBot.jpeg",
      link: "https://your-project-link.com",
    },

    // Content Summarization and Retrieval Projects
    {
      id: 8,
      name: "YouTube or Website URL Content Summarization",
      description: "Developed a summarization system for extracting concise insights from YouTube videos or website content.",
      technologies: "Python, NLP, Web Scraping",
      image: "/ChatBot.jpeg",
      link: "https://your-project-link.com",
    },
    {
      id: 9,
      name: "Multi-AI RAG Chatbots using LangGraph and AstraDB",
      description: "Built multiple Retrieval-Augmented Generation (RAG) chatbots utilizing LangGraph and AstraDB for advanced knowledge retrieval.",
      technologies: "LangGraph, AstraDB, Python",
      image: "/ChatBot.jpeg",
      link: "https://your-project-link.com",
    },
    {
      id: 10,
      name: "Hybrid RAG Search with PineconeDB and LangChain",
      description: "Designed a hybrid RAG search engine integrating PineconeDB and LangChain for optimized knowledge discovery.",
      technologies: "PineconeDB, LangChain, Python",
      image: "/ChatBot.jpeg",
      link: "https://your-project-link.com",
    },
  ];

  const subHeaders = [
    "Conversational AI Projects",
    "Generative AI Projects",
    "Data and Knowledge Integration Projects",
    "Content Summarization and Retrieval Projects",
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-header">My Projects</h1>
      {subHeaders.map((subHeader, index) => {
        // Calculate the range of projects for each subheader (3 projects per row)
        const startIndex = index * 3;
        const endIndex = startIndex + 3;
        const projectsForRow = projectData.slice(startIndex, endIndex);

        return (
          <div key={index} className="projects-section">
            <h2 className="projects-subheader">{subHeader}</h2>
            <div className="projects-grid">
              {projectsForRow.map((project) => (
                <div key={project.id} className="project-card">
                  <img src={project.image} alt={project.name} className="project-image" />
                  <div className="project-content">
                    <h3 className="project-title">{project.name}</h3>
                    <p className="project-technologies">
                      <strong>Technologies:</strong> {project.technologies}
                    </p>
                    <p className="project-description">{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      View Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
