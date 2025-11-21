
import React from 'react';
import type { Profile } from '../types';
import { MailIcon, PhoneIcon, MapPinIcon, DownloadIcon } from './icons';

interface ContactSectionProps {
  contact: Profile;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ contact }) => {
  const baseUrl = import.meta.env.BASE_URL;
  
  return (
    <footer id="contact" className="bg-primary-light py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-serif font-bold text-text-main mb-6">Get In Touch</h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-12">
          I'm currently open to new opportunities and collaborations. Feel free to reach out.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 mb-12">
          <div className="flex items-center text-text-secondary">
            <MailIcon className="w-6 h-6 mr-3 text-primary" />
            <a href={`mailto:${contact.email}`} className="hover:text-primary">{contact.email}</a>
          </div>
          <div className="flex items-center text-text-secondary">
            <PhoneIcon className="w-6 h-6 mr-3 text-primary" />
            <a href={`tel:${contact.phone}`} className="hover:text-primary">{contact.phone}</a>
          </div>
          <div className="flex items-center text-text-secondary">
            <MapPinIcon className="w-6 h-6 mr-3 text-primary" />
            <span>{contact.address}</span>
          </div>
        </div>
        <a 
          href={`${baseUrl}1.KAIWALYA_PORTFOLIO_1.pdf`} 
          download="Kaiwalya_Gaidhani_Portfolio.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
        >
          <DownloadIcon className="w-5 h-5 mr-2" />
          Download Portfolio PDF
        </a>
        <div className="mt-16 pt-8 border-t border-primary/20 text-text-secondary text-sm">
          <p>&copy; {new Date().getFullYear()} {contact.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
