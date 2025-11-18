
import React from 'react';
import type { Profile, Hobby } from '../types';

interface AboutSectionProps {
  profile: Profile;
  hobbies: Hobby[];
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile, hobbies }) => {
  return (
    <section id="about" className="py-20 md:py-32 bg-primary-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-text-main mb-6">About Me</h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-12">
            {profile.bio}
          </p>
          <h3 className="text-2xl font-serif font-semibold text-text-main mb-6">Hobbies</h3>
          <div className="flex justify-center space-x-8 md:space-x-12">
            {hobbies.map((hobby) => (
              <div key={hobby.name} className="flex flex-col items-center">
                <hobby.icon className="w-12 h-12 text-primary mb-2" />
                <span className="text-text-secondary">{hobby.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
