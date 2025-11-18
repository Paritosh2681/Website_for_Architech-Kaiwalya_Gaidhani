
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioData } from '../data';
import { XIcon } from './icons';

export const DrawingsPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = portfolioData.projects.find(p => p.id === projectId);

  if (!project || !project.drawings) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-background text-text-main">
        <h2 className="text-2xl font-bold mb-4">Drawings not found</h2>
        <Link to="/" className="text-primary hover:underline">Go back to homepage</Link>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-4">
      <Link to="/" className="absolute top-4 right-4 text-white hover:text-primary transition-colors">
        <XIcon className="w-10 h-10" />
      </Link>
      <h2 className="text-3xl font-serif font-bold text-white mb-8">{project.title} - Drawings</h2>
      <div className="w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.drawings.map((drawing, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={drawing} alt={`Drawing ${index + 1}`} className="w-full h-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
