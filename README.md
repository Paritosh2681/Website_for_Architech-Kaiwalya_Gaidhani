# Kaiwalya Gaidhani | Architecture Portfolio

This website showcases the architectural portfolio of Kaiwalya Charudatt Gaidhani. It provides a comprehensive overview of his skills, experience, and projects.

## Key Features & Benefits

- **Professional Presentation:** A visually appealing and well-structured presentation of architectural projects.
- **Detailed Project Information:** Each project includes detailed descriptions and relevant visuals.
- **Skills and Experience Overview:** Clear presentation of relevant skills and professional experience.
- **Contact Information:** Easy access to contact details for inquiries and collaborations.
- **Responsive Design:** Optimized for viewing on various devices.

## Technologies

### Languages

- TypeScript

### Tools & Technologies

- GitHub Actions
- Node.js
- Tailwind CSS

## Prerequisites & Dependencies

Before you begin, ensure you have the following installed:

- **Node.js:** (>=12.x)  Download and install from [https://nodejs.org/](https://nodejs.org/)
- **npm** or **yarn:** Package managers included with Node.js installation.

## Installation & Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Paritosh2681/Website_for_Architech-Kaiwalya_Gaidhani.git
    cd Website_for_Architech-Kaiwalya_Gaidhani
    ```

2.  **Install dependencies:**

    Using npm:

    ```bash
    npm install
    ```

    Or, using yarn:

    ```bash
    yarn install
    ```

3. **Run the development server:**

    Using npm:

    ```bash
    npm run dev
    ```

    Or, using yarn:

    ```bash
    yarn dev
    ```

    This will start the development server, and you can access the website in your browser at `http://localhost:5173/`.

## Project Structure

```
└── .github/
    └── workflows/
        ├── static.yml
        ├── static1.yml
├── .gitignore
├── .vite/
    └── deps/
        ├── _metadata.json
├── package.json
├── App.tsx
├── README.md
└── components/
    ├── AboutSection.tsx
    ├── ContactSection.tsx
    ├── DrawingsPage.tsx
    ├── ExperienceSection.tsx
    ├── Header.tsx
    ├── HeroSection.tsx
    ├── ProjectModal.tsx
    ├── ProjectsSection.tsx
    └── icons/
        └── index.ts
├── data.ts
├── index.html
└── types.ts
```

## Configuration Options

The project's data, such as profile information, education, experience, skills, and projects, is stored in the `data.ts` file.  Modify this file to update the website content.

```typescript
import type { Profile, Education, Experience, Skill, Project, Hobby } from './types';
import { SketchIcon, BookOpenIcon, CameraIcon } from './components/icons';

export const portfolioData = {
  profile: {
    name: "Kaiwalya Charudatt Gaidhani",
    email: "kaiwalya2509@gmail.com",
    phone: "9082579071",
    address: "Mira Road (E), Thane-401107",
    bio: "Architecture fascinates me, as it blends creativity, art, and technology, which are shaped by our life and culture. As an Architect, I'm ...",
    // ... other profile fields
  },
  // ... other data sections (education, experience, skills, projects)
};
```

## License Information

License is not specified.
## Acknowledgments

- This project utilizes [Tailwind CSS](https://tailwindcss.com/) for styling.
- Thanks to Vite for providing a fast and efficient build tool.
