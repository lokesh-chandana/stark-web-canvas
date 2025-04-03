
import React from 'react';
import ProjectCard, { ProjectCardProps } from './ProjectCard';

const projectsData: ProjectCardProps[] = [
  {
    title: "E-commerce Website",
    description: "A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Task Management App",
    description: "A productivity application that helps users organize their tasks with drag-and-drop functionality.",
    technologies: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application featuring 7-day forecasts and location-based weather data.",
    technologies: ["JavaScript", "React", "Weather API", "Chart.js"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Portfolio Website",
    description: "A clean, minimalist portfolio website showcasing my web development projects.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here's a selection of my recent work. Each project was built with a focus on performance, user experience, and clean code.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
