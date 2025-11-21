import React from 'react';
import { portfolioData } from '../data';

export const HeroSection: React.FC = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-text-main overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${baseUrl}images/hero-bg.jpg)` }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-text-main/60"></div>
      </div>
      
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-4 text-primary-light">
          {portfolioData.profile.name}
        </h1>
        <p className="text-xl md:text-2xl font-light text-primary-light/80 mb-8">
          Architectural Portfolio 2025
        </p>
        <a 
          href="#projects" 
          onClick={scrollToProjects}
          className="bg-primary text-text-main font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};
