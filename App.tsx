import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { DrawingsPage } from './components/DrawingsPage';
import { portfolioData } from './data';
import type { Project } from './types';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const MainLayout: React.FC<{openModal: (project: Project) => void, isScrolled: boolean}> = ({openModal, isScrolled}) => (
  <div className="flex flex-col min-h-screen">
    <Header isScrolled={isScrolled} />
    <main className="flex-grow">
      <HeroSection />
      <AboutSection profile={portfolioData.profile} hobbies={portfolioData.hobbies} />
      <ExperienceSection experience={portfolioData.experience} education={portfolioData.education} />
      <SkillsSection skills={portfolioData.skills} />
      <ProjectsSection projects={portfolioData.projects} onProjectClick={openModal} />
      <ContactSection contact={portfolioData.profile} />
    </main>
  </div>
);


const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout openModal={openModal} isScrolled={isScrolled} />} />
        <Route path="/project/:projectId/drawings" element={<DrawingsPage />} />
      </Routes>
      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </Router>
  );
};

export default App;
