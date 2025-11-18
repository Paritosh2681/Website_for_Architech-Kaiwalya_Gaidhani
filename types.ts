// FIX: Import React to provide types used in this file.
import React from 'react';

export interface Profile {
  name: string;
  email: string;
  phone: string;
  address: string;
  bio: string;
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  score: string;
}

export interface Experience {
  role: string;
  company: string;
  dates: string;
  description: string;
  projects: string[];
}

export interface Skill {
  name: string;
  level: number; // 1 to 5
}

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  scope: string[];
  coverImage: string;
  images: string[];
  drawings?: string[];
}

export interface Hobby {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
