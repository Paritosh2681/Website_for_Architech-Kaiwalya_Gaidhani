import React, { useState, useEffect, useCallback } from 'react';
import type { Project } from '../types';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from './icons';
import { Link } from 'react-router-dom';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(true); // Start as true for initial fade-in

  // Effect for initial fade-in
  useEffect(() => {
    const timer = setTimeout(() => setIsFading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  const prevSlide = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(prev => (prev === 0 ? project.images.length - 1 : prev - 1));
      setIsFading(false);
    }, 300); // Matches transition duration
  }, [project.images.length]);

  const nextSlide = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(prev => (prev === project.images.length - 1 ? 0 : prev + 1));
      setIsFading(false);
    }, 300); // Matches transition duration
  }, [project.images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, prevSlide, nextSlide]);

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-background rounded-lg shadow-2xl w-full max-w-6xl h-full max-h-[90vh] flex flex-col md:flex-row overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {/* The container has the coverImage as a persistent background */}
        <div 
          className="w-full md:w-3/5 h-1/2 md:h-full relative group" 
          style={{ 
            backgroundImage: `url(${project.coverImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
           {/* The main image fades in/out on top of the cover image */}
           <div 
             style={{ backgroundImage: `url(${project.images[currentIndex]})` }} 
             className={`absolute inset-0 w-full h-full bg-center bg-cover transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}
           ></div>
        </div>
        <div className="w-full md:w-2/5 h-1/2 md:h-full p-8 overflow-y-auto">
          <h2 className="text-3xl font-serif font-bold text-text-main mb-2">{project.title}</h2>
          <p className="text-primary font-semibold mb-4">{project.category}</p>
          {project.location !== 'Unknown' && <p className="text-text-secondary mb-6">{project.location}</p>}
          <p className="text-text-secondary leading-relaxed mb-6">{project.description}</p>
          <h4 className="text-lg font-semibold text-text-main mb-2">My Scope of Work</h4>
          <ul className="list-disc list-inside text-text-secondary space-y-1">
            {project.scope.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
          {project.drawings && project.drawings.length > 0 && (
            <Link to={`/project/${project.id}/drawings`}
              className="mt-6 inline-block bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition-colors"
            >
              Drawings
            </Link>
          )}
        </div>
      </div>
      <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-primary transition-colors">
        <XIcon className="w-8 h-8" />
      </button>
    </div>
  );
};
