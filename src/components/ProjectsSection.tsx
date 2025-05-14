
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "FALO AI",
      description: "Real-time fake news detection platform that was among the Top 12 Finalists in a national hackathon.",
      technologies: ["Python", "Machine Learning", "NLP", "Flask", "React"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Cross-Platform Mobile App",
      description: "Built a Flutter application with clean UI and efficient backend integration.",
      technologies: ["Flutter", "Firebase", "REST API", "Bloc Pattern"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "AI/ML Pipeline Integration",
      description: "Integrated ML models into real-world applications using various tools.",
      technologies: ["LangChain", "Groq", "n8n", "Python"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Database Management System",
      description: "Developed database solutions for efficient data storage and retrieval.",
      technologies: ["MongoDB", "SQL", "NoSQL", "Database Design"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2 text-center text-gradient">Projects</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on, showcasing my skills in Flutter development, 
          machine learning, and backend integration.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
