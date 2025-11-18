
import React from 'react';
import type { Skill } from '../types';

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div>
    <h4 className="text-lg font-semibold text-text-main mb-2">{skill.name}</h4>
    <div className="flex items-center space-x-2">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`h-2 w-full rounded-full ${i < skill.level ? 'bg-primary' : 'bg-primary-light'}`}
        ></div>
      ))}
    </div>
  </div>
);


export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-primary-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-bold text-text-main mb-16 text-center">Software Skills</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
