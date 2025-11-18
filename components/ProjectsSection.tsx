
import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => (
  <div 
    className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 h-72 text-white"
    onClick={() => onClick(project)}
  >
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
      style={{ backgroundImage: `url(${project.coverImage})` }}
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    <div className="relative z-10 flex flex-col justify-end h-full p-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary-light">{project.category}</p>
      <h3 className="text-2xl font-serif font-bold">{project.title}</h3>
    </div>
  </div>
);


interface ProjectsSectionProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, onProjectClick }) => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-bold text-text-main mb-16 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={onProjectClick} />
          ))}
        </div>
      </div>
    </section>
  );
};
