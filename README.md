# 🏛️ Kaiwalya Gaidhani — Architecture Portfolio

[![Deploy](https://img.shields.io/github/actions/workflow/status/Paritosh2681/Website_for_Architech-Kaiwalya_Gaidhani/static.yml?branch=main\&label=deploy\&logo=github)](https://github.com/Paritosh2681/Website_for_Architech-Kaiwalya_Gaidhani/actions)
[![Live](https://img.shields.io/badge/GitHub%20Pages-Live-blue?logo=github)](https://paritosh2681.github.io/Website_for_Architech-Kaiwalya_Gaidhani/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite\&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react\&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript\&logoColor=white)](https://www.typescriptlang.org/)
[![Router](https://img.shields.io/badge/react--router--dom-7.x-CA4245?logo=react-router\&logoColor=white)](https://reactrouter.com/)

A **clean, responsive architecture portfolio website** for **Kaiwalya Charudatt Gaidhani**, built using **Vite + React + TypeScript** and deployed on **GitHub Pages**. The entire site is driven from a **single data source** for easy updates and long-term maintenance.

---

## 🌐 Live Demo

👉 [https://paritosh2681.github.io/Website_for_Architech-Kaiwalya_Gaidhani/](https://paritosh2681.github.io/Website_for_Architech-Kaiwalya_Gaidhani/)

---

## ✨ Features

* 🎨 Minimal, professional UI suitable for architecture portfolios
* 🧭 Smooth single-page navigation with section-based layout
* 🏗️ Dedicated sections for About, Education, Experience & Skills
* 📂 Projects grid with modal previews
* 📐 Separate Drawings page per project
* 🔍 Auto-detection of drawings from the public folder
* 📱 Fully responsive (desktop, tablet, mobile)
* 🚀 Optimized for GitHub Pages deployment

---

## 🧱 Tech Stack

**Frontend**

* React 19
* TypeScript
* Vite
* Tailwind CSS (via CDN)

**Routing**

* react-router-dom (GitHub Pages compatible)

**CI / Deployment**

* GitHub Actions
* GitHub Pages

---

## 🗂️ Project Structure

```
Website_for_Architech-Kaiwalya_Gaidhani/
├── src/
│   ├── components/
│   ├── pages/
│   ├── utils.ts
│   ├── data.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
│   └── images/projects/
├── .github/workflows/
│   └── static.yml
├── vite.config.ts
└── README.md
```

---

## 🧠 Single-Source Content System

All portfolio content (profile, education, experience, skills, and projects) is defined in **one file**:

* `src/data.ts`

Updating the website usually requires **only editing this file** — no component changes needed.

---

## 🖼️ Assets & Images

Images are stored under:

```
public/images/projects/<project-id>/
```

Examples:

* `cover.jpg`
* `drawings/plan-01.jpg`

Assets are referenced using `import.meta.env.BASE_URL` or a helper function to ensure compatibility with GitHub Pages subpaths.

---

## 📐 Drawings Auto-Discovery

A custom Vite plugin automatically scans drawing images at build time from:

```
public/images/projects/<project-id>/drawings/
```

Supported formats:

* JPG / JPEG
* PNG
* WEBP
* GIF

The drawings are exposed via a virtual module and used by:

* Project modal (to show/hide Drawings link)
* Drawings page (to render all drawings dynamically)

---

## 🧭 Routing (GitHub Pages Safe)

Routes:

* `/` → Main portfolio
* `/project/:projectId/drawings` → Drawings viewer

Configuration:

* `base` set in `vite.config.ts`
* `basename` set in `App.tsx`

⚠️ If the repository name changes, **update both**.

---

## 🚀 Getting Started

### Prerequisites

* Node.js **v20+ recommended**

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview build

```bash
npm run preview
```

---

## 🔐 Environment Variables

Environment variables are loaded using `loadEnv()`.

Optional example:

```env
GEMINI_API_KEY=your_key_here
```

If unused in the UI, environment variables can be omitted safely.

---

## 🚢 Deployment

Deployment is fully automated via GitHub Actions:

* Workflow: `.github/workflows/static.yml`
* Trigger: Push to `main`

Steps:

1. Install dependencies
2. Build project
3. Deploy `dist/` to GitHub Pages

---

## 🛠️ Troubleshooting

### Images not loading

* Verify `base` in `vite.config.ts`
* Verify `basename` in `App.tsx`
* Ensure image paths match folders in `public/`

### Drawings not showing

* Folder name must match `project.id` in `data.ts`
* Ensure files exist under `drawings/`

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

---

## 📜 License

No license is currently specified.

To open-source this project, add a `LICENSE` file and update this section.

---

## 🙌 Credits

* Vite — [https://vitejs.dev/](https://vitejs.dev/)
* React — [https://react.dev/](https://react.dev/)
* Tailwind CSS — [https://tailwindcss.com/](https://tailwindcss.com/)
* GitHub Pages — [https://pages.github.com/](https://pages.github.com/)

---

Built with ❤️ as part of a student portfolio project.
