
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioData } from '../data';
import { XIcon } from './icons';
import projectDrawings from 'virtual:drawings';

export const DrawingsPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = portfolioData.projects.find(p => p.id === projectId);

  // Use dynamic drawings if available, otherwise fallback to static data
  const dynamicDrawings = projectId ? projectDrawings[projectId] : [];
  const baseUrl = import.meta.env.BASE_URL;
  
  // Prepend base URL to all drawing paths
  const drawings = (dynamicDrawings && dynamicDrawings.length > 0) 
    ? dynamicDrawings.map(path => `${baseUrl}${path}`)
    : (project?.drawings || []).map(path => `${baseUrl}${path}`);

  if (!project || drawings.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-background text-text-main">
        <h2 className="text-2xl font-bold mb-4">Drawings not found</h2>
        <Link to="/" className="text-primary hover:underline">Go back to homepage</Link>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-background bg-opacity-90 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-4">
      <Link to="/" className="absolute top-4 right-4 text-text-main hover:text-primary transition-colors">
        <XIcon className="w-10 h-10" />
      </Link>
      <h2 className="text-3xl font-serif font-bold text-text-main mb-8">{project.title} - Drawings</h2>
      <div className="w-full max-w-6xl mx-auto h-[80vh] overflow-y-auto rounded-lg bg-white/10 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {drawings.map((drawing, index) => (
            <div key={index} className="bg-background-alt rounded-lg shadow-lg overflow-hidden border border-border">
              <img src={drawing} alt={`${project.title} - Drawing ${index + 1}`} className="w-full h-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
