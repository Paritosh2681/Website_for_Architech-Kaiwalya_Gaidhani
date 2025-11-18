
import React from 'react';
import type { Experience, Education } from '../types';

interface ExperienceSectionProps {
  experience: Experience[];
  education: Education[];
}

const TimelineItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative pl-8 sm:pl-10 py-6 group">
    <div className="flex flex-col sm:flex-row items-start mb-1 sm:mb-0">
      <div className="flex-shrink-0">
        <div className="absolute left-0 h-full w-0.5 bg-primary-light mt-1"></div>
        <div className="absolute left-[-6px] top-[30px] h-3 w-3 rounded-full bg-primary ring-4 ring-primary-light transition-all duration-300 group-hover:ring-8"></div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  </div>
);

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience, education }) => {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-bold text-text-main mb-16 text-center">Career & Education</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-serif font-semibold text-text-main mb-8 ml-2">Experience</h3>
            <div>
              {experience.map((item, index) => (
                <TimelineItem key={index}>
                  <p className="font-bold text-lg text-text-main">{item.role}</p>
                  <p className="font-semibold text-primary">{item.company}</p>
                  <p className="text-sm text-text-secondary mb-2">{item.dates}</p>
                  <p className="text-text-secondary">{item.description}</p>
                  {item.projects.length > 0 && 
                    <ul className="list-disc list-inside mt-2 text-text-secondary text-sm">
                      {item.projects.map((proj, i) => <li key={i}>{proj}</li>)}
                    </ul>
                  }
                </TimelineItem>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-serif font-semibold text-text-main mb-8 ml-2">Education</h3>
            <div>
              {education.map((item, index) => (
                <TimelineItem key={index}>
                  <p className="font-bold text-lg text-text-main">{item.degree}</p>
                  <p className="font-semibold text-primary">{item.school}</p>
                  <p className="text-sm text-text-secondary mb-2">{item.year} &bull; {item.score}</p>
                </TimelineItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
